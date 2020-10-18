<h1 align = "center">
<strong>TaskList</strong>
</h1>

<p align="center">
   <a href="https://www.linkedin.com/in/josu%C3%A9-batista-694bba135/">
      <img alt="Josué Batista" src="https://img.shields.io/badge/-JosuéBatista-009933?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Josuebmota/TaskList?color=009933">
  <a href="https://github.com/Josuebmota/TaskList/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Josuebmota/TaskList?color=009933">
  </a> 
  <a href="https://github.com/Josuebmota/TaskList/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/badge/license-MIT-009933">
  </a>
  <a href="https://github.com/Josuebmota/TaskList/stargazers"><img alt="Stargazers" src="https://img.shields.io/github/stars/Josuebmota/TaskList?color=009933&logo=github">
  </a>
</p>

## 📌 Tecnologias Usadas
🍀 NodeJs - Ambiente de execução javascript server-side. <br>
🚤 Express - Framework flexivel, que gerencia uma aplicação em NodeJs.<br>
🐳 Docker - Criação de ambientes isolados via container<br>
🍃 MongoDB - Banco NoSql. <br>
🔒 Jwt - ferramenta para geração de tokens de autentificação.<br>

## 🛠️ Ferramentas Utilizadas
- [Vs Code](https://code.visualstudio.com/)
- [Insomnia Designer](https://insomnia.rest/download/)
- [Studio 3t](https://studio3t.com/)
- [MongoDB](https://hub.docker.com/)

## 📁 Modelo de entidade e relacionamento
<p align = "center">
<img src ="https://user-images.githubusercontent.com/34459397/96355776-fe852700-10bb-11eb-9880-42125cd73874.png"/>
</p>

## 🚀 Execução
A execução tomou como base a utilização de container docker, para subir o banco mongoDB

```
# Clone o repositório
git clone https://github.com/Josuebmota/TaskList.git

# Vá para o diretório do arquivo
cd TaskList

# Faça o download das dependências
yarn

# Baixar o container docker
docker pull mongo

# rodar o container
docker run -d -p 27017:27017 -name tasklist  -e MONGODB_PASS="mongo" mongo

# Start o projeto
yarn dev
```
Afim de facilitar os testes das rotas, efetue o download do arquivo abaixo:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=apitasklist&uri=https%3A%2F%2Fgithub.com%2FJosuebmota%2FTaskList%2Fblob%2Fmaster%2FInsomnia.json)

## 🐛 Problemas

Sinta-se a vontade de registrar um novo problema, com um respectivo título e descrição no repositório do [TaskList](https://github.com/Josuebmota/TaskList/issues). Se encontrar a solução, avaliarei seu Pull Request.

#### 👨‍💻 [](<[https://github.com/Josuebmota/TaskList](https://github.com/Josuebmota/TaskList)#autor>)Autor

Criado por [**Josué Batista Mota** ](https://github.com/Josuebmota), <br>esse projeto está sobre [MIT license](./LICENSE) 📃.

Coloque uma ⭐️ caso esse proejto tenha lhe ajudado
