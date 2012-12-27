Ext.define('sencha.view.JsonPListView', {
    extend: 'Ext.List',
    xtype: 'jsonplistview',

    config: {
        title: 'JsonP List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'JsonPProxyStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{name}'
        
    }
});
