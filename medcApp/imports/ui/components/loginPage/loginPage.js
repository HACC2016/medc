import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './loginPage.html';

class LoginPage {
  constructor ($scope, $reactive) {
    'ngInject';
  }
}
const name = 'loginPage';

export default angular.module(name, [
  angularMeteor,
	uiRouter
]).component(name, {
  template,
  controllerAs: name,
  controller: LoginPage}).config(config);

function config ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('loginPage', {
      url: '/loginPage',
      template: '<login-page></login-page>'
    })
}
