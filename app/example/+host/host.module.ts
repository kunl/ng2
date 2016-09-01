import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HostDemo, HostService, com1 }   from './host.demo';

@NgModule({
    imports: [BrowserModule],
    declarations: [com1, HostDemo  ],
    providers: [HostService],
})
export class HostModule { }
