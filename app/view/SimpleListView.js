Ext.define('sencha.view.SimpleListView', {
    extend: 'Ext.List',
    xtype: 'simplelistview',

    config: {
        title: 'Simple List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'SimpleListStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{firstName}'
        
    }
});
