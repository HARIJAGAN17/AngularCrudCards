import { Component, EventEmitter, Input, Output } from '@angular/core';
import { service } from '../model/ServicesType';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() cardData:service=null!;

  @Output() currId:EventEmitter<number>= new EventEmitter;

  sendId(){
    this.currId.emit(this.cardData.id);
  }

  buttonClose:boolean =true;
  @Output() toggleBtn:EventEmitter<boolean> = new EventEmitter;
  sendToggleButton(){
    this.toggleBtn.emit(this.buttonClose);
  }

  @Output() sendUpdateId:EventEmitter<number> = new EventEmitter;

  sendIdUpdate(){
    this.sendUpdateId.emit(this.cardData.id);
  }
}
