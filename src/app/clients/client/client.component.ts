import { Component, OnInit } from '@angular/core';
import { NgForm ,FormsModule} from '@angular/forms';
import { ClientService } from '../shared/client.service';
import { CategorieService } from '../../categories/shared/categorie.service';
import { Categorie } from '../../categories/shared/categorie.model';
import { ImageService } from '../../services/image/image-service.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  selectedFile: ImageSnippet;
  constructor(private service: ClientService, private servicecategorie:  CategorieService,private imageService: ImageService){}
nomimg: any;

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log('je suis ici');
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

  populateForm(emp1: Categorie) {
    this.servicecategorie.formData = Object.assign({}, emp1);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      pays: '',
      ville: '',
      adresse: '',
      image: '',
      categorie_id: null,
    };
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postClient(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putClient(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
