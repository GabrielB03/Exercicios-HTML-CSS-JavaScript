export class Calculos{

    objeto_local = null
    objeto_site = null

    constructor(fii_objeto_local, fii_objeto_site){
        this.objeto_local = fii_objeto_local
        this.objeto_site = fii_objeto_site
        return {
                "valorProvento":this.#getValorProvento(),
                "dataFechamentoFii":this.#getDataFechamentoFii(),
                "dataPagamentoProvento":this.#getDataPagamentoProvento(), 
                "percentualRendimento":this.#getPercentualRendimento(), 
                "totalCotas":this.#getTotalCotasFii(), 
                "totalInvestido":this.#getTotalInvestidoFii(), 
                "totalProventosRecebidos":this.#getTotalProventosRecebidos(), 
                "precoMedio":this.#getPrecoMedio(),
                "rendimento":this.#getRendimento(),
            }
    }

    #getValorProvento(){
        let rend
        
        if(this.objeto_site.proximoRendimento.rendimento != "-" ){
            rend = this.objeto_site.proximoRendimento.rendimento;
        } else{
            rend = this.objeto_site.ultimoRendimento.rendimento;
        }
        
        return rend
    }

    #getDataFechamentoFii(){
        let fii
        
        if(this.objeto_site.proximoRendimento.dataBase != "-" ){
            fii = this.objeto_site.proximoRendimento.dataBase;
        } else{
            fii = this.objeto_site.ultimoRendimento.dataBase;
        }
        
        return fii
    }

    #getDataPagamentoProvento(){
        let pag
        
        if(this.objeto_site.proximoRendimento.dataPag != "-" ){
            pag = this.objeto_site.proximoRendimento.dataPag;
        } else{
            pag = this.objeto_site.ultimoRendimento.dataPag;
        }
        
        return pag
    }

    #getPercentualRendimento(){
        let percent
        let val = this.objeto_site.valorAtual
        percent = this.#getValorProvento()*100/val
        return percent
    }

    #getTotalCotasFii(){
        return this.objeto_local.qtde
    }

    #getTotalInvestidoFii(){
        return this.objeto_local.totalgasto
    }

    #getTotalProventosRecebidos(){
        return this.#getValorProvento()*this.objeto_local.qtde
    }

    #getPrecoMedio(){
        return this.objeto_local.totalgasto/this.objeto_local.qtde
    }

    #getRendimento(){
       return(this.objeto_site.proximoRendimento.rendimento != "-")?this.objeto_site.proximoRendimento.rendimento:this.objeto_site.ultimoRendimento.rendimento
    }
}