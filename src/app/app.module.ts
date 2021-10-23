import { NgModule }                from "@angular/core";
import { BrowserModule }           from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }    from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent }   from "./component/home/home.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent
	],
	imports:      [
		BrowserModule,
		BrowserAnimationsModule,
		MatIconModule,
		AppRoutingModule
	],
	providers:    [],
	bootstrap:    [AppComponent]
})
export class AppModule {
}
