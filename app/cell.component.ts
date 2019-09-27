import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'my-cell',
  template: `<div>{{value}}</div>`,
  styles: [
    `div {
      height: 120px; 
      width: 120px; 
      background-color: #254E58; 
      float: left; 
      margin: 3px 8px 8px 3px; 
      color: #EAE7DC;
      font-size: 70pt;
      font-family: Helvetica;
      border-radius: 4px;
    }
    `
  ]
})
export class CellComponent {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}