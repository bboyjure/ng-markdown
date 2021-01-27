import { NgModule } from '@angular/core';
import { NgMarkdownLibComponent } from './ng-markdown-lib.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NgMarkdownLibComponent],
  imports: [
    HttpClientModule
  ],
  exports: [NgMarkdownLibComponent]
})
export class NgMarkdownLibModule { }
