Ext.Loader.setPath({
	"Ext": "sdk/src"
})
Ext.define("sencha.view.Main", {
    extend: 'Ext.TabPanel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBar: {
        	docked: "bottom"
        },
        items:[
               { xtype: 'navigationview'},
               { xtype: 'mapview'},
               { xtype: 'simplelistview'},
               //{ xtype: 'horizontalview'},
               //{ xype: 'veritcalview'}
        ]
        
    }
});
