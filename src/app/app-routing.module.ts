import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DividerComponent } from './divider/divider.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './navigation/navigation.component';

import { MoviesComponent } from './content/movies/movies.component';
import { SeriesComponent } from './content/series/series.component';
import { BooksComponent } from './content/books/books.component';
import { MusicComponent } from './content/music/music.component';
import { BabyComponent } from './content/baby/baby.component';
import { BabyClothingComponent } from './content/baby/clothing/baby-clothing.component';
import { BabyEquipmentComponent } from './content/baby/equipment/baby-equipment.component';
import { BabyFurnitureComponent } from './content/baby/furniture/baby-furniture.component';
import { BabyToysComponent } from './content/baby/toys/baby-toys.component';

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
  { path: 'baby/toys', component: BabyToysComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DividerComponent,
    AdminComponent,
    NavigationComponent,
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
