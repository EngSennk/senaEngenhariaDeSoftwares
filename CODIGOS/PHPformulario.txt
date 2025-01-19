<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root"; // Usuário padrão do XAMPP
$password = ""; // Senha padrão do XAMPP (geralmente vazia)
$dbname = "formulario"; // Nome do seu banco de dados

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);
}

// Recebe os dados do formulário
$nome = $_GET['nome'];
$email = $_GET['email'];
$assunto = $_GET['assunto'];
$mensagem = $_GET['mensagem'];

// Insere os dados na tabela
$sql = "INSERT INTO contatos (nome, email, assunto, mensagem) VALUES ('$nome', '$email', '$assunto', '$mensagem')";

if ($conn->query($sql) === TRUE) {
  echo "Dados inseridos com sucesso!";
} else {
  echo "Erro ao inserir dados: " . $conn->error;
}

$conn->close();
