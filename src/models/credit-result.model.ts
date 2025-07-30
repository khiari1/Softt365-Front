export interface AmortissementLigne {
  periode: number;
  soldeDebut: number;
  mensualite: number;
  interet: number;
  capitalRembourse: number;
  soldeFin: number;
}

export interface CreditResultModel {
  montantEmprunteBrut: number;
  fraisAchat: number;
  fraisHypotheque: number;
  montantEmprunteNet: number;
  mensualite: number;
  tauxMensuel: number;
  fondsPropres: number;
  tableauAmortissement: AmortissementLigne[];
}