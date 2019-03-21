import { Component, OnInit } from '@angular/core';
import { PrivilegeService } from '../shared/Privilege.service';
import { Privilege } from '../shared/privilege.model';
import { RoleService } from '../../roles/shared/role.service';
import { Role } from '../../roles/shared/role.model';

@Component({
  selector: 'app-privilege-list',
  templateUrl: './privilege-list.component.html',
  styleUrls: ['./privilege-list.component.css']
})
export class PrivilegeListComponent implements OnInit {

  constructor(private service: PrivilegeService,private serviceRole: RoleService) { }

  ngOnInit() {
    this.service.refreshList();
    this.serviceRole.refreshList();
  }

  populateForm(emp: Privilege,emprole: Role) {
    this.serviceRole.formData = Object.assign({}, emprole);
    this.service.formData = Object.assign({}, emp);
  }
 

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePrivilege(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
