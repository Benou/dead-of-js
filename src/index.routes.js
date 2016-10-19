/** @ngInject */
export default ($locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
};
