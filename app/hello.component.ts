import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { color: snow; padding-left: 32%; font-size: 40pt}`]
})
export class HelloComponent  {
  @Input() name: string;
}
