(function(){
	'use strict';
var myApp=angular.module("myApp");
 myApp.config(function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl : 'partial/home.html'
	})
	.when('/product',{
		templateUrl : 'partial/product/allproducts.html',
		controller: 'productCtrl'
	})
	.when('/contactUs',{
		templateUrl : 'partial/contactus.html'
	})
	.when('/aboutUs',{
		templateUrl : 'partial/aboutus.html'
	})
	
	.when('/productdetail/:paramId',{
		templateUrl:'partial/product/productdetail.html',
		controller: 'productDetail'
	})
	.otherwise({redirectTo:'/home'});
 })
 myApp.controller("productCtrl",function($scope,$http,$routeParams){
	 $http.get('json/hp.json').success(function(edata){
	 	$scope.products=edata;
		 $scope.pono=function(){
			 $scope.orderCat="pno";
		 }
		 $scope.poname=function(){
			 $scope.orderCat="pname";
		 }
		 
		 $scope.poprice=function(){
			 $scope.orderCat="price";
		 }
		});
});
 myApp.controller("productDetail",function($scope,$http,$routeParams){
	 $http.get('json/hp.json').success(function(edata){
	 	console.log($routeParams.paramId);
		for(var i=0;i<edata.length;i++){
			if(edata[i].pono ===$routeParams.paramId){
				$scope.finalDetail=edata[i];
			}
		}
	 });
 });
})();
