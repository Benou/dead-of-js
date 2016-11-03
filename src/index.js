/**
 * Created by Benou on 03/11/2016.
 */

import angular from 'angular';

import {AppModule} from './app/app.module';

angular.element(document).ready(() => {
  angular.bootstrap(document, [AppModule]);
});
