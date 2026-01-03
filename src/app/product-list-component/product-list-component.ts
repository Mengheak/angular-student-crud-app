import { Component, inject, OnInit, signal } from '@angular/core';
import { FakeApi, IProduct } from '../services/fake-api/fake-api';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]> = new Observable<IProduct[]>();
  productService = inject(FakeApi);
  ngOnInit(): void {
    this.getAllProduct();
  }
  isFetchingProduct = signal<boolean>(false);
  getAllProduct() {
    this.products$ = this.productService.getProduct();
    this.isFetchingProduct.set(true);
    this.products$.subscribe({
      next: (product) => {
        console.log(product);
        this.isFetchingProduct.set(false);
      },
      error: (error) => {
        console.log(error);
        this.isFetchingProduct.set(false);
      },
    });
  }
}
