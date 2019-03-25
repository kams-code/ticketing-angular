import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { RoleService } from '../../roles/shared/role.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private service: ClientService,private serviceRole: RoleService) { }

  ngOnInit() {
     this.service.refreshList();
     this.serviceRole.userList();
  }

  populateForm(emp: Client) {
    this.service.formData = Object.assign({}, emp);
  }

  checkpermission(perm:string){
  var  val:string;
    for (let i in this.serviceRole.listuser) {
     
      val=this.serviceRole.listuser[i];

      if (val.match(perm) === null) {
        console.log(val);
        return false;
        }
     
   }
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteClient(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
