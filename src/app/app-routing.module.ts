import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';

import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { BabyComponent } from './baby/baby.component';
import { BabyClothingComponent } from './baby/clothing/baby-clothing.component';
import { BabyEquipmentComponent } from './baby/equipment/baby-equipment.component';
import { BabyFurnitureComponent } from './baby/furniture/baby-furniture.component';
import { BabyToysComponent } from './baby/toys/baby-toys.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admn', component: AdminComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'music', component: MusicComponent },
  { path: 'baby', component: BabyComponent },
  { path: 'baby/clothing', component: BabyClothingComponent },
  { path: 'baby/equipment', component: BabyEquipmentComponent },
  { path: 'baby/furniture', component: BabyFurnitureComponent },
  { path: 'baby/toys', component: BabyToysComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    MoviesComponent,
    SeriesComponent,
    BooksComponent,
    MusicComponent,
    BabyComponent,
    BabyClothingComponent,
    BabyEquipmentComponent,
    BabyFurnitureComponent,
    BabyToysComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
