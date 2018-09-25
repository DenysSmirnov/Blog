import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostDetailComponent } from './components/blog/post-detail/post-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostPreviewComponent } from './components/blog/post-preview/post-preview.component';

import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostDetailComponent,
    HeaderComponent,
    FooterComponent,
    PostPreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
