/**
 * Created by Benou on 03/11/2016.
 */
import angular from 'angular';
import 'angular-mocks';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    angular
      .module('test', [])
      .component('app', AppComponent);
    angular.mock.module('test');
  });

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app></app>')($rootScope);
    $rootScope.$digest();
    expect(element).toBeDefined();
  }));
});
