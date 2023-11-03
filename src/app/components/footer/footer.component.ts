import { Component } from '@angular/core';
import { dataSeries } from '../api/data-serie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dataSeries: Array<{ data: string, contato: string, avaliacao: string, comentario: string, unidade: string, profissional: string, servico: string }>;
  selectedUnidade: string = "";
  selectedProfissional: string = "";

  constructor() {
    this.dataSeries = dataSeries.map(item => ({
      data: item.data,
      contato: item.contato,
      avaliacao: item.avaliacao,
      comentario: item.comentario,
      unidade: item.unidade,
      profissional: item.profissional,
      servico: item.servico
    }));
  }
}
