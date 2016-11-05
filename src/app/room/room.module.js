/**
 * Created by Benou on 05/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {RoomListModule} from './room-list/room-list.module';

import {RoomRoutes} from './room.routes';
import {RoomComponent} from './room.component';

export const RoomModule = angular
  .module('app.room', [
    uiRouter,
    RoomListModule
  ])
  .config(RoomRoutes)
  .component('room', RoomComponent)
  .name;
