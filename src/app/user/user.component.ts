import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repositories } from '../repositories';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userDetail:User[];
repo:Repositories;

  constructor(public serviceData: UserService, public serviceRepo:RepoService) { }
getFindUser(  searchUser ){
  this.serviceData.findUser(searchUser).then(
    (success)=>{
      this.userDetail=this.serviceData.userDetail
    },
    (error)=>{
      console.log(error)
    }
  );
  this.serviceRepo.findRepo(searchUser).subscribe(
    (success)=>{
      this.repo=success;
      return (this.repo)
    }
  )
}
  ngOnInit():void {
    this.getFindUser('Kennedy-karuri');
  }

}
