import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  users = [
    {
      id: 1,
      name: 'dungnc',
      age: 20,
      email: 'dungnc@fe.edu.vn',
    },
    {
      id: 15,
      name: 'dungnc2',
      age: 18,
      email: 'dungnc2@fe.edu.vn',
    },
    {
      id: 10,
      name: 'dungnc3',
      age: 19,
      email: 'dungnc4@fe.edu.vn',
    },
  ];

  onParentSubmit(formData: any) {
    //1. Tìm ra id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b); // [1, 10, 15]
    const newId = userIds[userIds.length - 1];

    if (this.formValues.id == 0) {
      // 2. Thêm vào mảng
      this.users.push({
        ...formData, // Giá trị con truyền sang
        id: newId + 1
      });
    } else {
      // 2.1 Chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.formValues.id);
      if (idx > -1) {
        this.users[idx] = {
          ...formData,
          id: this.formValues.id
        };
      }
    }
  }

  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  onParentEdit(userId: number) {
    // 1. Tìm xem đâu là user được chỉnh sửa
    const editUser = this.users.find(user => user.id === userId);

    if (editUser) {
      return this.formValues = {...editUser};
    }

    return alert('Không tìm thấy user đó!');
  }

}
