import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common'
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
