import { Component, OnInit } from '@angular/core';
import { AuthService } from './redux/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'postres-dyn';
  constructor(
    private authService: AuthService
  ){}
  ngOnInit(){
    this.authService.initAuthListener();
  }
}
