import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './index.scss';

import routes from './index.routes';

angular
  .module('app', [
    uiRouter
  ])
  .config(routes);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app']);
});
