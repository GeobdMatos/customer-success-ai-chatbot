const messagesEl = document.getElementById('messages');
    const input = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const webhookInput = document.getElementById('webhookUrl');

    function getTime() {
      return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    function addMessage(text, type) {
      const msg = document.createElement('div');
      msg.className = 'msg ' + type;
      const initials = type === 'bot' ? 'S' : 'Eu';
      msg.innerHTML = `
        <div class="msg-avatar">${initials}</div>
        <div>
          <div class="msg-bubble">${text}</div>
          <div class="msg-time">${getTime()}</div>
        </div>`;
      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showTyping() {
      const el = document.createElement('div');
      el.className = 'msg bot';
      el.id = 'typing';
      el.innerHTML = `
        <div class="msg-avatar">S</div>
        <div class="typing"><span></span><span></span><span></span></div>`;
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function removeTyping() {
      const el = document.getElementById('typing');
      if (el) el.remove();
    }

    async function sendMessage(text) {
      const msg = text || input.value.trim();
      if (!msg) return;

      const url = webhookInput.value.trim();
      if (!url) {
        alert('Cole a URL do seu webhook N8N no campo acima!');
        return;
      }

      addMessage(msg, 'user');
      input.value = '';
      sendBtn.disabled = true;
      showTyping();

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: msg })
        });
        const data = await res.json();
        removeTyping();
        const reply = data.resposta || data.message || 'Não consegui obter uma resposta. Tente novamente.';
        addMessage(reply, 'bot');
      } catch (e) {
        removeTyping();
        addMessage('Erro ao conectar com o suporte. Verifique a URL do webhook e tente novamente.', 'bot');
      }

      sendBtn.disabled = false;
      input.focus();
    }

    function sendQuick(text) {
      sendMessage(text);
    }

    sendBtn.addEventListener('click', () => sendMessage());
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMessage();
    });