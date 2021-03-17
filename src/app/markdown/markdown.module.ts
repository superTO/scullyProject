import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {MarkdownRoutingModule} from './markdown-routing.module';
import {MarkdownComponent} from './markdown.component';

@NgModule({
  declarations: [MarkdownComponent],
  imports: [CommonModule, MarkdownRoutingModule, ScullyLibModule],
})
export class MarkdownModule {}
