import { Component } from '@angular/core';
import { Personne } from './classes/personne'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  personne: Personne | null = null;//var personne de type Personne mashy object

  establishment: string = '';
  fullName: string = '';
  registrationNumber: number | null = null;
  rib: number | null = null;
  imageUrl: string | ArrayBuffer | null = null;


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input && input.files ? input.files[0] : null;
        if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  

  //two way data binding on a déclaré les vars empty mais une fois kan3emrou shy input katji dik lvalue t7et flvar li mbinde meah
  onSubmit() {
    this.personne = new Personne(
      this.establishment,
      this.fullName,
      this.registrationNumber!,
      this.rib!
    );
  }
}
