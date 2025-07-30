export interface CreditInputModel {
  montantAchat: number;
  fondsPropres: number;
  dureeMois: number;
  tauxAnnuel: number;
  fraisAchat?: number;
  montantEmprunte?: number;
  fraisAchatAuto: boolean;
  montantEmprunteAuto: boolean;
}