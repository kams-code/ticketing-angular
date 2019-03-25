import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SlaService } from '../shared/sla.service';
import { Service } from '../../services/shared/service.model';
import { ProjetService } from '../../projets/shared/Projet.service';

@Component({
  selector: 'app-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.css']
})
export class SlaComponent implements OnInit {

  constructor(private service: SlaService, private servicecategorie:  ProjetService) { }

  ngOnInit() {
    this.resetForm();
    this.servicecategorie.refreshList();
    console.log( this.servicecategorie.list);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
    
      intitule: '',
    degre: '',
    deadline: '',
   projet_id: null
    };
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postSla(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putSla(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
