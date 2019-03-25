import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { RequeteService } from '../shared/requete.service';
import { ServiceService } from '../../services/shared/service.service';
import { Service } from '../../services/shared/service.model';
import { CategorieService } from '../../categories/shared/categorie.service';
import { UserService } from '../../services/user/user.service';
import { ProjetService } from '../../projets/shared/projet.service';
import { SlaService } from '../../slas/shared/sla.service';
import { ImageService } from '../../services/image/image-service.service';
import {FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {FileUploader} from "ng2-file-upload";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {
  uploadForm: FormGroup= new FormGroup({
    firstControl: new FormControl(''),
    lastControl: new FormControl(''),
  });

  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';

  /////////////////////////////////////////
  selectedFile: ImageSnippet;
  nomimg: string;
  sla=false;
  ///////////////////////
  constructor(private fb: FormBuilder, private http: HttpClient,private service: RequeteService,private servicecategorie:  ProjetService,private categories:  SlaService,private users:  UserService,private imageService: ImageService) { }

  uploadSubmit(){
        for (var i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          console.log(fileItem);
         this.processFile(fileItem);
         if (j==0) {
          this.nomimg= localStorage.getItem('image');
         } else {
          this.nomimg= this.nomimg+"/"+localStorage.getItem('image');
         }

        }
        console.log(this.nomimg);
        this.uploader.clearQueue();
  }

  processFile(file1: File ) {
    const file: File = file1;
    console.log(file);
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
    this.uploadForm = this.fb.group({
      document: [null, null],
      type:  [null, Validators.compose([Validators.required])]
    });
    this.resetForm();

    this.servicecategorie.refreshList();
    this.categories.refreshList();
    this.users.refreshList();
<<<<<<< HEAD
=======


>>>>>>> 2d457144513b911d4d72ecf497218823cc448cb9
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

<<<<<<< HEAD
}
=======
}
>>>>>>> 2d457144513b911d4d72ecf497218823cc448cb9
