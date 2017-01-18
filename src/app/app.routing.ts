import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from  './reactive-form/reactive-form.component';
import { ServiceUseComponent } from './service-use/service-use.component';

const APP_ROUTES: Routes = [
  { path: 'basic', component: BasicComponent},
  { path: 'templatedriven', component: FormComponent},
  { path: 'reactiveform', component: ReactiveFormComponent},
  { path: 'serviceuse', component: ServiceUseComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);