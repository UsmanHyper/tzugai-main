import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MintComponent } from './mint/mint.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainpageComponent,
    MintComponent,
    SubscribeComponent,
    VideoBackgroundComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],

})
export class MainformModule { }
