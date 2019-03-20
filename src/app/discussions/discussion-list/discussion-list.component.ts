import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../shared/discussion.service';
import { Discussion } from '../shared/discussion.model';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {

  constructor(private service: DiscussionService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Discussion) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteDiscussion(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
