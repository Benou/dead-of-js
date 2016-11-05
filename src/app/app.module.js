/**
 * Created by Benou on 03/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {RoomModule} from './room/room.module';

import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';

export const AppModule = angular
  .module('app', [
    uiRouter,
    RoomModule
  ])
  .config(AppRoutes)
  .component('app', AppComponent)
  .name;
