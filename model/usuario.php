<?php

class Usuario {
    private $id;
    private $login;
    private $senha;
  
 //construtor da classe
public function Usuario($login, $senha){
    $this->login = $login;
    $this->senha = md5($senha);
}

public function getLogin (){
    return $this->login;
}

public function setLogin ($login){
    $this->login = $login;  
}

public function getSenha(){
    return $this->senha;
}
 
public function setSenha ($senha){
    $this->senha = $senha;
}

 public function create() {

    include '../controller/setup.php';
    $sql = "INSERT INTO usuario (login, senha) VALUES ('".$this->getLogin()."','".$this->getSenha()."')";
    $resultado = mysqli_query($connection, $sql);
    mysqli_close($connection);

    if ($resultado)
    $strJson = "{\"resultado\": \"inserido\"}";
    else 
    $strJson = "{\"resultado\": \"erro\"}";

    echo $strJson;

 }

 public function validaUsuario() {

    include '../controller/setup.php';
    $sql = 'SELECT * FROM usuario WHERE login ="'.$this->getLogin().'" AND senha ="'.$this->getSenha().'"';
    $resultado = mysqli_query($connection, $sql);
    mysqli_close($connection);


    if ($resultado ->num_rows > 0)
    $strJson = "{\"resultado\": \"achei\"}";
    else 
    $strJson = "{\"resultado\": \"fail\"}";

    echo $strJson;
    }
   

}
 
?>