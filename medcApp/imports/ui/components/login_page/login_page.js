import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './login_page.html';

class LoginPage {}
const name = 'login_page';

export default angular.module(name, [angularMeteor, 'accounts.ui']).component(name, {templateUrl: "./login_page.html", controller: LoginPage});
