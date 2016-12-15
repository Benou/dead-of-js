/**
 * Created by Benou on 05/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {RoomJoinModule} from './room-join/room-join.module';
import {RoomOpenModule} from './room-open/room-open.module';
import {RoomWaitModule} from './room-wait/room-wait.module';

import {RoomRoutes} from './room.routes';
import {RoomComponent} from './room.component';
import {RoomService} from './room.service';

export const RoomModule = angular
  .module('app.room', [
    uiRouter,
    RoomJoinModule,
    RoomOpenModule,
    RoomWaitModule
  ])
  .config(RoomRoutes)
  .component('dowRoom', RoomComponent)
  .service('RoomService', RoomService)
  .name;
