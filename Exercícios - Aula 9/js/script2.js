function pesquisa() {
    let tt = $('#titulo').val();
    let cc = $("#cl").val();
    

    $.getJSON("dados.json", function(data){

        $.each(data.livros.titulo, function(i, v) {
            if (v.titulo == "a");
        })

        for(let opc of data.livros){
            if(opc.titulo == tt && opc.classificacao == cc) {
                alert("livro")
                console.log(opc);
                //$("#oi").append(opc.id + "-" + opc.titulo + "<br>");
                $("#tabela").append('<tr><td>'+opc.titulo+'</td><td>'+opc.autor+'</td><td>'+opc.edicao+'</td><td>'+opc.ano+'</td><td>'+opc.editora+'</td><td>'+opc.local+'</td><td>'+opc.classificacao+'</td><td>'+opc.codigo+'</td><td>'+opc.assunto+'</td></tr>')
            } else {
                console.log("Opção inválida", tt);
            }
        }
        });
}