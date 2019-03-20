import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service: ClientService) { }

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
