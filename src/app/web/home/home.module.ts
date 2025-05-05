import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { NgxParticlesModule } from '@tsparticles/angular';
import { QuestionModule } from '../question/question.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    QuestionModule,
    AppMaterialModule,
    NgxParticlesModule,
  ]
})
export class HomeModule { }
