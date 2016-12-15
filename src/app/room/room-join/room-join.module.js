/**
 * Created by Benou on 06/11/2016.
 */

import angular from 'angular';

import {RoomListModule} from '../room-list/room-list.module';

import {RoomJoinComponent} from './room-join.component';

export const RoomJoinModule = angular
  .module('app.room.join', [
    RoomListModule
  ])
  .component('dowRoomJoin', RoomJoinComponent)
  .name;
