import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MatTableModule, MatInputModule, MatButtonModule, MatMenuModule, MatDividerModule } from '@angular/material';

import { TableComponent } from './shared/shared-components/table/table.component';
import { FormComponent } from './shared/shared-components/form/form.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { NumbersOnlyDirective } from './shared/shared-directives/numbers-only/numbers-only.directive';
import { DecimalsOnlyDirective } from './shared/shared-directives/decimals-only/decimals-only.directive';
import { CrimsonBackgroundDirective } from './shared/shared-directives/crimson-background/crimson-background.directive';
import { CustomBackgroundDirective } from './shared/shared-directives/custom-background/custom-background.directive';

@NgModule({
  declarations: [
    TableComponent,
    AppComponent,
    FormComponent,
    HomeComponent,
    MenuComponent,
    InputOutputExampleComponent,
    NotFoundComponent,
    NumbersOnlyDirective,
    DirectiveExampleComponent,
    DecimalsOnlyDirective,
    CrimsonBackgroundDirective,
    CustomBackgroundDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
