import { Component, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular1';

  temp1:any;
  temp2:any;
  temp:any=[];


  //sumbit data user data table
  sumbit(){
    console.log(this.temp1,this.temp2);

    //object user data
    let obj: any= {
      t1: this.temp1,
      t2: this.temp2
    }
    this.temp.push(obj);
  }

  

  //add data user data table
  Add(index: any){
    let username = prompt("Add the new user name: ");
    let userpssword = prompt("Add the new user password: ");

    if (username && userpssword) {
      this.temp.push({t1: username, t2: userpssword});

    }
    // this.temp.push({t1: username, t2: userpssword});
  }

  //delete user data table
  Delete(index: any){
    this.temp.splice(index, 1);
  }

  //update user data table
  Update(index: any){
    let username = prompt("Update the new user name: ");
    let userpssword = prompt("Update the new user password: ");
    // this.temp[index] = {t1: username , t2: userpssword};
    if (username && userpssword) {
      this.temp[index] = {t1: username , t2: userpssword};
    }
  }

  //delete all user data table
  DeleteAll(){
    this.temp=[];
  }
}
