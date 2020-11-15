import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Repositories } from './repositories';
import { User } from './user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  repo:Repositories[]=[];
  userDetail:User[]=[];
  token=`?access_token=${environment.myApi}`;
  userUrl=`https://api.github.com/users/`;


  constructor(private http:HttpClient) { }

  findUser(searchUser:string){
    interface data{
      name:any;
      login:string;
      following:number;
      followers:number;
      avatar_url:any;
      public_repos:number;
    }

    return new Promise((resolve,reject)=>{
      this.userDetail=[];
      this.http.get<data>(this.userUrl+searchUser+this.token).toPromise().then(
        (res)=>{
          this.userDetail.push(res);
          resolve();
        },
        (error)=>{
          
          reject();
        }
      )
    })
  }

}
