import { Component } from '@angular/core';

@Component({
  selector: 'my-board',
  template: `
  <div class="clearfix">
    <my-cell *ngFor="let cell of cells | slice: 0: 3; let i = index" [value]="cell" (userClick)=clickHandler(i)></my-cell><br>
  </div>

  <div class="clearfix">
    <my-cell *ngFor="let cell of cells | slice: 3: 6; let i = index" [value]="cell" (userClick)=clickHandler(i+3)></my-cell><br>
  </div>

  <div class="clearfix">
    <my-cell *ngFor="let cell of cells | slice: 6; let i = index" [value]="cell" (userClick)=clickHandler(i+6)></my-cell><br>
  </div>
  
  <div id="div_result" *ngIf="winner">
    winner is {{winner}}
  </div>
  `,
  styles: [
    `
    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }
    div[id="div_result"]{
      font-size: 40pt;
      font-family: Helvetica;
      color: #112D32;
      padding-left: 38%;
      padding-top: 20px;
    }
    div {
      padding-left: 33%;
    }
    my-cell {
      text-align: center;
      margin-bottom: 5px;
    }
    `
  ]
})
export class BoardComponent {
  private cells: string[] = [];
  private turn: string = 'x';
  private gameover = false;
  private winner = null;

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  init() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(idx: number) {
    console.log(idx);
    if (!this.gameover) {
      console.log('sth set');
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }
    }
  }

  changeTurn() {
    if (this.turn === 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }
  }

  checkWinner() {
    let lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5],  
      [6, 7, 8],
      [0, 3, 6], // vertical
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonal
      [2, 4, 6]
    ];  

    for (let line of lines) {
      alert(line[0]);
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== null) {
        this.gameover = true;
        this.winner = this.cells[line[0]];
        return;
      }
    }

    let occupy = 0;
    this.cells.forEach((e) => { occupy += (e !== null ? 1 : 0) });
    if (occupy === 9) {
      console.log('tie');
      this.gameover = true;
      this.winner = 'tie';
    }
  }
} 