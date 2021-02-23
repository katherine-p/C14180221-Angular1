import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  board = [["*00","*01", "*02", "*03"],
  ["*10", "*11", "*12", "*13"],
  ["*20", "*21", "*22", "*23"],
  ["*30", "*31", "*32", "*33"]];

  in1 : string;
  ar : string[];
  a : string;
  index1 : number;
  index2 : number;
  board2 : string[][];

  show(){
    this.ar = this.in1.split(",");
    this.index1 = +this.ar[0];
    this.index2 = +this.ar[1];

    // this.a = this.board[this.index1][this.index2];

    this.board[this.index1][this.index2] = "1";
    this.a = this.board[this.index1][this.index2];
    this.board2 = this.board;

  }

}
