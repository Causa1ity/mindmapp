import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {ToolbarComponent} from './components/toolbar/toolbar.component'
import {SlidersPanelComponent} from './components/sliders-panel/sliders-panel.component'
import {ColorsPanelComponent} from './components/colors-panel/colors-panel.component'
import {FloatingButtonsComponent} from './components/floating-buttons/floating-buttons.component'
import {ColorPickerModule} from 'ngx-color-picker'
import {DragDropService} from './services/dragdrop.service'
import {UtilsService} from './services/utils.service'
import {ShortcutsService} from './services/shortcuts.service'
import {DialogService} from './services/dialog.service'
import {IPFSService} from './services/ipfs.service'
import {SettingsComponent} from './components/settings/settings.component'
import {SettingsService} from './services/settings.service'
import {NotificationsService} from './services/notifications.service'
import {StorageService} from './services/storage.service'
import {TranslateLoader, TranslateModule} from '@ngx-translate/core'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {MmpService} from './services/mmp.service'
import {UpdateService} from './services/update.service'
import {MapComponent} from './components/map/map.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FileService} from './services/file.service'
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material'
import {AboutComponent} from './components/about/about.component'
import {FooterComponent} from './components/footer/footer.component'
import {ShortcutsComponent} from './components/shortcuts/shortcuts.component'
import {SidenavComponent} from './components/sidenav/sidenav.component'
import {AppComponent} from './components/app.component'

export function HttpLoaderFactory (http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/')
}

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        SlidersPanelComponent,
        ColorsPanelComponent,
        FloatingButtonsComponent,
        SettingsComponent,
        ShortcutsComponent,
        AboutComponent,
        MapComponent,
        FooterComponent,
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatInputModule,
        MatDialogModule,
        MatListModule,
        MatTabsModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatSliderModule,
        ColorPickerModule
    ],
    providers: [
        DialogService,
        DragDropService,
        ShortcutsService,
        UpdateService,
        UtilsService,
        FileService,
        MmpService,
        IPFSService,
        SettingsService,
        StorageService,
        NotificationsService
    ],
    entryComponents: [
        ShortcutsComponent,
        SettingsComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
