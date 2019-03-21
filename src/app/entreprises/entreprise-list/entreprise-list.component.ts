import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../shared/entreprise.service';
import { Entreprise } from '../shared/entreprise.model';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriseListComponent implements OnInit {

  constructor(private service: EntrepriseService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Entreprise) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEntreprise(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
