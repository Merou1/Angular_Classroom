import { Component, OnInit,Input } from '@angular/core';
import { Personne } from '../classes/personne'; 


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() personne: Personne | null = null; //input hiya rah ayji var personne de type Personne men lparent li hua app

  @Input() imageUrl: string | ArrayBuffer | null = null;

  constructor() { }

  ngOnInit() {
  }

}
