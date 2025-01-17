import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { bootstrapHouseFill } from '@ng-icons/bootstrap-icons';
import {
  jamArrowDown,
  jamArrowLeft,
  jamArrowUp,
  jamCameraF,
  jamCheck,
  jamChevronLeft,
  jamChevronRight,
  jamClose,
  jamCogF,
  jamFolder,
  jamFolderF,
  jamFolderOpen,
  jamGhost,
  jamHomeF,
  jamJoystick,
  jamMoreVerticalF,
  jamPlus,
  jamSearch,
} from '@ng-icons/jam-icons';
import {
  iconoirBinMinus,
  iconoirCamera,
  iconoirCancel,
  iconoirCheck,
  iconoirCopy,
  iconoirDashboardDots,
  iconoirHomeSimpleDoor,
  iconoirMediaImage,
  iconoirNavArrowDown,
  iconoirNavArrowLeft,
  iconoirOnePointCircle,
  iconoirPasteClipboard,
  iconoirSaveFloppyDisk,
  iconoirSettings,
  iconoirTimer,
} from '@ng-icons/iconoir';
import { NgIconsModule } from '@ng-icons/core';

import { NgxOpenCVModule } from '../lib/ngx-opencv.module';
import { OpenCVConfig } from '../lib/models';

import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { LongPressDirective } from './directives/long-press.directive';
import { NgVar } from './directives/ng-var.directive';
import { HeaderComponent } from './components/header/header.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ChronoPickerComponent } from './components/chrono-picker/chrono-picker.component';
import { ImpactsListComponent } from './components/impacts-list/impacts-list.component';
import { ButtonComponent } from './components/button/button.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuActionComponent } from './components/menu-action/menu-action.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { EmptyTextComponent } from './components/empty-text/empty-text.component';
import { TabBarButtonComponent } from './components/tab-bar-button/tab-bar-button.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { PluckPipe, ResultComponent } from './pages/result/result.component';
import { CameraPreviewComponent } from './pages/camera-preview/camera-preview.component';
import { SegmentedButtonComponent } from './components/segmented-button/segmented-button.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { NumberSpinnerComponent } from './components/number-spinner/number-spinner.component';
import { SlideSheetComponent } from './components/slide-sheet/slide-sheet.component';
import { TargetPreviewComponent } from './components/target-preview/target-preview.component';
import { TotalPreviewComponent } from './components/total-preview/total-preview.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { SettingPickerComponent } from './components/setting-picker/setting-picker.component';
import { SearchComponent } from './components/search/search.component';
import { SessionItemComponent } from './components/session-item/session-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { InputComponent } from './components/input/input.component';
import { SessionComponent } from './pages/session/session.component';
import { UsersComponent } from './pages/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ToastComponent } from './components/toast/toast.component';
import { TargetsComponent } from './pages/targets/targets.component';
import { TargetItemComponent } from './components/target-item/target-item.component';
import { LogoComponent } from './components/logo/logo.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { UserLastnameFirstCharPipe } from './pipes/UserLastnameFirstCharPipe';
import { TagComponent } from './components/tag/tag.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { SavingComponent } from './pages/saving/saving.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { UserComponent } from './pages/user/user.component';
import { ListTargetsComponent } from './components/list-targets/list-targets.component';
import { RSSParserService } from './services/rss-parser.service';
import { RippleDirective } from './directives/ripple.directive';
import { OpencvImshowComponent } from './components/opencv-imshow/opencv-imshow.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperItemComponent } from './components/swiper-item/swiper-item.component';
import { ResultsPreviewComponent } from './components/results-preview/results-preview.component';

const openCVConfig: OpenCVConfig = {
  openCVDirPath: 'assets/opencv',
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    TabBarComponent,
    TabBarButtonComponent,
    SettingsComponent,
    HomeComponent,
    HeaderComponent,
    IconButtonComponent,
    ResultComponent,
    CameraPreviewComponent,
    SegmentedButtonComponent,
    TextfieldComponent,
    NumberSpinnerComponent,
    SlideSheetComponent,
    ChronoPickerComponent,
    ImpactsListComponent,
    TargetPreviewComponent,
    ButtonComponent,
    TotalPreviewComponent,
    SpinnerComponent,
    PluckPipe,
    SelectComponent,
    SessionsComponent,
    SettingPickerComponent,
    SearchComponent,
    AddButtonComponent,
    SessionItemComponent,
    MenuComponent,
    MenuActionComponent,
    MessageBoxComponent,
    EmptyTextComponent,
    LongPressDirective,
    NgVar,
    InputComponent,
    InputComponent,
    SessionComponent,
    UsersComponent,
    UserComponent,
    UserItemComponent,
    ToastComponent,
    TargetsComponent,
    TargetItemComponent,
    LogoComponent,
    TeamsComponent,
    TeamItemComponent,
    UserLastnameFirstCharPipe,
    TagComponent,
    FileExplorerComponent,
    FileExplorerComponent,
    SavingComponent,
    LoadingComponent,
    ListTargetsComponent,
    ResultsPreviewComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgxOpenCVModule.forRoot(openCVConfig),
    BrowserModule,
    ColorPickerModule,
    AppRoutingModule,
    HttpClientModule,
    RippleDirective,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgIconsModule.withIcons({
      iconoirHomeSimpleDoor,
      iconoirCamera,
      iconoirSettings,
      iconoirNavArrowLeft,
      iconoirNavArrowDown,
      iconoirDashboardDots,
      iconoirTimer,
      iconoirCheck,
      iconoirCopy,
      iconoirBinMinus,
      iconoirOnePointCircle,
      iconoirMediaImage,
      iconoirPasteClipboard,
      iconoirSaveFloppyDisk,
      iconoirCancel,
      bootstrapHouseFill,
      jamCameraF,
      jamCogF,
      jamHomeF,
      jamFolderF,
      jamArrowUp,
      jamArrowDown,
      jamArrowLeft,
      jamGhost,
      jamCheck,
      jamJoystick,
      jamFolder,
      jamFolderOpen,
      jamChevronRight,
      jamChevronLeft,
      jamSearch,
      jamMoreVerticalF,
      jamPlus,
      jamClose,
    }),
    FormsModule,
    OpencvImshowComponent,
    SwiperComponent,
    SwiperItemComponent,
  ],
  providers: [UserLastnameFirstCharPipe, RSSParserService],
  bootstrap: [AppComponent],
  exports: [TagComponent],
})
export class AppModule {
  constructor() {
    // @ts-ignore
    window.screen.orientation.lock('portrait');
  }
}
