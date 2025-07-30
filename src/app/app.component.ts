import { Component } from '@angular/core';
import { CreditInputModel } from './../models/credit-input.model';
import { CreditResultModel } from './../models/credit-result.model';
import { CreditService } from './../services/credit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  input: CreditInputModel = {
    montantAchat: 120000,
    fondsPropres: 20000,
    dureeMois: 240,
    tauxAnnuel: 2.4,
    fraisAchat: null,
    montantEmprunte: null,
    fraisAchatAuto: true,
    montantEmprunteAuto: true
  };
  result: CreditResultModel = null;
  error: string = null;
  loading = false;

  constructor(private creditService: CreditService) {}

  calculate() {
    this.error = null;
    this.loading = true;
    this.creditService.calculate(this.input).subscribe(
      res => {
        this.result = res;
        this.loading = false;
      },
      err => {
        this.error = err.error?.Message || 'Erreur inconnue';
        this.loading = false;
      }
    );
  }
}