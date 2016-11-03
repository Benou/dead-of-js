/**
 * Created by Benou on 03/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';

export const AppModule = angular
  .module('app', [
    uiRouter
  ])
  .config(AppRoutes)
  .component('app', AppComponent)
  .name;
