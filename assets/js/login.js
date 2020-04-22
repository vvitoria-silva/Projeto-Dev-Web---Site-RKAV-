function enviardados() {


    if (document.dados.tx_email.value == "" || document.dados.tx_email.value.indexOf('@') == -1 || document.dados.tx_email.value.indexOf('.') == -1 || document.dados.tx_email.value.indexOf('suporte.pessoapalheta@gmail.com')) {
        alert("Preencha campo E-MAIL corretamente!");
        document.dados.tx_email.focus();
        return false;
    }



    if (document.dados.tx_password.value.length < 8 || document.dados.tx_password.value.indexOf('Senha123')) {
        alert("Senha Inválida!");
        document.dados.tx_password.focus();
        return false;
    }

    return true;
}