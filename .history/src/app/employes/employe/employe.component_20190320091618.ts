import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeService } from '../shared/employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service: EmployeService) { }

  ngOnInit() {
    this.resetForm();
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
      image: ''
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmploye(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmploye(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
