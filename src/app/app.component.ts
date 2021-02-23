import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  board = [["*00","*01", "*02", "*03", "*04"],
  ["*10", "*11", "*12", "*13", "*14"],
  ["*20", "*21", "*22", "*23", "*24"],
  ["*30", "*31", "*32", "*33", "*34"]];
  
  in1 : string;
  in2 : string;
  ar : string[];
  a : string;
  index1 : number;
  index2 : number;
  temp : string[][] = this.board;
  board2 : string[][];
  board3 : string[][];
  we = 3;

  show(){
    this.ar = this.in1.split(",");
    this.index1 = +this.ar[0];
    this.index2 = +this.ar[1];

    // this.a = this.board[this.index1][this.index2];
    this.board2 = this.temp;

    this.board2[this.index1][this.index2] = "1";
    
  }

  show2(){
    this.ar = this.in2.split(",");
    this.index1 = +this.ar[0];
    this.index2 = +this.ar[1];

    // this.a = this.board[this.index1][this.index2];

    this.board2[this.index1][this.index2] = "0";

    this.temp = this.board2; 
    this.board3 = this.temp;   
  }

}
