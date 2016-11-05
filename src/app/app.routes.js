/**
 * Created by Benou on 03/11/2016.
 */

/** @ngInject */
export const AppRoutes = ($locationProvider, $urlRouterProvider, $stateProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    });
};
