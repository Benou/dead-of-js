/**
 * Created by Benou on 05/11/2016.
 */

/** @ngInject */
export const RoomRoutes = $stateProvider => {
  $stateProvider
    .state('app.room', {
      url: '/room',
      abstract: true,
      component: 'dowRoom'
    })
    .state('app.room.join', {
      url: '/join',
      component: 'dowRoomJoin'
    })
    .state('app.room.open', {
      url: '/open',
      component: 'dowRoomOpen'
    })
    .state('app.room.wait', {
      url: '/:roomId/wait',
      component: 'dowRoomWait'
    })
    .state('app.room.edit', {
      url: '/:roomId/edit',
      component: 'dowRoomEdit'
    });
};
