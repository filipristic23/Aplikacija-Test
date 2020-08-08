import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs: RegisterService) { }


  register(name, email, password){
    this.rs.addUser(name, email, password);
 }

  ngOnInit() {
  }

}
