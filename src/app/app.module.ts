import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EducationComponent } from './education/education.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectPageComponent,
    MatNavbarComponent,
    ProjectFormComponent,
    ProjectCardComponent,
    EducationComponent,
    AdminProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
