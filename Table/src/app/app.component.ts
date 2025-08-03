import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Table';

  start: any;
  end: any;

  startlist: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // fixed list
  endlist: number[] = [];

  get center(): number {
    return this.endlist.length || 1;
  }

  constructor() {
    this.my(); // initialize with default range
  }

  setStart(event: any): void {
    this.start = +event.target.value;
    this.my();
  }

  setEnd(event: any): void {
    this.end = +event.target.value;
    this.my();
  }

  my() {
    this.endlist = [];
    if (this.start <= this.end) {
      for (let i = this.start; i <= this.end; i++) {
        this.endlist.push(i);
      }
    } else {
      for (let i = this.start; i >= this.end; i--) {
        this.endlist.push(i);
      }
    }
  }



  // diff(){
  //   if (this.start<this.end){
  //     return this.end-this.start;
  //   } else {
  //     return this.start-this.end;
  //   } 
  // }

  // my(){

  //   console.log(this.diff());

  //   for (let i = this.start; i <= this.end; i++) {
      
  //     this.endlist.push(i);
      
  //   }
  // }
  
}
