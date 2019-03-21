import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntrepriseService } from '../shared/entreprise.service';
import { ServiceService } from '../../services/shared/service.service';
import { Service } from '../../services/shared/service.model';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {

  constructor(private service: EntrepriseService, private servicecategorie:  ServiceService) { }

  ngOnInit() {
    this.resetForm();
    this.servicecategorie.refreshList();
  }

  populateForm(emp1: Service) {
    this.servicecategorie.formData = Object.assign({}, emp1);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
    
    nom: '',
    logo: '',
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
