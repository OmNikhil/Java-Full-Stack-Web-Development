import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';

  rangea: any = 0; // Possibly used for a range input (unused in this code)
  text: any = '';  // Stores user input text
  num: number = 0; // Stores character count

  iscapitalize = false; // Used to toggle text capitalization styling

  /**
   * Converts text based on the selected option:
   * 'Cc' => Capitalize (first letter of each word via CSS)
   * 'C'  => Convert to uppercase
   * 'c'  => Convert to lowercase
   */
  convert(option: any) {
    switch(option) {
      case "Cc":
        this.text = this.text;
        this.iscapitalize = true;  // Activate CSS capitalization
        break;

      case "C":
        this.text = this.text.toUpperCase();
        this.iscapitalize = false; // Disable CSS capitalization
        break;

      case "c":
        this.text = this.text.toLowerCase();
        this.iscapitalize = false;
        break;

      default:
        return this.text; // Return text unchanged if no valid option
    }
  }

  /**
   * Returns the word count and updates the character count (num).
   */
  myfun() {
    this.num = this.text.length;
    let wcount = 0;

    for (let i = 0; i < this.text.length; i++) {
      if (this.text[i] === " ") {
        wcount++;
      }
    }

    return ++wcount; // Add one for the last word
  }

  // Array to store letter frequency info
  plist: any[] = [];

  /**
   * Counts the frequency of each alphabet letter (a-z) in the input text.
   * Stores result in `plist` as objects with `letter` and `count` keys.
   */
  my() {
    this.plist = []; // Clear previous results

    // ASCII codes for 'a' to 'z' are 97 to 122
    for (let index = 97; index <= 122; index++) {
      let counts = 0;
      let isExist = false;

      for (let i = 0; i < this.text.length; i++) {
        if (this.text[i].toLowerCase() === String.fromCharCode(index)) {
          isExist = true;
          counts++;
        }
      }

      if (isExist) {
        this.plist.push({
          letter: String.fromCharCode(index),
          count: counts
        });
      }
    }
  }
}
