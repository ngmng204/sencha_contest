Ext.define('sencha.view.XmlListView', {
    extend: 'Ext.List',
    xtype: 'xmllistview',

    config: {
        title: 'Xml List View',
		iconCls: 'user',
        //grouped: true, 
        store: 'XmlLocalStore',
        onItemDisclosure: true,
        useTitleAsBackText: true,
        itemTpl: '{name}'
        
    }
});
