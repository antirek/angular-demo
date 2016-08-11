angular.module('sampleApp', [
	'ui.router', 
    'ngResource',
    'appRoutes', 
    'MainCtrl', 
    'NerdCtrl', 
	'NerdService', 
    'GeekCtrl', 
    'GeekService',
    'xeditable',
    'angular-growl'
	])
.config(['growlProvider', function(growlProvider) {
  growlProvider.globalTimeToLive(3000);
  growlProvider.globalDisableCountDown(true);
}])
.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});