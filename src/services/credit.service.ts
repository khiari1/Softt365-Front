import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CreditInputModel } from '../models/credit-input.model';
import { CreditResultModel } from '../models/credit-result.model';

@Injectable()
export class CreditService {
  private apiUrl = 'https://localhost:44389/api/credit/calculate';

  constructor(private http: Http) {}

  calculate(input: CreditInputModel): Observable<CreditResultModel> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(input), { headers })
      .map((res: Response) => res.json() as CreditResultModel);
  }
}