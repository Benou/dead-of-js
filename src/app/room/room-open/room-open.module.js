/**
 * Created by Benou on 06/11/2016.
 */

import angular from 'angular';

import {RoomFormModule} from '../room-form/room-form.module';

import {RoomOpenComponent} from './room-open.component';

export const RoomOpenModule = angular
  .module('app.room.open', [
    RoomFormModule
  ])
  .component('dowRoomOpen', RoomOpenComponent)
  .name;
