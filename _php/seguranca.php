<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link href="_bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="_css/estilo.css" rel="stylesheet" />
    <title>BreakDesk</title>
</head>
<body id="corpo">
</body>
</html>

<?php
$login = $_POST['inputEmail'];
$senha = $_POST['password'];

    $segLogin = strpos($login,";");
    $segSenha = strpos($senha,";");

if($segLogin == false) {
    if($segSenha == false) {

        $conectaBanco = mysql_connect("localhost" , "root" , "root");
            if ($conectaBanco == true) {
                mysql_select_db("BreakDesk" , $conectaBanco);
                $sqlLogin = "SELECT login , senha FROM PESSOA WHERE login = '$login' , '$senha'";
                    if ($segLogin == true) {
                        header('location: ../_html/principal.html');
                    } else {
                        die();
                        echo "<script language=javascript>alert('LOGIN E SENHA INVALIDO')
                                    .window.location.replace('../index.html');</script>";
                    }
            } else {
                die();
                echo "<script language=javascript>alert('ERRO FATAL CONTACTAR SUPORTE')
                                    .window.location.replace('../index.html');</script>";
            }

    } else {
        echo "<script language=javascript>alert('CARACTER INVALIDO').window.location.replace('../index.html');</script>";
    }
} else {
    echo "<script language=javascript>alert('CARACTER INVALIDO').window.location.replace('../index.html');</script>";
}
mysql_close($conectaBanco);
?>