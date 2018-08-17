import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
  FlexLayoutModule, MatToolbarModule, MatButtonModule,
  MatInputModule, MatFormFieldModule, MatCardModule,
  MatIconModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }