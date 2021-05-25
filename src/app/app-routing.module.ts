import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RowsComponent } from './rows/rows.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "rows", component: RowsComponent},
  {path: "", component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
