/**
 * Created by Benou on 05/11/2016.
 */

/** @ngInject */
export const RoomRoutes = $stateProvider => {
  $stateProvider
    .state('app.room', {
      url: '/room',
      abstract: true,
      component: 'room'
    })
    .state('app.room.join', {
      url: '/join',
      component: 'roomJoin'
    })
    .state('app.room.open', {
      url: '/open',
      component: 'roomOpen'
    })
    .state('app.room.wait', {
      url: '/wait',
      component: 'roomWait'
    });
};
