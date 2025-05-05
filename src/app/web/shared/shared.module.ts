import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './components/loading/loading.component';
import { DialogConviteComponent } from './components/dialog-convite/dialog-convite.component';
import { BackgroundHearstComponent } from './components/background-hearst/background-hearst.component';
import { AmorComponent } from './components/amor/amor.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LoadingComponent,
    DialogConviteComponent,
    BackgroundHearstComponent,
    AmorComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [LoadingComponent, DialogConviteComponent, BackgroundHearstComponent, AmorComponent]
})
export class SharedModule { }
