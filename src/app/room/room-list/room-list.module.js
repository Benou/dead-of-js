/**
 * Created by Benou on 05/11/2016.
 */

import angular from 'angular';

import {RoomListComponent} from './room-list.component';
import {RoomListItemComponent} from './room-list-item.component';

export const RoomListModule = angular
  .module('app.room.list', [])
  .component('dowRoomList', RoomListComponent)
  .component('dowRoomListItem', RoomListItemComponent)
  .name;
