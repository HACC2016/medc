import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './registration.html';

class Registration {}
const name = 'registration';

export default angular.module(name, [angularMeteor, 'accounts.ui']).component(name, {templateUrl: "./registration.html", controller: Registration});
