import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/emplo.service';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Client) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteClient(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
