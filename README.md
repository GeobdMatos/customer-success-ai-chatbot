# Nola CS Chatbot

Projeto desenvolvido para um desafio técnico de estágio em Customer Success.

## Objetivo

Criar um chatbot automatizado utilizando N8N, Google Sheets e IA para responder dúvidas recorrentes de clientes de uma plataforma de gestão de restaurantes.

## Tecnologias utilizadas

* N8N
* Google Sheets
* Groq API (Llama 3.1)
* Webhooks
* JavaScript

## Funcionamento

O fluxo funciona da seguinte forma:

1. O usuário envia uma pergunta via Webhook;
2. O N8N recebe a mensagem;
3. O Google Sheets é consultado como base de conhecimento;
4. Um node Code organiza os dados;
5. A IA gera uma resposta baseada na base de conhecimento;
6. O chatbot responde de forma automatizada.

## Estrutura do fluxo

![Fluxo do N8N](./fluxo.png)

## Benefícios para Customer Success

* Redução de chamados repetitivos;
* Respostas mais rápidas;
* Escalabilidade do atendimento;
* Melhoria da experiência do cliente;
* Otimização operacional.

## Interface Web

Além do fluxo de automação no N8N, também foi desenvolvida uma interface web para tornar a interação com o chatbot mais simples e intuitiva.

A aplicação permite que usuários enviem perguntas diretamente para o webhook do N8N, recebendo respostas geradas pela IA com base na base de conhecimento armazenada no Google Sheets.

### Funcionalidades

* Interface de chat em tempo real;
* Integração com Webhook do N8N;
* Respostas automatizadas utilizando IA;
* Consulta dinâmica à base de conhecimento;
* Experiência inspirada em sistemas reais de suporte.

## Demonstração

### Interface do Chatbot

![Interface Web](./pagweb.png)


## Como utilizar



## Tecnologias utilizadas

* HTML
* CSS
* JavaScript
* N8N
* Google Sheets
* Groq API (Llama 3.1)

## Objetivo do projeto

Este projeto foi desenvolvido como solução para um desafio técnico de estágio em Customer Success, com foco em:

* automação de atendimento;
* experiência do usuário;
* eficiência operacional;
* aplicação prática de IA em suporte técnico.


## Observações

Este projeto foi desenvolvido com foco em simplicidade, automação e aplicabilidade prática para operações de Customer Success.
