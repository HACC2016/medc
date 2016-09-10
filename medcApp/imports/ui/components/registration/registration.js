import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './registration.html';

class Registration {}

const name = 'registration';

export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component (name, {
  template,
  controllerAs: name,
  controller: Registration
})
  .config(config);

function config ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('registration', {
      url: '/registration',
      template: '<registration></registration>'
    })
}
