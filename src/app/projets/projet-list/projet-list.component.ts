import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../shared/projet.service';
import { Projet } from '../shared/projet.model';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

  constructor(private service: ProjetService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Projet) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteProjet(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
