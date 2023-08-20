let url = "xml/registro.xml";
$.ajax(url).done(function (xml) {
    $(xml).find("pessoafisica").each(function () {
        $("#registro").append(
            '<div><img src="imagens/'+$(this).find('foto').text()+'"> <br> <p>'+$(this).find('nome').text()+'</p><br><p>'+$(this).find('cpf').text()+'<br>'+$(this).find('endereco').find('cidade').text()+'<div id="c2"><p>Cel: '+$(this).find('contato').find('celular').text()+'<p>E-mail: '+$(this).find('contato').find('email').text()+'</p></div></div><br>'
        );
        console.log(xml);
    });
})
.fail(function () {
    $("#registro").append("ERRO");
})