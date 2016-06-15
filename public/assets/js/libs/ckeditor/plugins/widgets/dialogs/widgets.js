CKEDITOR.dialog.add( 'widgetsDialog', function( editor ) {
    var config = editor.config;

    function renderWidgetsList( containers, widgetsDefinitions ) {
        for ( var i = 0, totalDefs = widgetsDefinitions.length; i < totalDefs; i++ ) {
            var definition = CKEDITOR.getTemplates( widgetsDefinitions[ i ] ),
                name = definition.name,
                widgets = definition.widgets,
                count = widgets.length;

            for ( var j = 0; j < count; j++ ) {
                var widget = widgets[ j ],
                    item = createWidgetItem( widget );
                item.setAttribute( 'aria-posinset', j + 1 );
                item.setAttribute( 'aria-setsize', count );
                containers[name].append( item );
            }
        }
    }

    function createWidgetItem( widget ) {
        var item = CKEDITOR.dom.element.createFromHtml( '<div class="cke_widget_item"></div>' );
        item.setHtml( widget.html );
        item.on( 'click', function() {
            insertWidget( widget.html );
        } );

        return item;
    }

    function insertWidget( html ) {
        var dialog = CKEDITOR.dialog.getCurrent();
        editor.setData((editor.getData()+html));
        dialog.hide();
    }

    return {
        title: '图文组件',
        minWidth: 334,
        minHeight: 300,
        contents: [
            {
                id: 'tab-whead',
                label: '标题',
                title: '标题',
                elements: [ {
                    type: 'vbox',
                    children: [
                        {
                            id: 'whead-list',
                            type: 'html',
                            html: '加载中'
                        }
                    ]
                } ]
            },
            {
                id: 'tab-wimage',
                label: '图片',
                title: '图片',
                elements: [ {
                    type: 'vbox',
                    children: [
                        {
                            id: 'wimage-list',
                            type: 'html',
                            html: '加载中'
                        }
                    ]
                } ]
            },
            {
                id: 'tab-wcard',
                label: '卡片',
                title: '卡片',
                elements: [ {
                    type: 'vbox',
                    children: [
                        {
                            id: 'wcard-list',
                            type: 'html',
                            html: '加载中'
                        }
                    ]
                } ]
            },
            {
                id: 'tab-wcard-head',
                label: '标题卡片',
                title: '标题卡片',
                elements: [ {
                    type: 'vbox',
                    children: [
                        {
                            id: 'wcard-head-list',
                            type: 'html',
                            html: '加载中'
                        }
                    ]
                } ]
            },
            {
                id: 'tab-wother',
                label: '其他',
                title: '其他',
                elements: [ {
                    type: 'vbox',
                    children: [
                        {
                            id: 'wother-list',
                            type: 'html',
                            html: '加载中'
                        }
                    ]
                } ]
            }
        ],

        onShow: function() {
            var widgetsListField_whead = this.getContentElement( 'tab-whead', 'whead-list')
                ,widgetsListField_wimage = this.getContentElement( 'tab-wimage', 'wimage-list')
                ,widgetsListField_wcard = this.getContentElement( 'tab-wcard', 'wcard-list')
                ,widgetsListField_wcard_head = this.getContentElement( 'tab-wcard-head', 'wcard-head-list')
                ,widgetsListField_wother = this.getContentElement( 'tab-wother', 'wother-list');

            widgetsListField_whead.getElement().setHtml('');
            widgetsListField_wimage.getElement().setHtml('');
            widgetsListField_wcard.getElement().setHtml('');
            widgetsListField_wcard_head.getElement().setHtml('');
            widgetsListField_wother.getElement().setHtml('');

            listContainers = {
                whead: widgetsListField_whead.getElement(),
                wimage: widgetsListField_wimage.getElement(),
                wcard: widgetsListField_wcard.getElement(),
                wcard_head: widgetsListField_wcard_head.getElement(),
                wother: widgetsListField_wother.getElement()
            };

            CKEDITOR.loadTemplates( config.widgets_files, function() {
                var widgets = ['whead', 'wimage', 'wcard', 'wcard_head', 'wother'];
                renderWidgetsList( listContainers, widgets );
            } );
        },

        buttons: [ CKEDITOR.dialog.cancelButton ]

    };
});