/**
 * Created by Benou on 06/11/2016.
 */

import angular from 'angular';

import {RoomWaitComponent} from './room-wait.component';

export const RoomWaitModule = angular
  .module('app.room.wait', [])
  .component('dowRoomWait', RoomWaitComponent)
  .name;
