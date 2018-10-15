import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputCardComponent } from './input-card/input-card.component';
import { InputComponent } from './input/input.component';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        InputCardComponent,
        InputComponent,
        SidebarComponent,
    ],
    imports: [
        BrowserModule,
        CardModule,
        FormsModule,
        InputTextModule,
        SidebarModule,
        ToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
