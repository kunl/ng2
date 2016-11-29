import { HttpDemo } from './http.demo';
import { UserComponent } from './user.component';
export var HttpRouters = [
    {
        path: '',
        component: HttpDemo,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: HttpDemo },
            { path: ':id', component: UserComponent }
        ]
    }
];
//# sourceMappingURL=http.routes.js.map