Ext.define('sencha.view.ProjectList', {
    extend: 'Ext.dataview.List',
    xtype: 'projectlist',
    config: {
    	store: 'ProjectStore',
    	//grouped: true, 
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