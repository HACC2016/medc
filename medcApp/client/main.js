import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as Home } from '../imports/ui/components/home/home';
import { name as TabList } from '../imports/ui/components/tabList/tabList';
import { name as Navigation } from '../imports/ui/components/navigation/navigation';
import { name as Navbar } from '../imports/ui/components/navbar/navbar';
import { name as Information } from '../imports/ui/components/information/information';
import { name as ContactUs } from '../imports/ui/components/contactUs/contactUs';
import { name as Dashboard } from '../imports/ui/components/dashboard/dashboard';
import { name as AboutUs } from '../imports/ui/components/aboutUs/aboutUs';

 
angular.module('medcApp', [
    angularMeteor,
    Home,
    uiRouter,
  	TabList,
  	Navigation,
  	Navbar,
  	Information,
  	ContactUs,
  	AboutUs,
  	Dashboard
  ])
  .config(config);

function config ($locationProvider, $urlRouterProvider) {
	'ngInject';

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');
}