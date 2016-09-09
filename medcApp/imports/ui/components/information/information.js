import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './information.html';


class Information {
  constructor ($scope, $reactive) {
    'ngInject';

  }
}

const name = 'information';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component (name, {
  template,
  controllerAs: name,
  controller: Information
})
  .config(config);

function config ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('information', {
      url: '/information',
      template: '<information></information>'
    })
}

