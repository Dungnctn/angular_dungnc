import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  name = "Nguyen chi dung"


  Champs = [
    {name: "abc", dame: 200, defend: 100, speed: 150, price: 100, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
    {name: "abc", dame: 900, defend: 100, speed: 150, price: 1000, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
    {name: "abc", dame: 200, defend: 100, speed: 150, price: 100000, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
    {name: "abc", dame: 200, defend: 100, speed: 150, price: 100000, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8J5KwqBoRT0kRT-ODQR4LX95B8_5fbfIww&usqp=CAU"},
  ];


}
