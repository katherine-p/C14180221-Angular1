import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  board = [["*","*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*"]];
  
  inp : string;
  in2 : string;
  arr : string[];
  index1 : number;
  index2 : number;  
  player = "0";
  stat : boolean = false;
  countp1 = 0;
  countp0 = 0;
  winner : string;

  submit()
  {
    this.arr = this.inp.split(",");
    this.index1 = +this.arr[0] - 1;
    this.index2 = +this.arr[1] - 1;

     if(this.stat == false){
       if(this.index1 >= 0 && this.index1 <= 4 && this.index2 >= 0 &&this.index2 <= 4){
         if(this.board[this.index1][this.index2] == "*"){
           this.board[this.index1][this.index2] = this.player;
           
           if(this.player == "1"){
             this.player = "0";
           }
           else{
             this.player = "1";
           }
           this.cekwin();
         }
         else{
           alert("Baris dan kolom sudah terisi.");
         }
       }
       else if(this.index1 < 0 || this.index1 > 5){
         alert("Invalid baris.");
       }
       else if(this.index2 < 0 || this.index2 > 5){
         alert("Invalid kolom.")
       }
       else{
         alert("Input tidak sesuai.")
       }
    
     }
   }

   cekwin(){ 
    //  cek vertical    
     for(var b = 0; b < 5; b++){
       this.countp0 = 0;
       this.countp1 = 0;
       for(var k = 0; k < 5; k++){
         if(this.board[k][b] == "0"){
           this.countp0++;
         }
         else if(this.board[k][b] == "1"){
           this.countp1++;
         }
       }
       if(this.countp0 > 4){
         this.winner = "The Winner is Player 0!";
         this.stat = true;
       }
       else if(this.countp1 > 4){
         this.winner = "The Winner is Player 1!";
         this.stat = true;
       }
     }

     //cek horizontal
     for(var b = 0; b < 5; b++){
       this.countp0 = 0;
       this.countp1 = 0;
       for(var k = 0; k < 5; k++){
         if(this.board[b][k] == "0"){
           this.countp0++;
         }
         else if(this.board[b][k] == "1"){
           this.countp1++;
         }
       }

       if(this.countp0 > 4){
         this.winner = "The Winner is Player 0!";
         this.stat = true;
       }
       else if(this.countp1 > 4){
         this.winner = "The Winner is Player 1!";
         this.stat = true;
       }

     }
   }

   

}
