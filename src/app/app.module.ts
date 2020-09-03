import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { BabyClothingComponent } from './baby/clothing/baby-clothing.component';
import { BabyEquipmentComponent } from './baby/equipment/baby-equipment.component';
import { BabyFurnitureComponent } from './baby/furniture/baby-furniture.component';
import { BabyToysComponent } from './baby/toys/baby-toys.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    SeriesComponent,
    BooksComponent,
    MusicComponent,
    BabyClothingComponent,
    BabyEquipmentComponent,
    BabyFurnitureComponent,
    BabyToysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
