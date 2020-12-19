import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStoriesComponent } from './all-stories/all-stories.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdHolderComponent } from './prod-holder/prod-holder.component';
import { ProductdComponent } from './productd/productd.component';
import { StatsComponent } from './stats/stats.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryHolderComponent } from './story-holder/story-holder.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { WecomePageComponent } from './wecome-page/wecome-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'marchant/stories',
    redirectTo: 'marchant/stories/all',
    pathMatch: 'full'
  },
  {
    path: 'marchant/products',
    redirectTo: 'marchant/products/all',
    pathMatch: 'full'
  },
  {
    path: 'marchant',
    component: MenuComponent,
    children: [
      {
        path: 'Dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProdHolderComponent,
        children: [
          {
            path: 'add',
            component: ProductdComponent
          },
          {
            path: 'all',
            component: AllproductsComponent
          },
          {
            path: 'edit/:prodcutId',
            component: EditProductsComponent
          }
        ]
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'stories',
        component: StoryHolderComponent,
        children: [
          {
            path: 'tell',
            component: StoriesComponent
          },
          {
            path: 'all',
            component: AllStoriesComponent
          }
        ]
      },
      {
        path: 'statictics',
        component: StatsComponent
      }
    ]
  },
  {
    path: 'welcome',
    component: WecomePageComponent
  },
  {
    path: 'user-auth',
    component: UserAuthComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
