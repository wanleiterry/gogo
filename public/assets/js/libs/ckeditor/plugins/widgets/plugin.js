CKEDITOR.plugins.add( 'widgets', {
    icons: 'widgets',
    init: function( editor ) {
        var h = CKEDITOR.plugins.get("widgets");
        CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(h.path + "dialogs/templates.css"));

        CKEDITOR.dialog.add( 'widgetsDialog', this.path + 'dialogs/widgets.js' );

        editor.addCommand( 'widgets', new CKEDITOR.dialogCommand( 'widgetsDialog' ) );

        editor.ui.addButton( 'Widgets', {
            label: '图文组件',
            command: 'widgets',
            toolbar: 'widgets'
        });

    }
});

CKEDITOR.config.widgets_files = [
    CKEDITOR.getUrl( 'plugins/widgets/widgets/whead.js' ),
    CKEDITOR.getUrl( 'plugins/widgets/widgets/wimage.js' ),
    CKEDITOR.getUrl( 'plugins/widgets/widgets/wcard.js' ),
    CKEDITOR.getUrl( 'plugins/widgets/widgets/wcard_head.js' ),
    CKEDITOR.getUrl( 'plugins/widgets/widgets/wother.js' )
];