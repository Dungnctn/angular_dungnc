import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValue = {
    id: 0,
    username: '',
    age: 0,
    email: '',
    phone: '',
  }

  users = [
    {id: 1, username: 'nva', age: 18, email: 'abc@gmail.com', phone: '0123456789' },
  ]

  onSubmit(data : NgForm) {
    const newUserId = this.users.map(user => user.id).sort((a: number, b: number) => b - a)
    const maxId = newUserId[0]

    if(data.value.id == null) {
      this.users.push({...data.value, id: maxId + 1})
      this.inputValue = {
        id: 0,
        username: '',
        age: 0,
        email: '',
        phone: '',
      }

      data.resetForm({
        id: 0,
        username: '',
      age: 0,
      email: '',
      phone: '',
      })

    } else {

    }

  }

  removeItem(item : any) {
    console.log(item);
    const alertConfirm = window.confirm("ban co muon xoa")
    if(alertConfirm) {
      this.users = this.users.filter(it => it.id !== item )
    } else {

    }
  }

  updateItem(item : any) {
    this.inputValue = item

  }

}
