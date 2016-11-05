/**
 * Created by Benou on 05/11/2016.
 */

/** @ngInject */
export const RoomRoutes = ($urlRouterProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/room');

  $stateProvider
    .state('app.room', {
      url: '/room',
      component: 'room'
    });
};
