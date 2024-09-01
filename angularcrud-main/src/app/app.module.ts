import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { FormsModule } from '@angular/forms';
import { PopupFormComponent } from './components/popup-form/popup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardContainerComponent,
    PopupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
