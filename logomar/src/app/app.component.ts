import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgStyle],  
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'      
})
export class AppComponent {
  title = 'logomar';   

  text: string = "hello";    
  isCaptiallize = false;     

 
  myfun(option:String) {
    
    
    switch(option){
      case "l": 
        this.text = this.text.toLowerCase();
        this.isCaptiallize = false;
        return this.text;

      case "u":  
        this.text = this.text.toUpperCase();
        this.isCaptiallize = false;
        return this.text;

      case "c":  
        this.text = this.text;
        this.isCaptiallize = true;
        return this.text;

      case 'r':  
        let temp = "";
        for(let i = this.text.length - 1; i >= 0; i--){
          console.log(this.text[i]);  
          temp += this.text[i];
        }
        this.text = temp;
        return this.text;  
        
      default:
        return this.text;
    }
  }

  // my(){
  //   let temp = "";
  //   for(let i = this.text.length - 1; i >= 0; i--){
  //     console.log(this.text[i]);   
  //   }
  //   return temp;  
  // }
}
