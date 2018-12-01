var mainModule = angular.module('App', [ 'ngRoute', 'Index' ]); /* 하나 모듈 다른모듈 주입 */

mainModule.config([ '$routeProvider', '$compileProvider',
		function($routeProvider, $httpProvider, $provide, $compileProvider) {
			$routeProvider.when('/index', { 
				templateUrl : 'resources/app/views/index.html'
				
			}).when('/index/:type', { /* 주소값이 바뀜 */
				templateUrl :  'resources/app/views/index.html'
				,controller : 'indexCtrl'
			}).when('/index2/:pageStatus', {
				templateUrl : function(param) {
					/* alert(param.pageStatus); */
					return 'resources/app/views/index2.html';
				},
				controller : 'indexCtrl'
			}).when('/index3/:pageStatus', {
				templateUrl : function(param) {
					return 'resources/app/views/index3.html';
				},
				controller : 'indexCtrl'
			}).when('/index4/:pageStatus', {
				templateUrl : function(param) {
					var templateUrl = "";
					var baseUrl = {
						"0" : 'resources/app/views/index4-1.html',
						"1" : 'resources/app/views/index4-2.html',
						"2" : 'resources/app/views/index4-3.html'
					}
					templateUrl = baseUrl[param.pageStatus];
					return templateUrl;
				},
				controller : 'indexCtrl'
			}).otherwise({
				redirectTo : '/index'
			});
		} ]);

/*
 * var mainModule = angular.module('App', ['ngRoute','Index']); 하나 모듈 다른모듈 주입
 * 
 * mainModule.config(['$routeProvider' , '$compileProvider' , function
 * ($routeProvider, $httpProvider, $provide, $compileProvider) {
 * $routeProvider.when('/index', { templateUrl: 'resources/app/views/index.html' })
 * .when('/index2/:pageStatus', { templateUrl: function(param){
 * alert(param.pageStatus); return 'resources/app/views/index2.html'; }
 * ,controller: 'indexCtrl' }) .when('/index3/:pageStatus', { templateUrl:
 * function(param){ return 'resources/app/views/index3.html'; } ,controller:
 * 'indexCtrl' }).when('/index4/:pageStatus', { templateUrl: function(param){
 * var templateUrl=""; var baseUrl = { "0":'resources/app/views/index4-1.html',
 * "1":'resources/app/views/index4-2.html',
 * "2":'resources/app/views/index4-3.html' } templateUrl =
 * baseUrl[param.pageStatus]; return templateUrl; } }) .otherwise({ redirectTo:
 * '/index' }); }]);
 * 
 * 
 * 
 * 
 * $routeProvider 주소 연결 $httpProvider, $provide 데이터 전달 $compileProvider 화면
 * 새로고침... 자바를 클래스를로 바꿔주는 것처럼 컴파일을 함.
 */