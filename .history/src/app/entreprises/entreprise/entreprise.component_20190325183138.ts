import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntrepriseService } from '../shared/entreprise.service';
import { ServiceService } from '../../services/shared/service.service';
import { Service } from '../../services/shared/service.model';
import { ImageService } from '../../services/image/image-service.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  selectedFile: ImageSnippet;
  constructor(private service: EntrepriseService, private servicecategorie:  ServiceService,private imageService: ImageService) { }
  nomimg: any;

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
<<<<<<< HEAD
=======
    console.log(file);
>>>>>>> 2d457144513b911d4d72ecf497218823cc448cb9
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          //this.nomimg=res;
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }


  ngOnInit() {
    this.resetForm();
    this.servicecategorie.refreshList();
  }

  populateForm(emp1: Service) {
    this.servicecategorie.formData = Object.assign({}, emp1);
  }
  resetForm(form?: NgForm) {

    this.nomimg=localStorage.getItem('image');
   console.log(this.nomimg);
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
    
    nom: '',
    logo: this.nomimg,
    siege: '',
    site: '',
    email: '',
    telephone: '',
    secteuractivite: '',
    };
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEntreprise(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEntreprise(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }























  

}
