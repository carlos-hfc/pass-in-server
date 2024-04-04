<p align="center">
  <img src="https://img.shields.io/github/license/carlos-hfc/pass-in-server" />
  <img src="https://img.shields.io/badge/node-v20.11-339933?style=flat&logo=nodedotjs&logoColor=%23339933" />
  <img src="https://img.shields.io/badge/npm-v10.2.4-CB3837?style=flat&logo=npm" />
  <img src="https://img.shields.io/badge/feito_por-Carlos_Faustino-black" />
</p>

<br/>

# :bulb: Sobre

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.


## :page_with_curl: Pré-requisitos

1. Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. 
    <a href="https://nodejs.org">
      <img width="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    </a>

## :gear: Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/carlos-hfc/pass-in-server
```

2. Acesse o diretório do projeto:

```bash
cd pass-in-server
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione a URL do banco de dados e a URL base do backend:
```env
DATABASE_URL="file:./dev.db"
BASE_URL="http://localhost:3333"
```

5. Rode a aplicação

```bash
npm run dev
```

## :computer_mouse: Features

1. O organizador deve poder cadastrar um novo evento
1. O organizador deve poder visualizar dados de um evento
1. O organizador deve poser visualizar a lista de participantes
1. O participante deve poder se inscrever em um evento
1. O participante deve poder visualizar seu crachá de inscrição
1. O participante deve poder realizar check-in no evento
1. O participante só pode se inscrever em um evento uma única vez
1. O participante só pode se inscrever em eventos com vagas disponíveis
1. O participante só pode realizar check-in em um evento uma única vez
1. O check-in no evento será realizado através de um QRCode


## :computer: Tecnologias utilizadas

<p float="left">
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
</p>

## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).