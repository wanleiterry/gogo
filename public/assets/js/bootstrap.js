/**
 * 依赖所有应用main
 */
 define([
    'angular',
    'app',
    'apps/demo/main',
    'apps/common/directives/_base',
    'apps/auth/main',
    'apps/shop/main',
    'apps/goods/main',
    'apps/design/main',
    'apps/order/main',
    'apps/delivery/main',
    'apps/ump/main',
    'apps/apps/main',
    'apps/guider/main',
    'apps/member/main',
    'apps/credit/main',
    'apps/trade/main',
    'apps/weixin/main',
    'apps/stat/main',
    'apps/merchant/main',
    'apps/profile/main',
    'apps/partner/main',
    'apps/announce/main',
    'apps/mall/main',
    'apps/mall_design/main',
    'apps/mall_shop/main',
    'apps/mall_goods/main',
	'apps/supplier/main',
    'apps/distributor/main',
    'apps/team/main',
    'apps/virtualgoods/main',
    'apps/app/main',
    'apps/magic/main'
    ], function (angular) {
        angular.element(document).ready(function(){
            angular.bootstrap(document, ['mch']);
        });
	});

