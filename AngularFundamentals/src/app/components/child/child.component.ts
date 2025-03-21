import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
receiveparentData:string | undefined;

childData:string="prasad Dawle";

@Output()
sendData :EventEmitter<string>=new EventEmitter();

sendDataToParent() {
  this.sendData.emit(this.childData);
}
}
