Ext.define("sencha.view.CardView", {
	extend: "Ext.Panel",
	xtype: "cardview",
	id: "cardview-id",
	config: {
		layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left'
            }
        },
        items: [
            
            {
                xtype: 'formloginview'
            },
            {
                xtype: 'xmllistview',  
               // id: "xmllistview-id"
               // html: "dashboardview"
            },
            {
                xtype: 'panel',
                id: 'item3'
            }
        ]
    }

	
});