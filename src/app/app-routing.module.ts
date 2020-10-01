import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { EducationComponent } from './education/education.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectPageComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'admin/projects/new', component: ProjectFormComponent },
  { path: 'admin/projects', component: AdminProjectsComponent },
  { path: 'education', component: EducationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
