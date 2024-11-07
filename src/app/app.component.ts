import { Component } from '@angular/core';
import { Personne } from './classes/personne'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  // Properties for form and selected data
  establishment: string = '';
  fullName: string = '';
  registrationNumber: number | null = null;
  rib: number | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  students: any[] = [];  
  studentDisplay: Personne[] = [];
  selectedEstablishment: string = '';

  showForm = false;
  showCard = false;
  showEstablishmentListe = false;

  establishments = ['Establishment A', 'Establishment B', 'Establishment C'];

  showEstablishmentList() {
    this.showEstablishmentListe = true;
    this.showForm = false;
    this.showCard = false;
  }

  confirmEstablishment() {
    this.establishment = this.selectedEstablishment;
    this.showForm = true;
    this.showEstablishmentListe = false;
  }

  showStudentForm() {
    if (!this.establishment) {
      alert('Please select an establishment first.');
      return;
    }
    this.showForm = true;
    this.showCard = false;
  }

  onSaveStudent() {
    const student = {
      establishment: this.establishment,
      fullName: this.fullName,
      registrationNumber: this.registrationNumber,
      rib: this.rib,
      imageUrl: this.imageUrl
    };
    this.students.push(student); 

    this.resetForm();
    console.log(this.students);
  }

  onSubmit() {
    this.studentDisplay = this.students.map(student => new Personne(
      student.establishment,
      student.fullName,
      student.registrationNumber,
      student.rib,
      student.imageUrl
    ));
    this.showCard = true;
  }

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

  resetForm() {
    this.fullName = '';
    this.registrationNumber = null;
    this.rib = null;
    this.imageUrl = '';
  }

  generateCard() {
    if (!this.students.length) {
      alert('Please add at least one student before generating the card.');
      return;
    }
    this.onSubmit(); 
    this.showCard = true;
    this.showForm = false;
    this.showEstablishmentListe = false;
  }
}
