angular.module('Index', []).controller('indexCtrl',
		function($scope, $rootScope, $routeParams, $http, $compile) {
		if($routeParams.type=='select'){
			
			$("#inputForm").hide();

			$scope.fn_select_event = function(){
				$http({
					method : 'get',
					url : "/test1/userSelect",
					params : {
						"val" : "test"
					},
					headers : {
						'Content-Type' : 'application/json;charset=utf-8'
					}
				}).success(function(data) {
					console.log(data);
					/*$scope.dataSource=data.userList;*/
					$scope.dataSource=SQLike.q(
							   {
							       Select: ['*'],
							       From: data.userList,
							       Where: function(){return this.DEL_YN=='N'}
						     	   ,OrderBy: ['user_nm','|desc|']
							   }
							);
				}).error(function(data, status, headers, config) {
					console.log(status);
				});
			};
			$scope.fn_select_event();
			$scope.fn_save_event =function(key, user_id, index){
				
				if (key=="U") {
					$scope.keyNm="수정";
					$scope.user_nm = $("#right1 li #user_nm")[index];
					$scope.user_desc = $("#right1 li #user_desc")[index];
					$http({
						method:'get',
						url:'/test1/updateUser',
						params:{"user_id":user_id,
							    "user_nm":$scope.user_nm.value,
							    "user_desc": $scope.user_desc.value						
							},
						
						headers:{'Content-Type':'application/json; charset=utf-8'}
					})
					.success(function(data){
						console.log(data);
						if (data.uResult=="success") {
							alert("수정완료");
							$scope.dataSource=SQLike.q(
									   {
									       Select: ['*'],
									       From: data.userList,
									       Where: function(){return this.DEL_YN=='N'}
								     	   ,OrderBy: ['user_nm','|desc|']
									   }
									);
						}
					})
					.error(function(data,status,headers,config){
						console.log(status);
					});
					
				} else if (key=="I"){
					$scope.user_id = $("#right1 li #user_id")[index];
					$scope.user_nm = $("#right1 li #user_nm")[index];
					$scope.user_desc = $("#right1 li #user_desc")[index];
					
					$http({
						method:'get',
						url:'/test1/userInsert',
						params:{"user_id":$scope.user_id.value,
							    "user_nm":$scope.user_nm.value,
							    "user_desc": $scope.user_desc.value						
							},
						headers:{'Content-Type':'application/json; charset=utf-8'}
					})
					.success(function(data){
						console.log(data);
						if (data.code==10) {
							alert(data.code_desc);
						} else {
							$scope.dataSource=data.userList;
							$scope.row_max_index++;
						}

					})
					.error(function(data,status,headers,config){
						console.log(status);
					});
					
					
				} else if(key=="D"){
					$scope.keyNm="삭제";
					$http({
						method:'get',
						url:'/test1/deleteUser',
						params:{"user_id":user_id},
						headers:{'Content-Type':'application/json; charset=utf-8'}
					})
					.success(function(data){
						console.log(data);
						if (data.dResult=="success") {
							alert("삭제");
							/*
							 * 자바스클립트 숨기기
							 * var d = $("#right1 li")[index];
							 * d.style.display = "none";*/
							$scope.dataSource=SQLike.q(
									   {
									       Select: ['*'],
									       From: data.userList,
									       Where: function(){return this.DEL_YN=='N'}
								     	   ,OrderBy: ['user_nm','|desc|']
									   }
									);
						} else {
							alert("삭제실패");
						}
					
					})
					.error(function(data,status,headers,config){
						console.log(status);
					});
				} else if (key="S"){
					$("#inputForm").show();
				}
		
			};
			$scope.fn_add_event=function(){
				$scope.row_max_index=$scope.dataSource.length;
				$scope.dataSource.push({del_yn:"Y",
										user_desc : "",
										user_id : "",
										user_nm: ""});
			};
		} else {
			alert("처리할 것이 없습니다. ");
		}

			/*
			 * $scope.colorItem = ["yellow", "green", "white"];
			 * 
			 * if ($routeParams.pageStatus=="cw") { colorNum++; } else if
			 * ($routeParams.pageStatus=="ccw"){ colorNum--; } else {
			 * $("#left2").css("background-color",$scope.colorItem[$routeParams.pageStatus]);
			 * return; }
			 * 
			 * $("#left2").css("background-color",$scope.colorItem[colorNum%3]);
			 * $("#right2").css("background-color",$scope.colorItem[(colorNum+1)%3]);
			 * $("#bottom").css("background-color",$scope.colorItem[(colorNum+2)%3]);
			 */

		});