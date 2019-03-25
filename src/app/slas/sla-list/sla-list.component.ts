import { Component, OnInit } from '@angular/core';
import { SlaService } from '../shared/sla.service';
import { Sla } from '../shared/sla.model';

@Component({
  selector: 'app-sla-list',
  templateUrl: './sla-list.component.html',
  styleUrls: ['./sla-list.component.css']
})
export class SlaListComponent implements OnInit {

  constructor(private service: SlaService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Sla) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteSla(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
