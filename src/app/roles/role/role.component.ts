import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoleService } from '../shared/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private service: RoleService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      
     
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postRole(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putRole(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
 