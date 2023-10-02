import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimenNgModule } from '../primen-ng/primen-ng.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimenNgModule],
  exports: [MenuComponent],
})
export class SharedModule {}
