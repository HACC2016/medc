import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './contactUs.html';


class ContactUs {
  constructor ($scope, $reactive) {
    'ngInject';

    
  }
}

const name = 'contactUs';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter
]).component (name, {
  template,
  controllerAs: name,
  controller: ContactUs
})
  .config(config);

function config ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('contactUs', {
      url: '/contactUs',
      template: '<contact-us></contact-us>'
    })
}


