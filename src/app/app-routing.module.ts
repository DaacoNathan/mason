import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'transpo', loadChildren: './transpo/transpo.module#TranspoPageModule' },
  { path: 'slider', loadChildren: './slider/slider.module#SliderPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'qr', loadChildren: './qr/qr.module#QrPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },

  { path: 'qrscanner', loadChildren: './qrscanner/qrscanner.module#QrscannerPageModule' },
  { path: 'member-info', loadChildren: './member-info/member-info.module#MemberInfoPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },

  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'privatemessages', loadChildren: './privatemessages/privatemessages.module#PrivatemessagesPageModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
