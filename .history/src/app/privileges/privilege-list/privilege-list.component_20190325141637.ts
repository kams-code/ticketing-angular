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
  list:[];
  role:any;
  permission:any
  constructor(private service: PrivilegeService,private serviceRole: RoleService) { }

  ngOnInit() {
    this.service.refreshList();
    this.serviceRole.refreshList();
  }
  

  populateForm(emp: Privilege,emprole: Role) {
    this.serviceRole.formData = Object.assign({}, emprole);
    this.service.formData = Object.assign({}, emp);
  }
  RolehasPermissionTo(idrole: number,idper: number) {
    
    this.list=this.service.listrolepriv
    for(var index in this.list)
    { 
        if ((this.list[index] as any).permission_id==idper && (this.list[index] as any).role_id==idrole  ) {
         // console.log((this.list[index] as any).permission_id);
         // console.log((this.list[index] as any).role_id);

          return true;

        }
    }
    return false;
  }
 

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePrivilege(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
