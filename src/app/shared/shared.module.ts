import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(), 
    BsDropdownModule.forRoot()
  ],
  exports: [
    SidebarComponent, HeaderComponent, FooterComponent, ContentComponent
  ]
})
export class SharedModule { }
