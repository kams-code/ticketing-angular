import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequeteService } from '../shared/requete.service';
import { ServiceService } from '../../services/shared/service.service';
import { Service } from '../../services/shared/service.model';
import { CategorieService } from '../../categories/shared/categorie.service';
import { UserService } from '../../services/user/user.service';
import { ProjetService } from '../../projets/shared/Projet.service';
import { SlaService } from '../../slas/shared/Sla.service';
import { ImageService } from '../../services/image/image-service.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {
  selectedFile: ImageSnippet;
  sla=false;
  constructor(private service: RequeteService,private servicecategorie:  ProjetService,private categories:  SlaService,private users:  UserService,private imageService: ImageService) { }
  nomimg: any;

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
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
    this.categories.refreshList();
    this.users.refreshList();
  }


  resetForm(form?: NgForm) {

    this.nomimg=localStorage.getItem('image');
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      titre: '',
      contenu: '',
      categorie_id: null,
      client_id: null,
      sla_id: null,
      projet_id: null,
      image: this.nomimg,

    }

  }

  issla(){
    if (this.sla==true) {
      this.sla=false;
      this.resetForm();
    } else {
      this.sla=true;
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postRequete(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putRequete(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
