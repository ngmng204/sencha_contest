Ext.define('sencha.view.XmlListView', {
    extend: 'Ext.dataview.List',
    xtype: 'xmllistview',
    id :"xmllistview-id",
    config: {
    	store: 'XmlLocalStore',
    	grouped: true, 
        itemTpl: [
            '<div>{name}</div>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top'
            }
        ]
    }

});