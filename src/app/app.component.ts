import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  name = "Nguyen chi dung"


  Champs: any = [
    {name: "abc", dame: 200, defend: 100, speed: 150, price: 100, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
    {name: "abc", dame: 900, defend: 100, speed: 150, price: 1000, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
    {name: "abc", dame: 200, defend: 100, speed: 150, price: 100000, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
    {name: "abc", dame: 200, defend: 100, speed: 150, price: 100000, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
  ];

  showStatus = true;

  btnOnclick() {
      this.showStatus = !this.showStatus
  }

  onInput(event : any) {
    console.log('change', event.target.value);

  }

  inputValue: any = {
    name: '',
    dame: '',
    defend: '',
    speed: '',
    price: '',
    avatar: ''
  }
  onInputvalue(event: any, key: string) {
    this.inputValue[key] = event.target.value
  }


  InputObject() {
    this.Champs.push({
      ...this.inputValue,
      dame: +this.inputValue.dame,
      defend: +this.inputValue.defend,
      speed: +this.inputValue.speed,
      price: +this.inputValue.price,
    })

    this.inputValue = {
      name: '',
      dame: '',
      defend: '',
      speed: '',
      price: '',
      avatar: ''
    }
  }
}
