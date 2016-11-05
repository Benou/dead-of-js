/**
 * Created by Benou on 06/11/2016.
 */

import angular from 'angular';

import {RoomFormComponent} from './room-form.component';

export const RoomFormModule = angular
  .module('app.room.form', [])
  .component('roomForm', RoomFormComponent)
  .name;
