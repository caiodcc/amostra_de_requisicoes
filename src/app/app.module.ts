import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalcComponent } from './components/calc/calc.component';
import { BotaoSwitchComponent } from './components/props/botao-switch/botao-switch.component';
import { ButtonSendComponent } from './components/props/button-send/button-send.component';
import { ListOptionsComponent } from './components/props/list-options/list-options.component';
import { ExtraInfoComponent } from './components/props/extra-info/extra-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultadoComponent } from './components/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    BotaoSwitchComponent,
    ButtonSendComponent,
    ListOptionsComponent,
    ExtraInfoComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
