<p align="center">
<img height="250" width="850" src="https://user-images.githubusercontent.com/82064724/150548297-8b3d7105-278b-4fd6-bbaf-3a5a63243446.png">
</p>

<img align="right" src="https://img.shields.io/static/v1?label=project&message=Compass&color=F0FD71&style=for-the-badge&logo=ghost"/>

# **📝 Register Employees and Products**

Bem-vindo(a). Este é o desafio da 4° sprint!

Opa dev tudo bem?! Este é o grupo03, que através desse repositório vem entregar o 3° desafio do programa de bolsas.
O desafio que foi construído com o conteúdo aprendido ao decorrer das Sprints. Colocando dessa vez o trabalho em grupo no desenvolvimento dessa api.
Esperamos que goste!!

Vamos ao projeto! `#dreamBigger🚀💛`

<br>

> <b>Status code:</b>  Finalizada!! ✅

---

 ## ℹ Indice
<!--ts-->
   * [🧠 Contexto](#-Contexto)
     * [Rotas](#-rotas)
   * [💻 Baixar e executar o projeto](#-Baixar-e-executar-o-projeto)
     * [Setup da aplicação](#-setup-da-aplicação)
     * [Iniciando a aplicação](#-iniciando-a-aplicação)
   * [🛠 Tecnologias](#-tecnologias)
   * [🌟 Agradecimentos](#-Agradecimentos)
   * [✏ Contribuintes](#-Contribuintes)
   * [📃 Licença](#-licença)
   * [🎁 Bonus ](#-bonus)
<!--te-->

<br>

 ---

 ## 🧠 Contexto
Neste desafio em grupo do programa de bolsas, será a criação de uma api de cadastro de funcionários e produtos. Neste projeto estamos incluído paginação na busca por funcionários e produtos, e fluxos de:

 * Interação de métodos http. (criar, buscar, editar e remover);
 * Query params nas rotas de buscar;
 * validações dos campos;

 ### • Rotas:

**- employee**

| Id             | Request           | Endpoint                 |
|--------------- | ------------------| -------------------------|
|1               | `POST`            | cadastrar um funcionário |
|2               | `GET`             | listar funcionários      |
|3               | `PUT`             | atualizar funcionários   |
|4               | `DELETE`          | deletar funcionário      |

**- product**

| Id             | Request           | Endpoint                 |
|--------------- | ------------------| -------------------------|
|5               | `POST`            | cadastrar um produto     |
|6               | `GET`             | listar produtos          |

<br>

---

## 💻 Baixar e executar o projeto

###  Pré-requisitos


Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postman](https://www.postman.com/downloads/) e [MongoDB](https://www.mongodb.com/pt-br).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

O [Docker](https://www.docker.com/products/docker-desktop) é opicional. Mas caso opte por utilizalo, o [Node.js](https://nodejs.org/en/) e [MongoDB](https://www.mongodb.com/pt-br) viram opcionais.

### 🎲 Setup da aplicação

#### 1. Clonando a aplicação localmente

O primeiro passo para começar a configurar o servidor é clonar o repositório na sua máquina.

```bash
# Clone este repositório
$ git clone <https://github.com/grupo0003/register-Employees-Products-.git>

# Acesse a pasta do projeto no terminal
$ cd register-Employees-Products-
```

#### 2. Configurar as variáveis de ambiente
O servidor usa de variáveis de ambiente para transportar dados sensíveis pela aplicação.

Será necessário criar na raiz do projeto um arquivo `.env` configurar as variáveis:
```bash
# Porta que o servidor irá rodar.
PORT=3000

# Driver de conexão com o mongo.
# Caso opte por MongoDB Cluster, DB_DRIVE = mongodb+srv
DB_DRIVE=mongodb

# Endereço do serviço do MongoDB
# No docker, "mongo" é o endereço para fazer a
# comunicação com o container do MongoDB
DB_HOST=mongo

# Este campo é opcional, valor padrão é 27017
DB_PORT=27017

# Usuário para se conectar com o MongoDB
DB_USER=user

# Senha para se conectar com o MongoDB
DB_PASS=pass

# Database que será guardada as Coleções
DB_DATABASE=desafio-03
```
> Utilizando o docker, DB_USER e DB_PASS podem ser qualquer valor.

### ▶ Iniciando a aplicação
Depois de ter as variáveis de ambiente configuradas, basta iniciar o servidor.

Para subir em modo `produção`, basta executar:
```bash
# Sem docker
$ npm run start

# Com docker
$ npm run docker:up
```

Para subir em modo `desenvolvimento`:
```bash
# Sem docker
$ npm run dev

# Com docker
$ npm run docker:up:dev
```

Para iniciar em todo de `test` (Teste de feature):
```bash
# Sem docker
$ npm run test

# Com docker
$ npm docker:up:test
```

---

## 🛠 Tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e testagem do projeto. Clicando no icone da tecnologia, você será redirecionado para o site oficial para instalação: <br>

| logo               | Framework                  | Version      |
| :----------------- | :------------------------- | :----------: |
| <a href="https://nodejs.org/pt-br/download/" target="_blank"><img align="center" alt="nodeJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a>                   | NodeJs                     |  `16.13.1`      |
| <a href="https://www.mongodb.com/try/download/community" target="_blank"><img align="center" alt="mongo" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"></a>            | MongoDB                      |  `5.0.5`       |
| <a href="https://www.postman.com/downloads/" target="_blank"><img align="center" alt="postman" height="30" width="30" src="https://user-images.githubusercontent.com/82064724/147416090-89b4e7a3-2b78-417a-a154-f47940d23e38.png">            | Postman                    |  `9.6.2`       |
| <a href="https://code.visualstudio.com/download" target="_blank"><img align="center" alt="VsCode" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg"></a> | VsCode | `1.63.2` |
| <a href="https://nodejs.org/pt-br/download/" target="_blank"><img align="center" alt="docker" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/docker/docker-original.svg"></a>|                             Docker|`xx.x.x`|

---

## **🌟 Agradecimentos**

<div align=left style="width:100%">
<table>
  <tr align=center>
    <th>CompassUol</th>
    <th>Felipe</th>
    <th>Thais </th>
    <th>Diego</th>
    <th>Bruna</th>
    <th>Gabriel</th>
    <th>Giovanni</th>
  </tr>
  <td>
      <a href="https://compass.uol/">
        <img width="100" height="100" src="https://user-images.githubusercontent.com/82064724/147250813-a8ffeeaa-d1e0-464d-b157-5b1832419962.jpg">
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/in/felps03/">
        <img width="138" height="120" src="https://user-images.githubusercontent.com/82064724/147247938-ad746eb0-6acb-493d-a5a1-f18ced1f79ea.jpeg">
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/in/thaisnicodemus/">
        <img width="138" height="120" src="https://user-images.githubusercontent.com/82064724/147248193-cb95b8e0-9b86-4788-9c99-1f7d81a67c5c.jpeg">
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/in/diego-scacinate-13b790b5/">
        <img width="138" height="120" src="https://user-images.githubusercontent.com/82064724/147248671-1433631f-d30e-43ef-8a90-11f1eb0dad6e.jpeg">
      </a>
    </td>
    <td>
      <a href="https://www.linkedin.com/in/brunasantos14/">
        <img width="138" height="120" src="https://user-images.githubusercontent.com/82064724/147249013-2461e045-8883-45b3-8aaa-54f25b0039a2.jpeg">
      </a>
    </td>
      <td>
      <a href="https://www.linkedin.com/in/gabriel-missio-5a423b192/">
        <img width="138" height="120" src="https://user-images.githubusercontent.com/82064724/148302349-1139200d-fda8-4c27-900a-3f6a71a7da1c.jpeg">
      </a>
    </td>
 <td>
      <a href="https://www.linkedin.com/in/giovanni-hoffmann-rodrigues-9253266a/">
        <img width="138" height="120" src="https://user-images.githubusercontent.com/82064724/147251080-3157eb74-fce3-4467-982b-8f04a33a62df.jpeg">
      </a>
    </td>
  </tr>
</table>

</div>

<br>

## ✏ Contribuintes

Nos do grupo 03 queremos agradecer a toda a equipe da compasso pelo suporte dado a nós ao decorrer desse programa de bolsas e desafios, é muito gratificante termos concluído o projeto dessa sprint, usando o trabalho em grupo e o scrum como metodologia para o desenvolvimento da aplicação.

Obrigado mais uma vez e vamos para o próxima!!`#dreamBigger🚀💛`<br>


<div align=left>

- <table>
 <p> Desenvolvido por:</p>
  <tr align=center>
    <th><strong> 📝 Brendson  </strong></th>
    <th><strong> 🧪 Diogo  </strong></th>
    <th><strong> 📖 Felipe  </strong></th>
    <th><strong> 💻 Leandro  </strong></th>
    <th><strong> 💻 Washington </strong></th>
  </tr>
   <td>
      <a href="https://github.com/br3nds0n">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/147268606-4fd3c629-8cb1-422b-a025-cf20b44930c7.jpeg" > <p align="left">
</p></a>
    <p align="center">Code review - dev</p>
    </td>
   <td>
      <a href="https://github.com/diogo-alexandre">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/150702309-fcca4e25-45dd-484f-a3be-7f8dbdf57b84.jpeg" > <p align="left">
</p></a>
    <p align="center"> QA - dev</p>
    </td>
    <td>
      <a href="https://github.com/Felipbdc">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/150708830-97c4e2d4-4845-4ec3-965a-eae4f7493fd9.jpeg" > <p align="left">
</p></a>
     <p align="center">SM-CR-dev</p>
    </td>
     <td>
      <a href="https://github.com/leoBarrosDev">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/150272417-f29ba5ad-574b-4471-889e-cff6e3406d16.png" > <p align="left">
</p></a>
      <p align="center">Deployer - dev</p>
    </td>
  </td>
     <td>
      <a href="https://github.com/washington-wj">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/150542038-ec2476f0-c8fa-4f3c-8b7d-5b6dc7d95f2f.jpg" > <p align="left">
</p></a>
      <p align="center">Developer</p>
    </td>
  </tr>
</table>
</div>

<div align=left>

---

## 📃 LICENÇA

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.

 <br>

## 🎁 **Bonus**

<img height="340" width="850" src="https://user-images.githubusercontent.com/82064724/150680050-5458c736-de64-4e98-9584-97e9080199b1.png" >

