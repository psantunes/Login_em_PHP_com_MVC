<?php
require_once '../model/usuario.php';

       $login = $_GET["login"];
       $senha = $_GET["senha"];
   
       $usuario = new Usuario($login, $senha);
       $usuario->validaUsuario();

 ?>