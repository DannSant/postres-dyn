import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Product } from './products.model';
import { Subscription } from 'rxjs';
import { SetProductsAction } from './products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsSuscription: Subscription = new Subscription();


  constructor(
    private afDB: AngularFirestore,
    private store: Store<AppState>
  ) { }

  

  getAllProducts(){   
    this.productsSuscription = this.afDB.collection(`products`).snapshotChanges()
    .subscribe((doc)=>{
      let products = []
      doc.map((docRef:any)=>{
      
        let product = {
          uid:docRef.payload.doc.id,
          ...docRef.payload.doc.data()
        }
       
        products.push(product)
      });
      
      this.store.dispatch(new SetProductsAction(products));      
      this.productsSuscription.unsubscribe();
    });

  }

  
}
