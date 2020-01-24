import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { User } from './user.model';

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators'
import { SetUserAction, UnsetUserAction } from './auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubscription: Subscription = new Subscription();
  currentUser:User;

  constructor(
    private firebaseAuth:AngularFireAuth,
    private router:Router,
    private afDB: AngularFirestore,
    private store: Store<AppState>
  ) { }

  initAuthListener(){
    this.firebaseAuth.authState.subscribe((fbUser:firebase.User)=>{
      if(fbUser){
        this.userSubscription = this.afDB.doc(`users/${fbUser.uid}`).valueChanges()
        .subscribe((usuarioObj:any)=>{
          console.log(usuarioObj);
          const newUser = new User(usuarioObj);
          this.store.dispatch(new SetUserAction(newUser));
          this.currentUser = newUser;
        })
      } else {
        this.currentUser=null;
        this.userSubscription.unsubscribe();
        this.store.dispatch(new UnsetUserAction());
      }
    })
  }

  isAuthenticated(){
    return this.firebaseAuth.authState.pipe(
      map(fbUser =>{        
        return fbUser!=null
      })
    );
  }

  async registerUser(user: User, password: string){
    try {
      let resp = await this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email,password)
      
      const newUser:User = {
        uid: resp.user.uid,
        name: user.name,
        phone: user.phone,
        email: user.email,        
      }
      await this.afDB.doc(`users/${newUser.uid}`).set(newUser);
     
      return {status:200, msg:"El usuario se ha creado correctamente", error:null}

    }catch(e){
     
      return {status:500, msg:"Ha ocurrido un error al registrar al usuario", error:e}
    }
  }

  async login(email: string, password: string){
    try {
      let resp = await this.firebaseAuth.auth.signInWithEmailAndPassword(email,password)
      return {status:200, msg:resp, error:null}
    }catch(e){
      return {status:500, msg:"Ha ocurrido un error al iniciar sesión", error:e}
    }
    
  }

  logout(){
    this.router.navigate(['/login']);
    this.firebaseAuth.auth.signOut();
    this.store.dispatch(new UnsetUserAction());
  }

}
