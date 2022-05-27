import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: any
  @Output() handleDelete: EventEmitter<any>
  @Output() handleEdit: EventEmitter<any>
  constructor() {
    this.handleDelete = new EventEmitter();
    this.handleEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onEdit(userId: any) {
    this.handleEdit.emit(userId)
  }

  onDelete(userId: any) {
    this.handleDelete.emit(userId)
  }

}
