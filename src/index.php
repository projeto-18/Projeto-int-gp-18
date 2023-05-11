<?php
// Conexão com o banco de dados
$servername = "mysql.clvtpz0ffks2.us-east-1.rds.amazonaws.com";
$username = "minhasaude";
$password = "Pjminhasaude2023";
$dbname = "minhasaude";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Obtém os valores do formulário
$username = $_POST['username'];
$password = $_POST['password'];

// Consulta SQL para verificar se o usuário existe

$sql = "SELECT * FROM `minhasaude`.`tbl_usuario` WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

//$sql = "SELECT * FROM minhasaude.tbl_usuario WHERE username = //'$username' AND password = '$password'";
//$result = $conn->query($sql);

// Verifica se o resultado da consulta possui algum registro
if ($result->num_rows > 0) {
    // Usuário autenticado com sucesso
    echo "Login realizado com sucesso!";
} else {
    // Usuário não encontrado ou senha incorreta
}   

