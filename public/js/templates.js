angular.module("templates",[]).run(["$templateCache", function($templateCache) {$templateCache.put("assets/js/apps/common/templates/addimage.html","<div class=add-image><div class=btn-group dropdown><button up-load class=\"fileinput-button js-upload-btn btn btn-sm btn-default\"></button> <button type=button class=\"btn btn-default btn-sm dropdown-toggle\" dropdown-toggle><span class=caret></span></button><ul class=dropdown-menu role=menu><li><a image-space>图片空间</a></li><li><a ng-click=\"remoteshow=true\" href=javascript:void(0);>网络图片</a></li></ul></div><span class=help-inline ng-bind=help></span><div ng-show=remoteshow><div class=\"popover fade right in\"><div class=arrow></div><div class=popover-content><div class=popover-img-remote><div class=form-inline><input type=text ng-model=remote name=remote_url class=\"form-control input-sm mr5\" placeholder=请填写图片地址> <button remote-image remote=remote remoteshow=remoteshow class=\"btn btn-primary btn-sm mr5\" type=button><i class=\"fa fa-check\"></i></button> <button ng-click=\"remoteshow=false\" class=\"btn btn-default btn-sm\" type=button><i class=\"fa fa-close\"></i></button></div></div></div></div></div></div>");
$templateCache.put("assets/js/apps/common/templates/addimage.space.html","<div class=modal-img-space><div class=modal-header><button type=button class=close ng-click=cancel() data-dismiss=modal><span aria-hidden=true>×</span><span class=sr-only>关闭</span></button><div class=clearfix><div class=pull-left><button up-load upimages=upimages class=\"fileinput-button js-upspace-btn btn btn-sm btn-primary\"><i class=\"fa fa-plus\"></i></button></div><div class=\"input-group input-group-sm ml20 pull-left remote-url-box\"><input type=text placeholder=请贴入网络图片地址 ng-model=remote name=remote_url class=\"form-control input-sm\"> <span class=\"input-group-btn mr10\"><button remote-image remote=remote upimages=upimages class=\"btn btn-default btn-sm\">提取</button></span></div><div class=\"input-group input-group-sm ml20 pull-left search-box\"><input type=text placeholder=输入文件名 class=form-control ng-model=searchParam.title><div class=input-group-btn><button class=\"btn btn-default\" type=button ng-click=search()>搜索</button></div></div></div></div><div class=modal-body><ul class=\"image-list clearfix\"><li ng-click=choose(item) ng-class={active:item.checked} ng-repeat=\"item in images\"><img ng-src=\"{{_global.url.ms+item.url }}?imageView2/2/w/160/h/160/q/75/format/webp\"><div class=image-meta>{{item.imageinfo.width}}x{{item.imageinfo.height}}</div></li></ul></div><div class=\"modal-footer clearfix\"><tm-pagination conf=paginationConf></tm-pagination><button ng-click=ok() type=button class=\"btn btn-success btn-sm\">确定</button></div></div>");
$templateCache.put("assets/js/apps/common/templates/addvoice.space.html","<div class=modal-content><div class=modal-header><button type=button class=close ng-click=cancel() data-dismiss=modal><span aria-hidden=true>×</span><span class=sr-only>关闭</span></button><div class=clearfix><div class=pull-left><button up-load-voice upvoice=upvoice class=\"fileinput-button js-upspace-btn btn btn-sm btn-primary\"><i class=\"fa fa-plus\"></i></button></div><div class=\"input-group ml20 pull-left remote-url-box\"><p style=\"margin: 0px;line-height: 28px;\">最大支持 2 MB 以内的语音 (amr, mp3 格式)</p></div></div></div><div><table class=\"table table-hover\"><thead><tr><th><span class=ml10>语音</span></th><th><span class=ml10>文件名</span></th><th><span class=ml10>创建时间</span></th><th></th></tr></thead><tbody><tr ng-repeat=\"item in voiceList\"><td><div class=voice-wrapper style=margin:0px;><span class=voice-player><span class=stop ng-click=voicePlayClick(item,$event);>点击播放</span> <span class=second></span> <i class=play style=display:none;></i></span></div></td><td><span class=ml10>{{item.file_name}}</span></td><td><span class=ml10>{{item.created_at}}</span></td><td class=text-right><button ng-click=choose(item) class=\"btn btn-sm btn-primary mr10\">选取</button></td></tr></tbody></table></div><div class=\"modal-footer clearfix\"><tm-pagination class=pull-right conf=paginationConf></tm-pagination></div></div>");
$templateCache.put("assets/js/apps/common/templates/choiceimage.html","<div><div class=wb-choice-image image-space ng-model=images><a ng-if=!src class=add-image-btn href=\"javascript: void(0);\"><i class=\"fa fa-plus\"></i> 添加图片</a><div class=has-image ng-if=src><img ng-src={{_global.url.ms+src}}><div class=foot-choice>重新选择</div></div></div></div>");
$templateCache.put("assets/js/apps/common/templates/cityselect.html","<div class=\"btn-group city-select\"><button type=button class=\"btn btn-default btn-sm dropdown-toggle\" ng-click=\"ctrl.open=!ctrl.open\"><span ng-bind=ctrl.print></span><span class=caret></span></button><div class=\"city-select-drop dropdown-menu\" ng-show=ctrl.open><ul class=city-select-tab><li ng-repeat=\"item in ctrl.tab\" ng-bind=item.name ng-class={active:item.class} ng-click=ctrl.changeTab($index)></li></ul><ul class=\"city-select-panel clearfix\"><li ng-repeat=\"item in ctrl.areadata\" ng-bind=item.name ng-click=ctrl.selectTab(item) ng-class={active:item.class}></li></ul></div></div>");
$templateCache.put("assets/js/apps/common/templates/imagespace.html","<div class=modal-img-space><div class=modal-header><button type=button class=close ng-click=close() data-dismiss=modal><span aria-hidden=true>×</span><span class=sr-only>关闭</span></button><div class=clearfix><span class=\"btn btn-primary btn-sm pull-left fileinput-button\"><i class=\"fa fa-plus\"></i>上传图片 <input id=fileupload type=file name=files[] multiple></span><div class=\"input-group ml20 pull-left remote-url-box\"><input type=text placeholder=请贴入网络图片地址 name=remote_url class=\"form-control input-sm\"> <span class=input-group-btn><button class=\"btn btn-default btn-sm\">提取</button></span></div></div></div><div class=modal-body><ul class=\"image-list clearfix\"><li ng-click=choose(item) ng-class={active:item.checked} ng-repeat=\"item in products\"><img ng-src=\"{{_global.url.ms+item.url }}\"></li></ul></div><div class=\"modal-footer clearfix\"><tm-pagination conf=paginationConf></tm-pagination><button type=button ng-click=selectedImage() class=\"btn btn-success btn-sm\">确定</button></div></div>");
$templateCache.put("assets/js/apps/common/templates/model.cat.html","<div class=modal-header><button type=button class=close ng-click=cancel() data-dismiss=modal><span aria-hidden=true>×</span><span class=sr-only>关闭</span></button><h3 class=modal-title>选取链接</h3></div><div><table class=\"table table-hover\"><colgroup><col width=50%><col width=30%><col width=20%></colgroup><thead><tr><th><span class=ml10>名称</span></th><th class=text-right colspan=2><form class=\"form-inline mr10\" role=form><div class=\"input-group input-group-sm\"><input type=text style=\"width: 180px\" ng-model=keyword class=form-control placeholder=请输入标题 name=search> <a type=button ng-click=search() class=input-group-addon><i class=\"fa fa-search\"></i> 搜索</a></div></form></th></tr></thead></table><table class=\"table table-hover\" ng-repeat=\"item in data\"><tr><td style=color:#f60;width:10%><span ng-hide=!item.son><i ng-click=\"classification.show = !classification.show\" class=\"fa fa-plus\" ng-class=\"{false: \'fa fa-plus\', true: \'fa fa-minus\'}[classification.show]\" style=cursor:pointer></i></span></td><td colspan=2><span class=ml10>{{item.title || item.name}}</span></td><td class=text-right><button ng-click=selected(item) class=\"btn btn-sm btn-primary mr10\">选取</button></td></tr><tbody ng-if=item.son ng-repeat=\"items in item.son\" ng-show=classification.show style=border:none;><tr><td style=color:#f60><span ng-show=items.son>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i ng-click=\"classifications.show = !classifications.show\" class=\"fa fa-plus\" ng-class=\"{false: \'fa fa-plus\', true: \'fa fa-minus\'}[classifications.show]\" style=cursor:pointer></i></span></td><td><p e-rows=2 e-cols=10>{{items.name}}</p></td><td class=text-right><button ng-click=selected(items) class=\"btn btn-sm btn-primary mr10\">选取</button></td></tr><tr ng-show=classifications.show ng-repeat=\"aitem in items.son\"><td></td><td><p ng-model=plusClassify.sort e-rows=2 e-cols=10>{{aitem.name}}</p></td><td class=text-right><button ng-click=selected(aitem) class=\"btn btn-sm btn-primary mr10\">选取</button></td></tr></tbody></table></div><div class=\"modal-footer clearfix\"><tm-pagination class=pull-right conf=paginationConf></tm-pagination></div>");
$templateCache.put("assets/js/apps/common/templates/model.link.html","<div class=modal-header><button type=button class=close ng-click=cancel() data-dismiss=modal><span aria-hidden=true>×</span><span class=sr-only>关闭</span></button><h3 class=modal-title>选取链接</h3></div><div><table class=\"table table-hover\"><colgroup><col width=50%><col width=30%><col width=20%></colgroup><thead><tr><th><span class=ml10>名称</span></th><th class=text-right colspan=2><form class=\"form-inline mr10\" role=form><div class=\"input-group input-group-sm\"><input type=text style=\"width: 180px\" ng-model=keyword class=form-control placeholder=请输入标题 name=search> <a type=button ng-click=search() class=input-group-addon><i class=\"fa fa-search\"></i> 搜索</a></div></form></th></tr></thead><tbody><tr ng-repeat=\"item in data\"><td colspan=2><span class=ml10>{{item.title || item.name}}</span></td><td class=text-right><button ng-click=selected(item) class=\"btn btn-sm btn-primary mr10\">选取</button></td></tr></tbody></table></div><div class=\"modal-footer clearfix\"><tm-pagination class=pull-right conf=paginationConf></tm-pagination></div>");
$templateCache.put("assets/js/apps/common/templates/pagination.html","<div class=\"pager clearfix\" ng-show=\"conf.totalItems > 0\"><ul ng-if=\"conf.totalItems>conf.itemsPerPage\" class=\"pagination pull-right\"><li class=jump><input type=text ng-model=pageNo class=\"form-control input-sm\"> <button class=\"btn btn-default btn-sm\" type=button ng-click=setPage(pageNo)>跳转</button></li></ul><div ng-if=\"conf.totalItems>conf.itemsPerPage\" pagination total-items=conf.totalItems ng-model=conf.currentPage items-per-page=conf.itemsPerPage max-size=maxSize class=\"pagination pull-right\" boundary-links=true rotate=false previous-text=&lsaquo; next-text=&rsaquo; first-text=&laquo; last-text=&raquo;></div><ul class=\"pagination pull-right\"><li class=total>当前 {{(conf.currentPage-1)*conf.itemsPerPage+1}}-{{conf.currentPage*conf.itemsPerPage}} 条 共 {{ conf.totalItems }} 条</li></ul></div>");
$templateCache.put("assets/js/apps/common/templates/partner.city.select.html","<div class=city-select-list><div class=clearfix><div class=list><div class=hd><h3>选择省份</h3></div><ul><li ng-repeat=\"region in regions track by $index\" ng-class=\"{\'active\': $index == provActive}\"><div class=checkbox ng-class=\"{\'link\': region.sub}\"><input type=checkbox ng-model=regions[$index].checked ng-click=\"selectCity(\'prov\', $index)\" ng-disabled=regions[$index].disabled> <label ng-click=\"showCity(\'city\', $index)\">{{region.name}}</label> <span class=badge ng-if=\"region.child && region.child > 0\">{{region.child}}</span></div></li></ul></div><div class=list><div class=hd><h3>选择城市</h3></div><ul><li ng-repeat=\"city in citys track by $index\" ng-class=\"{\'active\': $index == cityActive}\"><div class=checkbox ng-class=\"{\'link\': city.sub}\"><input type=checkbox ng-model=regions[cityIn.prov].sub[$index].checked ng-click=\"selectCity(\'city\', $index)\" ng-disabled=regions[cityIn.prov].sub[$index].disabled> <label ng-click=\"showCity(\'dist\', cityIn.prov, $index)\">{{city.name}}</label> <span class=badge ng-if=\"city.child && city.child > 0\">{{city.child}}</span></div></li></ul></div><div class=list><div class=hd><h3>选择区域</h3></div><ul><li ng-repeat=\"dist in dists track by $index\"><div class=checkbox><label><input type=checkbox ng-model=regions[distsIn.prov].sub[distsIn.city].sub[$index].checked ng-click=\"selectCity(\'dist\', $index)\" ng-disabled=regions[distsIn.prov].sub[distsIn.city].sub[$index].disabled> {{dist.name}}</label></div></li></ul></div></div><div class=\"selected-info clearfix\"><span class=\"title pull-left\">您当前选中的有：</span> <span class=label ng-repeat=\"val in selected\">{{val.provName}} {{val.cityName}} {{val.name}} <i class=\"fa fa-remove remove\" ng-click=selectedCancel(val.id)></i></span></div></div><div class=\"modal-footer clearfix\"><button ng-click=save() type=button class=\"btn btn-success btn-sm\">确定</button> <button ng-click=cancel() type=button class=\"btn btn-default btn-sm\">取消</button></div>");
$templateCache.put("assets/js/apps/common/templates/topbar.html","<header class=header><div class=header-wrapper><h1 class=\"logo pull-left\"><a><img ng-src={{_global.url.static}}/image/logo.png></a></h1><div class=\"nav pull-left\"><ul ng-if=me.id class=\"clearfix pull-left\"><li ng-hide=_global.mall ng-if=\"checkPriv(\'shop\')\" ng-class=\"{active: $state.includes(\'shop\')}\"><a ui-sref=shop.dashboard href=/shop>商城</a></li><li ng-if=\"checkPriv(\'distributor\')&&_global.shop.supplier_level==0\" ng-class=\"{active: $state.includes(\'distributor\') }\"><a ui-sref=distributor.auction.list>供货商</a></li><li ng-if=\"checkPriv(\'supplier\')&&_global.shop.supplier_level>0\" ng-class=\"{active: $state.includes(\'supplier\') }\"><a ui-sref=supplier.auction.list>经销商</a></li><li ng-if=\"checkPriv(\'mall\')\" ng-show=_global.mall ng-class=\"{active: $state.includes(\'mall\')}\"><a ui-sref=mall.dashboard href=/mall>商超</a></li><li ng-hide=_global.mall ng-if=\"checkPriv(\'guider\')\" ng-class=\"{active: $state.includes(\'guider\')}\"><a ui-sref=guider.dashboard href=/guider>推客</a></li><li ng-hide=_global.mall ng-if=\"checkPriv(\'partner\')\" ng-class=\"{active: $state.includes(\'partner\')}\"><a ui-sref=partner.dashboard href=/guider>合伙人</a></li><li ng-hide=_global.mall ng-if=\"checkPriv(\'team\')\" ng-class=\"{active: $state.includes(\'team\')}\"><a ui-sref=team.dashboard href=/team>战队</a></li><li ng-hide=_global.mall ng-if=\"checkPriv(\'member\')\" ng-class=\"{active: $state.includes(\'member\')}\"><a ui-sref=member.info.main href=/member>会员</a></li><li ng-if=\"checkPriv(\'credit\')\" ng-class=\"{active: $state.includes(\'credit\')}\"><a ui-sref=credit.dashboard href=/credit>积分</a></li><li ng-if=\"checkPriv(\'trade\')\" ng-class=\"{active: $state.includes(\'trade\')}\"><a ui-sref=trade.dashboard href=/trade>交易</a></li><li ng-class=\"{active: $state.includes(\'magic\')}\"><a ui-sref=magic.browse href=/magic>数据中心</a></li><li ng-if=\"checkPriv(\'weixin\')\" ng-class=\"{active: $state.includes(\'weixin\')}\"><a ui-sref=weixin.dashboard href=/weixin>微信</a></li><li ng-hide=\"_global.mall || _global.shop.supplier_id\" ng-class=\"{active: $state.includes(\'app\')}\"><a ui-sref=app href=/app>APP</a></li></ul><ul class=\"clearfix pull-left\" ng-if=me.id><li><a style=\"float: left;\" href={{merchant.rrdshang_yx_url}} target=blank><img src=image/rryx.jpg style=\"width: 29px;float: left;margin-right: 5px;\">人人优选</a></li></ul></div><div class=\"user pull-right\"><div class=header-actions ng-if=\"me.id == 0\"></div><div class=user-menu ng-if=\"me.id>0\"><div class=\"item message unread\"><a ui-sref=announce.info.announce_list href=/announce/info title=新的通知><span class=\"fa fa-bell-o\"></span> <span class=num ng-if=\"message.noreadCount>0\">{{message.noreadCount}}</span></a></div><div class=\"item setting\"><a ng-if=\"checkPriv(\'setting\')\" ui-sref=merchant.info.main href=/merchant/info title={{merchant.company}}><img class=\"avatar size34 img-circle\" ng-src={{_global.url.ms+merchant.logo}}> <span>{{merchant.company}}({{me.username}})<i class=\"fa fa-chevron-down\"></i></span></a> <a ng-if=\"!checkPriv(\'setting\')\" title={{merchant.company}}><img class=\"avatar size34 img-circle\" ng-src={{_global.url.ms+merchant.logo}}> <span>{{merchant.company}}({{me.username}})<i class=\"fa fa-chevron-down\"></i></span></a><ul class=dropdown-menu><li ng-if=\"checkPriv(\'setting_merchant\')\"><a ui-sref=merchant.info.main href=/merchant>商户信息</a></li><li ng-if=\"checkPriv(\'setting_store\')\"><a ui-sref=merchant.store.main href=/merchant/store>门店管理</a></li><li ng-if=\"checkPriv(\'setting_admin\')\"><a ui-sref=merchant.admin.main href=/merchant/admin>管理员设置</a></li><li ng-if=\"checkPriv(\'setting_attachment\')\"><a ui-sref=\"merchant.attachment({type:\'all\'})\" href=/merchant/attachment/all>我的文件</a></li><li ng-if=\"checkPriv(\'setting\')\" role=separator class=divider></li><li><a ui-sref=profile.setting href=/profile>个人设置</a></li><li><a ui-sref=profile.password href=/profile/password>修改密码</a></li><li role=separator class=divider></li><li><a ng-click=logout() href=javascript:;>退出</a></li></ul></div></div></div></div></header>");
$templateCache.put("assets/js/apps/common/templates/upload.html","<span><span><span ng-transclude></span>{{load_text}}</span> <input type=file name=file multiple></span>");
$templateCache.put("assets/js/apps/common/templates/upload_imglist.html","<div><ul class=\"upload-imglist clearfix\" ui-sortable=sortableOptions ng-model=uploadimages><li ng-repeat=\"item in uploadimages track by $index\"><img ng-init=checkUrl(item) ng-src={{item.img}}> <i ng-click=remove(this) class=\"del-img fa fa-times-circle\"></i></li></ul></div>");
$templateCache.put("assets/js/apps/common/templates/upload_voice.html","<span><span><span ng-transclude></span>{{load_text}}</span> <input type=file name=file multiple></span>");}]);