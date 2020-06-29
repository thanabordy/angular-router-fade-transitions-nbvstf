import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { KakapoComponent } from './kakapo/kakapo.component';
import { TakaheComponent } from './takahe/takahe.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kakapo',  },
  { path: 'kakapo', component: KakapoComponent },
  { path: 'takahe', component: TakaheComponent },
  { path: 'fairy-tern', component: FairyTernComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);