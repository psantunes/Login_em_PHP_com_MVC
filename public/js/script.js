let ajax;
// dispara Ajax
function requestAjax(link) {
    ajax =  new XMLHttpRequest();
    ajax.onreadystatechange = meuCallback;
    ajax.open("GET", link, true);
    ajax.send();
}

// testa resultado de json de insert e update
function meuCallback() {
    if (ajax.status === 200 && ajax.readyState === 4) {
        let resultado = ajax.responseText;
        let json = JSON.parse(resultado);

        //erros do login
        if (json.resultado == "achei") {
            let msg = "Usuário logado com sucesso";
            document.getElementById("alerta").innerHTML = msg;
            document.getElementById("alerta").style.visibility = "visible";
        } else if (json.resultado == "fail") {
            let msg = "Usuário não encontrado ou senha inválida";
            document.getElementById("alerta").innerHTML = msg;
            document.getElementById("alerta").style.visibility = "visible";

        //erros do cadastro
    } else if (json.resultado == "inserido") {
            let msg = "Usuário cadastrado com sucesso";
            document.getElementById("alerta").innerHTML = msg;
            document.getElementById("alerta").style.visibility = "visible";
        } else if (json.resultado == "erro") {
            let msg = "Erro ao realizar o cadastro. Verifique se os dados foram inseridos corretamente";
            document.getElementById("alerta").innerHTML = msg;
            document.getElementById("alerta").style.visibility = "visible";
        }
    }
}

function cadastraUsuario() {
    let strLogin = document.getElementById("login").value;
    let strSenha1 = document.getElementById("senha1").value;
    let strSenha2 = document.getElementById("senha2").value;

    //compara senhas
    if (strSenha1 != strSenha2) {
        let msg = "As senhas digitadas não são iguais.";
        document.getElementById("alerta").innerHTML = msg;
        document.getElementById("alerta").style.visibility = "visible";
    } else {
        let link = "../controller/controllerCadastro.php?login=" + strLogin + "&senha=" + strSenha1;
        requestAjax(link)    
    }

}

function logaUsuario() {
        let strLogin = document.getElementById("login").value;
        let strSenha = document.getElementById("senha").value;
        let link = "../controller/controllerLogin.php?login=" + strLogin + "&senha=" + strSenha;
        requestAjax(link)
}


 