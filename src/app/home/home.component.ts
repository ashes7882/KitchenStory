import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  title = 'Kitchen-Story';
  searchText = "";
  dataset = ['Apple', 'Orange', 'Banana', 'Watermelon', 'Lemon', 'Lime', 'Carrot', 'Chickpea',
   'Pulses', 'Biscuits', 'Chocolate', 'Pies'];
   handleClick(){
     this.router.navigate(['items'])
   }
}
