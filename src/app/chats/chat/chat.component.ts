import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../shared/chat.service';
import { ServiceService } from '../../services/shared/service.service';
import { Service } from '../../services/shared/service.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private service: ChatService, private servicecategorie:  ServiceService) { }

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
      prenom: '',
      email: '',
      telephone: '',
      service_id: null,
      pays: '',
      ville: '',
      adresse: '',
      image: ''
    };
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postChat(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putChat(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
