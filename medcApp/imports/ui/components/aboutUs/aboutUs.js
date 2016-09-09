import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './aboutUs.html';


class AboutUs {
  constructor ($scope, $reactive) {
    'ngInject';

    
  }
}

const name = 'aboutUs';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component (name, {
  template,
  controllerAs: name,
  controller: AboutUs
})
  .config(config);

function config ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('aboutUs', {
      url: '/aboutUs',
      template: '<about-us></about-us>'
    })
}

