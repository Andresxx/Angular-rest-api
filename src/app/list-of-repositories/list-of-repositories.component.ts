import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {Repo} from "../models/repos";

import {UserService} from "../services/user.service";


import 'rxjs/add/operator/map';





@Component({
  selector: 'app-list-of-repositories',
  templateUrl: './list-of-repositories.component.html',
  styleUrls: ['./list-of-repositories.component.css']
})
export class ListOfRepositoriesComponent implements OnInit {
  name: string;
  private sub: any;

  repos: Repo[] = [];


  constructor(private route: ActivatedRoute,private userService: UserService) {
    
  
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; 
      this.userService.getUserRepositories(this.name).subscribe(res => {

       this.repos = res;
      

    }, error => {

        console.log(error); 
    });
   });
}


}