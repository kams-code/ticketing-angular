import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequeteService } from '../shared/requete.service';
import { ServiceService } from '../../services/shared/service.service';
import { Service } from '../../services/shared/service.model';
import { CategorieService } from '../../categories/shared/categorie.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {

  constructor(private service: RequeteService,private servicecategorie:  ServiceService,private categories:  CategorieService,private users:  UserService) { }

  ngOnInit() {
    this.resetForm();

    this.servicecategorie.refreshList();
    this.categories.refreshList();
    this.users.refreshList();
  }
  

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      titre: '',
      contenu: '',
      categorie_id: null,
      client_id: null
     
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
 