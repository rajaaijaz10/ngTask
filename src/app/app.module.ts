import { SubjectsService } from './subjects.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadderComponent } from './headder/headder.component';
import { BodyComponent } from './body/body.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
