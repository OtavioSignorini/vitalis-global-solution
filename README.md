# PITCH - Vitalis

https://youtu.be/hT-5QerGCsE


# Integrantes - Vitalis

- Otavio Campos Signorini - GitHub: OtavioSignorini

- Daniel Teixeira da Silva - GitHub: danielznz

- Kayque Mateus Marques de Paiva Barreto - GitHub: kayquemateusmarques

- Luiz Henrique Selim Mendes - GitHub: selimnds

# Vitalis - Sistema Web de Monitoramento e Acompanhamento Postural

Projeto desenvolvido como parte da **Global Solution CitizenTech** da FIAP. O sistema consiste em uma aplicação web desenvolvida com tecnologias nativas, destinada ao acompanhamento de pacientes e suporte a cuidadores na prevenção de lesões por pressão (LPP).

## Funcionalidades e Requisitos Técnicos Implementados

- **Landing Page Institucional e Interativa:** Seções detalhadas apresentando a solução, o problema das LPPs, arquitetura de hardware e modelo matemático, acompanhadas de um carrossel de imagens dinâmico implementado em JavaScript puro.
- **Autenticação e Sessão em Memória:** Sistema funcional de cadastro e login integrado com `localStorage` para gerenciar a autenticação e validar o acesso às telas protegidas do sistema.
- **Painel de Acompanhamento (Dashboard):** Tela restrita contendo cards principais de status postural, tempo decorrido, conexão IoT e parâmetros fisiológicos secundários (temperatura da pele, frequência cardíaca e respiratória), além de uma tabela interativa de histórico recente.
- **Padrões de Estilização Avançados:** Uso intensivo de **Flexbox** e **CSS Grid** para alinhamentos e layouts responsivos, variáveis CSS (`:root`) para padronização de cores e efeitos visuais modernos com degradês.
- **Acessibilidade e Boas Práticas:** Rigoroso cumprimento de padrões web com marcação semântica e atributos `alt` descritivos em todas as imagens do sistema.

## Tecnologias Utilizadas

- **HTML5:** Marcação semântica com otimização para leitores de tela e conformidade de atributos `alt`.
- **CSS3:** Estilização moderna utilizando Flexbox, Grid Layout, variáveis de escopo global e design responsivo.
- **JavaScript (Vanilla ES6+):** Manipulação de DOM sem bibliotecas externas, lógica de carrossel automatizada e gerenciamento de rotas e autenticação via `localStorage`.

## Estrutura de Pastas e Arquivos

```text
/
├── index.html                  
├── equipe.txt                  
├── README.md                   
├── css/
│   └── style.css               
├── js/
│   └── main.js                
├── auth/
│   └── auth.js                 
├── login/
│   ├── login.html              
│   ├── cadastro.html           
│   └── login.css               
├── dashboard/
│   ├── dashboard.html          
│   └── dashboard.css           
└── img/
    ├── case.png                
    ├── projeto-desconstruido.png 
    ├── vitalis-logo-azul-escuro.png
    ├── vitalis-simbolo-azul-escuro.png
    └── vitalis-pratica.png