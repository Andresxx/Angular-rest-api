import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-repos',
  templateUrl: './repositori.component.html',
  styleUrls: ['./repositori.component.css']
})
export class RepositoriComponent implements OnInit {

  cache = {
    users: [],
    selectedUser: [],
};

users: User[] = [];
selectedUser: User = new User();

constructor(private userService: UserService) {

}

ngOnInit() {


    this.userService.getUsers("users").subscribe(res => {

        this.cache.users = res; 
        this.users = res;
    }, error => {

        console.log(error); 
    });

}





}
