import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CategoryDetailsComponent } from "./components/category-details/category-details.component";
import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
