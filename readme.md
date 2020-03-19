# Cadastro e Login de Usuário em PHP com MVC

A aplicação consiste em uma aplicação para cadastro e login de usuário em linguagem PHP. Para o projeto, buscou-se trabalhar com PHP orientado a objeto e com o padrão de projeto de software MVC.

## Banco de dados

O sistema roda em um banco de dados MySQL rodando localhost. As configurações padrão para o acesso pela aplicação estão descritas em **controller\setup,php**.
O banco de dados possui uma única tabela, com três colunas (id, login e senha) e um único usuário cadastrado.
O dump da base de dados está disponivel na raiz do projeto, no arquivo **usuario.sql**.

## Front-end

O arquivo **index.html** direciona para duas views, nos arquivos **view\cadastraUsuario.html** e **view\logaUsuario.html**.

O front-end foi todo feito em HTML e Javascript. Para uma rápida configuração do CSS da página foi importada um fonte do Google e usado o Bootstrap. O CSS adicional está em **public\css\style.css**.

A aplicação usa Ajax para retornar o retorno das funções de cadastramento e login. O retorno da funçãoo é feito em uma div oculta chamada **alerta**, para não dar reload nas páginas. Todas as funções em Javascript estão em **public\js\script.js**.

## Back-end

O objetivo principal era testar o uso do PHP na programação orientada a objeto e por isto tratamos o usuário como um objeto, com os atributos login e senha. Buscou-se seguir o padrão MVC (Model-View-Controller), não sei se de forma bem sucedida, fazendo o tratamento do objeto é feito através do arquivo **model\usuario.php** e o instanciamento deste objeto nos arquivos **controller\controllerCadastro.php** e  **controller\controllerLogin.php**.

Os dois arquivos HTML na pastas views, recebem os dados do usuário e o repassam para os arquivos em controller, que instanciam o usuário e chamam as funções correspondentes.

Para este exercício foram criadas apenas duas funções, uma de cadastro e outra de validação de login. Outras funções para deletar, atualizar e recuperar uma lista de usuários, completando um Crud, poderão ser desenvolvidas futuramente.

## Segurança

O campo login da tabela usuario do MySQL foi marcado como Unique, para evitar que mais de um login seja cadastrado com o mesmo nome. Mas não foi feito o tratamento desta mensagem de erro ao usuário, que recebe apenas uma mensagem de erro padrão, o que poderá ser feito numa próxima versão.

No cadastramento do usuário é pedido que ele digite duas vezes a senha, de forma a comparar as senhas digitadas.

As senhas são salvas no banco de dados criptografadas com o hash MD5.