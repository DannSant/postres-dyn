import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ProductsService } from '../../redux/products/products.service';
import { Subscription } from 'rxjs';
import { Product } from '../../redux/products/products.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styles: []
})
export class ProductsPageComponent implements OnInit {
  suscription: Subscription = new Subscription();
  products: Product[] = [];

  constructor(
    private store: Store<AppState>,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getAllProducts();
    this.suscription = this.store.select('products').subscribe(productsFromStore=>{
      
     
    })
  }

}
