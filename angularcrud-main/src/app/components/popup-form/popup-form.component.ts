import { Component, EventEmitter, Input, Output } from '@angular/core';
import { service } from '../model/ServicesType';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrl: './popup-form.component.css'
})
export class PopupFormComponent {

  UpdateName:string='';
   UpdateTitle:string='';
   UpdateDescription:string='';

  @Input() showPopUp:boolean = false;

  @Output() CloseButtonagain:EventEmitter<boolean> = new EventEmitter;

  toggleCloseButton(){
    this.UpdateName='';
    this.UpdateTitle='';
    this.UpdateDescription='';
    this.showPopUp=false;
    this.CloseButtonagain.emit(false);
  }
  //form things
   
    
  @Output() updateDetailsSend:EventEmitter<service> = new EventEmitter;

  updateInfo:service =null!;

  senUpdateDetails(){
    
    this.updateInfo = {id:-1,name:this.UpdateName,title:this.UpdateTitle,description:this.UpdateDescription};
    this.updateDetailsSend.emit(this.updateInfo);
    this.UpdateName='';
    this.UpdateTitle='';
    this.UpdateDescription='';
    //console.log(this.updateInfo);
  }


}
