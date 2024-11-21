import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Personne } from '../classes/personne'; 
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() personne: Personne | null = null; //input hiya rah ayji var personne de type Personne men lparent li hua app
  @Input() studentDisplay: Personne []| null = null; 


  constructor() { }

  ngOnInit() {
  }

}
