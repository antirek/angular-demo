angular.module('sampleApp', [
	'ui.router', 'appRoutes', 'MainCtrl', 'NerdCtrl', 
	'NerdService', 'GeekCtrl', 'GeekService', 'xeditable'
	])
.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});