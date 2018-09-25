import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PostDetailComponent } from './components/blog/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'posts', component: BlogComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'posts/:id/:comments', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
