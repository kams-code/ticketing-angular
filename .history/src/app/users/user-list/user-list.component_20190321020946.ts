import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: User) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('?')) {
      this.service.deleteUser(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
