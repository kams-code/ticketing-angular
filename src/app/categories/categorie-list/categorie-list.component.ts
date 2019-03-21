import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../shared/categorie.service';
import { Categorie } from '../shared/categorie.model';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  constructor(private service: CategorieService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Categorie) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePost(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
