import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { ProductBoxHeaderComponent } from 'app/components/product-box-header/product-box-header.component';
import { ProductBoxMainComponent } from 'app/components/product-box-main/product-box-main.component';
import { WebService } from 'app/services/web-service';


const COMPONENTS = [AppComponent, ProductBoxComponent, ProductBoxHeaderComponent, ProductBoxMainComponent];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {}
