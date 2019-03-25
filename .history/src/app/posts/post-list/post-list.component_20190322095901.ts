import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { UserService } from '../'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Post) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('est-vous sur de vouloir supprimer ce post?')) {
      this.service.deletePost(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
