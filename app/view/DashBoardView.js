Ext.define('sencha.view.DashBoardView', {
    extend: 'Ext.Panel',
    xtype: "dashboardview",
    url: "dashboard.html",
   
    config: {
    	//scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top'
            },
            {
            	xtype: 'panel',
            	id: "dashboard-id",
            	url: "dashboard.html",
            	
            	//html :"A"	
            }
        ]
    },
	
});