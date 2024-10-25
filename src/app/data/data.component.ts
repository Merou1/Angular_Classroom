import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../classes/personne'; 


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() personne: Personne | null = null;


  constructor() { }

  ngOnInit() {
  }

}
