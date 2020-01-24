import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../redux/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkbg = true;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    
  }



  

}
