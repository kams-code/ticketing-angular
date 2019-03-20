import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/employe.service';
import { Employe} from '../shared/employe.model';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  constructor(private service: EmployeService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Employe) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Est-vous sur de vouloir supprimer cet attribut?')) {
      this.service.deleteEm(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
