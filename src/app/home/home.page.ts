import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [
    { codigo: 1, nome: 'Pizzas Individuais'    },
    { codigo: 2, nome: 'Hambúrgueres Caseiros'  },
    { codigo: 3, nome: 'Fritos'    },
    { codigo: 4, nome: 'Dogão' }
  ]

  public slideOpts = {
    slidesPerView: 3
  }

  public produtos = [
    { codigo: 1, categoria: 3, descricao: 'Coxa de carne, deliciosa', nome: 'Coxinha de carne', valor: 17.90, imagens: ['coxa1.jpg'], visibled: false },
    { codigo: 2, categoria: 3, descricao: 'Risoles delicinha', nome: 'Risoles de Carne', valor: 32.00, imagens: ['risoleto.jpg'], visibled: false },
    { codigo: 3, categoria: 3, descricao: 'Bolota de queijo que explode na boca', nome: 'Bolota de Queijo', valor: 12.00, imagens: ['bola1.jpg'], visibled: false },
    { codigo: 4, categoria: 1, descricao: 'Pizza de frango com catupiry, para a familia toda jantar', nome: 'Frango com catupiry', valor: 65.90, imagens: ['pitiza1.jpg'], visibled: false },
    { codigo: 5, categoria: 1, descricao: 'Pizza de catupireijo, o melhor dos dois mundos', nome: 'Cheddar com catupiry', valor: 40.45, imagens: ['pitiza2.jpg'], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Para quem veio para a janta', nome: 'Costela', valor: 49.50, imagens: ['pitiza3.jpg'], visibled: false },  
    { codigo: 7, categoria: 2, descricao: 'Cama de bacon, com hamburguer duplo, dobrando o bacon com adicional duplo de bacon e forrado com bacon', nome: 'Bacon com bacon', valor: 41.30, imagens: ['burge1.jpg' ], visibled: false },
    { codigo: 8, categoria: 2, descricao: 'Grandes fomes, com 4 camadas de cheddar, bacon, salada e molho', nome: 'Torre de Hambuguer', valor: 45.50, imagens: ['burgue2.jpg' ], visibled: false },
    { codigo: 9, categoria: 2, descricao: 'Para o amigo dos animais', nome: 'Vegano com Carne de Soja', valor: 94.99, imagens: ['burgue3.jpg'], visibled: false },
    { codigo: 10, categoria: 4, descricao: 'Pequenas empresas, grandes negócios', nome: 'Simples', valor: 16.00, imagens: ['cachorro1.jpg'], visibled: false },
    { codigo: 11, categoria: 4, descricao: 'Magazine com 6 salcichas.', nome: 'Salchitratratra', valor: 28.00, imagens: ['cachorro2.jpg'], visibled: false },
    { codigo: 12, categoria: 4, descricao: 'Tudo que tiver na geladeira e acharmos no chão', nome: 'X-Ratão', valor: 59.00, imagens: ['cachorro3.jpg'], visibled: false }  
  ]

  public pathImgs = '../../assets/img/';

  public selected = 0;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }

}
