import { Routes } from '@angular/router';

// Importar componentes existentes
import { CategoriesComponent } from './components/categories/categories.component';
import { OffersComponent } from './components/offers/offers.component';

import { MenuComponent } from './components/navbar/Menu/menu.component';
import { SearchComponent } from './components/navbar/Search/search.component';
import { SupportComponent } from './components/navbar/Support/support.component';
import { LanguageComponent } from './components/navbar/Language/language.component';
import { AccountsDealsComponent } from './components/navbar/AccountsDeals/accounts-deals.component';
import { CartComponent } from './components/navbar/Cart/cart.component';



export const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'offers', component: OffersComponent },

  // Rutas para los componentes de NavBar
  { path: 'menu', component: MenuComponent },
  { path: 'search', component: SearchComponent },
  { path: 'support', component: SupportComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'accounts-deals', component: AccountsDealsComponent },
  { path: 'cart', component: CartComponent },

  { path: '**', redirectTo: 'categories' } // Redirige por defecto
];
