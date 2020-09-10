import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideService } from './aside.service';
import { AsideComponent } from './aside.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatInputModule,
    MatRippleModule,
    MatSlideToggleModule
  ],
  exports: [AsideComponent],
  providers: [AsideService],
})
export class AsideModule { }
