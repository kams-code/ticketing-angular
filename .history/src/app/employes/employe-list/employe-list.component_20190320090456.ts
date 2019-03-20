import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/employe.service';
import { Employe} from '../shared/employe.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private service: EmployeService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: E) {
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
