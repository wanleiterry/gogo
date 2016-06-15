CKEDITOR.plugins.add( 'uploadimage', {
    icons: 'uploadimage',
    init: function( editor ) {
        var openimagespace;
        angular.module('ckeditor', ['ui.bootstrap','mch']).run(function($modal){
            openimagespace=function(editor) {
                var modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'assets/js/apps/common/templates/addimage.space.html',
                    controller: ['$scope', '$http', '$modalInstance', function ($scope, $http, $modalInstance) {
                        $scope._global=_global;
                        $scope.upimages = 0;
                        var reGetProducts = function () {
                            var postData = {
                                offset: $scope.paginationConf.currentPage,
                                limit: $scope.paginationConf.itemsPerPage
                            };
                            $http.get('/attachment?offset=' + (postData.offset - 1) * postData.limit + '&limit=' + postData.limit).success(function (data) {
                                $scope.paginationConf.totalItems = data._count;
                                $scope.images = data.data;
                            });
                        };
                        $scope.paginationConf = {
                            currentPage: 1,
                            itemsPerPage: 18
                        };
                        $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage + upimages', reGetProducts);
                        $scope.choose = function (item) {
                            $scope.selectedImages = [];
                            item.checked = !item.checked;
                            angular.forEach($scope.images, function (item) {
                                if (item.checked == true) {
                                    $scope.selectedImages.push(item);
                                }
                            });
                        };

                        $scope.ok = function () {
                            $modalInstance.close($scope.selectedImages);
                        };

                        $scope.cancel = function () {
                            $modalInstance.dismiss('cancel');
                        };
                    }]
                });
                modalInstance.result.then(function (selectedImages) {
                    function getSelectedImage( editor ) {
                        var sel = editor.getSelection();
                        var element = sel.getSelectedElement();
                        return element;
                    }
                    var img = getSelectedImage( editor );

                    if(img!=null){
                        img.setAttribute( 'src',selectedImages[0].url);
                    }else{
                        var html = '';
                        angular.forEach(selectedImages, function (item) {
                            html += '<img style="max-width:100%" src="' + _global.url.ms + item.url + '"/>'
                        })
                        editor.insertHtml(html);
                    }

                });
            }
        });
        angular.bootstrap(editor.element, ['ckeditor']);



        editor.addCommand( 'uploadimage', {
            exec: function(editor) {
                openimagespace(editor);
            }
        } );

        editor.ui.addButton( 'Uploadimage', {
            label: '插入图片',
            command: 'uploadimage',
            toolbar: 'uploadimage'
        });

    }
});