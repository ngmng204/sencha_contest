Ext.define('sencha.view.NavigationView', {
    extend: 'Ext.navigation.View',
    xtype: 'navigationview',
    id: 'navigationview-id',
    config: {
        iconCls: 'home',
        title: 'Navigation View',
        defaults: {
            styleHtmlContent: true
        },
        navigationBar: {
        	id: 'navigation-bar-id',
        	ui: 'sencha',
            
            text: "A",
        	items: [{
        		xtype: "button",
        		id: "share-button",
        		//text: "Share",
        		align: 'right',
        		hidden: true,     
        	}]
        },
        items: [{
        	xtype: 'simplelistview',
        	//html: 'test'
        }]
    }
});
