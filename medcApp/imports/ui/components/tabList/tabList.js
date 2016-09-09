import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './tabList.html';


class TabList {
  constructor ($scope, $reactive) {
    'ngInject';

    $scope.tabs = [
      {
        'name': 'Information'
      },
      {
        'name': 'About us'
      },
      {
        'name': 'Contact us'
      }
    ];
  }
}

const name = 'tabList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component (name, {
  template,
  controllerAs: name,
  controller: TabList
})
  .config(config);

function config ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('tabs', {
      url: '/tabs',
      template: '<tab-list></tab-list>'
    })
}
