import { Component, EventEmitter, Output } from '@angular/core';
import { service } from '../model/ServicesType';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {

    servicesDb:service[]=[
    ]

    Id:number=0
    Title:string=''
    Name:string=''
    Description:string=''

    createService(){
      if(this.Title.length>0 && this.Name.length>0  && this.Description.length>0 )
      {
        this.Id++;
        this.servicesDb.push({id:this.Id,title:this.Title,name:this.Name,description:this.Description});
        this.Title='';
        this.Name='';
        this.Description='';
      }
      else{
        alert("Enter the details properly")
      }
    }

    deleteService(id:number){

      const index = this.servicesDb.findIndex(x=>x.id==id);
      this.servicesDb.splice(index,1);
    }

    popUpButton:boolean=false;
    setToggle(closbtn:boolean){
      //console.log(closbtn);
      this.popUpButton = closbtn;
    }

    setToggleBack(closeBack:boolean){
      this.popUpButton = false;
    }

    //update
    UpdateId:number=-1;
    setIdParent(currIdUpdate:number){
      this.UpdateId = currIdUpdate;
      //console.log(currIdUpdate);
    }

    GotUpdateDetails(details:service){
      const index = this.servicesDb.findIndex(x=>x.id==this.UpdateId);
      this.servicesDb[index] =details;
      console.log(this.servicesDb);
    }
    
}
