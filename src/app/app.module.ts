import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModule } from './core/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductdComponent } from './productd/productd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { JwtModule } from '@auth0/angular-jwt';
import { WecomePageComponent } from './wecome-page/wecome-page.component';
import { OrdersComponent } from './orders/orders.component';
import { StoriesComponent } from './stories/stories.component';
import { StatsComponent } from './stats/stats.component';
import { ProdHolderComponent } from './prod-holder/prod-holder.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { StoryHolderComponent } from './story-holder/story-holder.component';
import { AllStoriesComponent } from './all-stories/all-stories.component';
import { FlexLayoutModule } from '@angular/flex-layout';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ProductdComponent,
    PageNotFoundComponent,
    UserAuthComponent,
    WecomePageComponent,
    OrdersComponent,
    StoriesComponent,
    StatsComponent,
    ProdHolderComponent,
    AllproductsComponent,
    StoryHolderComponent,
    AllStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialFileInputModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:3000']
      },
    }),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
