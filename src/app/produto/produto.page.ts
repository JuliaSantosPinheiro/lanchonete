import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage {
  
  public pathImgs   = '../../assets/img/';
  public quantidade = 0;
  
  public produto = {
    codigo      : 0, 
    nome        : '',
    categoria   : 0, 
    descricao   : '', 
    valor       : 0.00, 
    imagens     : [], 
    visibled    : false
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.produto = params['produto'];
    });
   }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

}
