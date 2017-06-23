import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/employee',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',

    }
    ,
    {
        path: 'employee',
        loadChildren: './employee/employee.module#EmployeeModule',

    },
    {
        path: 'project',
        loadChildren: './project/project.module#ProjectModule',

    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
//export const KarisoftRoutingModule = RouterModule.forRoot(routes, { useHash: true });