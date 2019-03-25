import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ProjetService } from '../shared/projet.service';
import { Projet } from '../shared/projet.model';
=======
>>>>>>> d5d9a42797dd76b5370b74f712d824e50380544e

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit() {
>>>>>>> d5d9a42797dd76b5370b74f712d824e50380544e
  }

}
