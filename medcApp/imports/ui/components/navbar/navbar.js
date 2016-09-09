import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navbar.html';

const name = 'navbar';

// create a module
export default angular.module (name, [
  angularMeteor
]).component (name, {
  template,
  controllerAs: name
});
