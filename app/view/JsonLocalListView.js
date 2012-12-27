Ext.define('sencha.view.JsonLocalListView', {
    extend: 'Ext.List',
    xtype: 'jsonlocallistview',

    config: {
        title: 'Json Local List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'JsonLocalProxy',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{name}'
        
    }
});
