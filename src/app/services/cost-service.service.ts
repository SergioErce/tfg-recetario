import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostingInterface } from '../models/costing-interface';

@Injectable({
  providedIn: 'root'
})
export class CostServiceService {
  
  constructor(private http: HttpClient) { }

  getCosting(): Observable<CostingInterface[]> {
    return this.http.get<CostingInterface[]>('http://localhost/tfg/costing.php');
  }
}