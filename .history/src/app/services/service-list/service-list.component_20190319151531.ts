import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Service } from '../shared/service.model';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Service) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteService(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
