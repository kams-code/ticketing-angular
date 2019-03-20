import { Component, OnInit } from '@angular/core';
import { RequeteService } from '../shared/requete.service';
import { Requete } from '../shared/requete.model';

@Component({
  selector: 'app-requete-list',
  templateUrl: './requete-list.component.html',
  styleUrls: ['./requete-list.component.css']
})
export class RequeteListComponent implements OnInit {

  constructor(private service: RequeteService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Requete) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteRequete(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
