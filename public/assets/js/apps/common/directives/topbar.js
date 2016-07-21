define(['apps/common/directives/directives'], function (directives) {
    directives.directive('topBar', [function(){
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'assets/js/apps/common/templates/top_bar.html',
            // controller: ['$scope', '$http', '$state', '$timeout', '$stateParams' ,function($scope, $http, $state, $timeout, $stateParams){
            //     $scope.$state = $state;
            //     $scope.$stateParams = $stateParams;
            //     $scope.$watch('me', function(n){
            //         if(n && n.id > 0){
            //             $scope.message = {
            //                 noreadCount: 0,
            //                 txt: '查看更多',
            //                 page: 0,
            //                 listBoxStyle: {
            //                     display: 'none'
            //                 },
            //                 refresh: true,
            //                 items: new Array()
            //             }

            //             //获取未读通知条数
            //             $scope.noreadCount = function() {
            //                 $http.get('/user/system_message_noread_count.json').success(function(data){
            //                     $scope.message.noreadCount = data;
            //                 });
            //             };

            //             $scope.noreadCount();

            //             $scope.$on('to-topbar',function(e,d) {
            //                 $scope.noreadCount();
            //             });

            //             $scope.listBoxShow = function() {
            //                 $scope.message.listBoxStyle = {display:'block'}
            //             }

            //             //获取通知
            //             $scope.getMessage = function(elem) {

            //                 $scope.message.refresh = false;
            //                 $scope.message.txt = '刷新中...';

            //                 $http.get('/user/system_message.json', {
            //                     params:{
            //                         offset: $scope.message.page * 10
            //                     }
            //                 }).success(function(data){
            //                     if(data.length == 0){
            //                         $timeout(function() {
            //                             $scope.message.refresh = true;
            //                             $scope.message.txt = '没有更新';
            //                         }, 2000)
            //                     }else{
            //                         $scope.message.data = data;
            //                         Array.prototype.push.apply($scope.message.data, $scope.message.items);
            //                         $scope.message.items = $scope.message.data;
            //                         $scope.message.refresh = true;
            //                         $scope.message.txt = '查看更多';
            //                         $scope.message.page++;
            //                     }
            //                 });

            //             };

            //             $scope.getMessage();

            //             //更改通知状态（是否已读）
            //             $scope.changeStatus = function(){
                            
            //                 this.item.is_read = '1';

            //                 $http.get('/user/system_message_read/'+this.item.id+'.json').success(function(data){
            //                     if (data.status) {
            //                         $scope.message.noreadCount --;
            //                     };
            //                 });
            //             };
            //         }
            //     });

            // }]
        }
    }])
});