import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { HeaderComponent } from './header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { MarsPictComponent } from './mars-pict/mars-pict.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ListItemsComponent } from './list-items/list-items.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { AstronomiPictComponent } from './astronomi-pict/astronomi-pict.component';
import { FavoriteCollectionComponent } from './favorite-collection/favorite-collection.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ListFromStorageComponent } from './list-from-storage/list-from-storage.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomePageComponent,
    MarsPictComponent,
    ListItemsComponent,
    AstronomiPictComponent,
    FavoriteCollectionComponent,
    ListFromStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzLayoutModule,
    NzResultModule,
    NzButtonModule,
    NzMenuModule,
    NzAvatarModule,
    NzTypographyModule,
    NzDatePickerModule,
    NzGridModule,
    NzCardModule,
    NzSkeletonModule,
    NzModalModule,
    NzEmptyModule,
    NzTabsModule,
    NzCarouselModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
