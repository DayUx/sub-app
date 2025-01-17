import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CameraPreviewComponent } from './pages/camera-preview/camera-preview.component';
import { ResultComponent } from './pages/result/result.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { SessionComponent } from './pages/session/session.component';
import { UsersComponent } from './pages/users/users.component';
import { TargetsComponent } from './pages/targets/targets.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { SavingComponent } from './pages/saving/saving.component';
import { UserComponent } from './pages/user/user.component';
import { CvComponent } from './pages/playground/cv/cv.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'camera',
    children: [
      {
        path: '',
        redirectTo: 'preview',
        pathMatch: 'full',
      },
      {
        path: 'preview',
        component: CameraPreviewComponent,
        data: { transparentBackground: true },
      },
      {
        path: 'result',
        component: ResultComponent,
      },
      {
        path: 'saving',
        component: SavingComponent,
      },
    ],
  },
  {
    path: 'playground',
    children: [
      {
        path: '',
        redirectTo: 'cv',
        pathMatch: 'full',
      },
      {
        path: 'cv',
        component: CvComponent,
      },
    ],
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'sessions',
    children: [
      {
        path: '',
        component: SessionsComponent,
      },
      {
        path: 'session',
        component: SessionComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'targets',
        component: TargetsComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
