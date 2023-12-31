import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendMessageEmitter = new EventEmitter();

  sendMessageToParent(e) {
    //console.log(e.target.value);
    this.sendMessageEmitter.emit(e.target.value);
  }
}
