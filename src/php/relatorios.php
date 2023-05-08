<?php
// Fazer a conexão com o banco de dados MySQL
$host = "localhost";
$user = "nome_do_usuario";
$password = "senha_do_usuario";
$database = "nome_do_banco_de_dados";
$conn = mysqli_connect($host, $user, $password, $database);

// Verificar se a conexão foi bem sucedida
if (!$conn) {
  die("Falha na conexão com o banco de dados: " . mysqli_connect_error());
}

// Criar a consulta SQL para recuperar dados
$sql = "SELECT nome, sobrenome, email FROM usuarios";

// Executar a consulta SQL
$resultado = mysqli_query($conn, $sql);

// Exibir os dados em uma tabela HTML
echo "<table>";
echo "<tr><th>Nome</th><th>Sobrenome</th><th>Email</th></tr>";
while ($linha = mysqli_fetch_assoc($resultado)) {
  echo "<tr><td>".$linha["nome"]."</td><td>".$linha["sobrenome"]."</td><td>".$linha["email"]."</td></tr>";
}
echo "</table>";

// Fechar a conexão com o banco de dados
mysqli_close($conn);
?>