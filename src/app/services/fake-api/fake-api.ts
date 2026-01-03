import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[]
}

@Injectable({
  providedIn: 'root',
})
export class FakeApi {
  constructor(private http: HttpClient) {}
  getProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://api.escuelajs.co/api/v1/products');
  }
}
