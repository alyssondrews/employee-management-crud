<h1 align="center">
Backend Employee Management Test!
</h1>


<h2 align="center"> Cenário</h2>

O Employee Management é uma API REST desenvolvida para o gerenciamento de funcionários e empresas de um sistema.

<h2 align="center"> Tecnologias utilizadas</h2>

Para este projeto foram utilizadas as seguintes tecnologias.

-  Node.Js
-  Npm
-  Typescript
-  TypeORM
-  PostgreSQL
-  Docker

<h2 align="center"> Requisitos</h2>

É necessário ter o NodeJS instalado, você pode baixá-lo aqui [NodeJS](https://nodejs.org/en/).

É necessário ter o Docker instalado, você pode baixá-lo aqui [Docker](https://hub.docker.com/).


<h2 align="center"> Instalação </h2>

Inicialmente o projeto já deve ter sido clonado em sua maquina:
  
    $ git clone https://github.com/AlyssonDrews/employee-management-crud
   
Após ter sido clonado, devemos iniciar o banco de dados, para isso, basta  executar o seguinte comando em seu terminal:

    $ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5433:5432 -d postgres

*IMPORTANTE:* Caso você já tenha um banco de dados com o mesmo nome, deve ser mudado.

Subindo o banco de dados, deve-se entrar na pasta raíz do projeto e executar o seguinte comando para que as tabelas do banco sejam criadas.

    $npm run typeorm migration:generate -- --name first-migration
    $npm run typeorm migration:run 



<h2 align="center"> Executando o projeto </h2>

Para que a API seja executada, entre na pasta raíz e execute os seguintes comandos no seu terminal
 
    $ npm install
    $ npm start

