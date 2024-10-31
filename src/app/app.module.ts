import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentModalComponent } from './pages/modal/appointment-modal/appointment-modal.component';


@NgModule({
  declarations: [AppComponent, AppointmentModalComponent, ],
  imports: [BrowserModule, IonicModule.forRoot(),
  AppRoutingModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
  ,
})
export class AppModule {}
