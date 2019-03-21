import { Component, OnInit } from '@angular/core';
import { ChatService } from '../shared/chat.service';
import { Chat } from '../shared/chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(emp: Chat) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteChat(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
