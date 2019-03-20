import { Component, OnInit } from '@angular/core';
import { RoleService } from '../shared/role.service';
import { Role } from '../shared/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  constructor(private service: RoleService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Role) {
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
