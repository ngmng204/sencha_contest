Ext.define('sencha.model.SimpleListModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'lastName', type: 'string' },
            { name: 'firstName', type: 'string' }
        ]
    }
});
Ext.define('sencha.model.JsonLocalProxyModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ]
    }
});
Ext.define('sencha.model.JsonPModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' }
        ]
    }
});
Ext.define('sencha.model.XmlModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'eventID', type: 'int' },
            { name: 'name', type: 'string' }
        ]
    }
});
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

Ext.define("sencha.store.SimpleListStore",{
	extend: "Ext.data.Store",	
	config: {
		autoLoad: true,
		model: 'sencha.model.SimpleListModel',
		
		storeId: 'SimpleListStore',
		data: [
		        { firstName: 'Ed',    lastName: 'Spencer' },
		        { firstName: 'Tommy', lastName: 'Maintz' },
		        { firstName: 'Aaron', lastName: 'Conran' },
		        { firstName: 'Jamie', lastName: 'Avins' }
		]	
	}
})
Ext.define("sencha.store.JsonLocalProxy",{
	extend: "Ext.data.Store",
	requires: 'Ext.DateExtras',
	config: {
		autoLoad: true,
		model: 'sencha.model.JsonLocalProxyModel',
		
		storeId: 'JsonLocalProxy',
		proxy:{
			type: 'ajax',
			url: 'data/users.json',
			reader: {
				type: 'json',
				//root :"user" if json file has root item
			}
		}
	}
})
Ext.define("sencha.store.JsonPProxyStore",{
	extend: "Ext.data.Store",
	requires: 'Ext.data.proxy.JsonP',
	config: {
		autoLoad: true,
		model: 'sencha.model.JsonPModel',
		
		storeId: 'JsonPProxyStore',
		proxy:{
			type: 'jsonp',
			url: 'http://localhost:8888/githup/myblog/jsonrequest.php',
			reader: {
				type: 'json',
				root :"users" // if json file has root item
			}
		}
	}
})
Ext.define("sencha.store.XmlLocalStore",{
	extend: "Ext.data.Store",
	requires: 'Ext.data.reader.Xml',
	config: {
		autoLoad: true,
		model: 'sencha.model.XmlModel',
		
		storeId: 'XmlLocalStore',
		proxy: {
	        type: 'ajax',
	        url : 'data/users.xml',
	        reader: {
	            type: 'xml',
	            record: 'user',
	        }
	    }
	}
})

function globalVariables(){
	var res = Array();
	res.map = {
			"Lat": 51.89882,
			"Long":-8.473871
	};
	
	return res;
}
Ext.Loader.setPath({
	"Ext":"sdk/src"
})
Ext.application({
    name: 'sencha',

    requires: [
        'Ext.MessageBox'
    ],
    models: [
             'SimpleListModel',
             'JsonLocalProxyModel',
             'JsonPModel',
             'XmlModel'
    ],
    stores: [
             'SimpleListStore',
             'JsonLocalProxy',
             'JsonPProxyStore',
             'XmlLocalStore'
    ],
    views: [
            'Main' , 
            'NavigationView', 
            //'MapView',
            'SimpleListView',
            'JsonLocalListView',
            'JsonPListView',
            'XmlListView'
    ],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    /*set global variables*/
    sencha: globalVariables(),
    
    
    
    launch: function() {
    	
        // Destroy the #appLoadingIndicator element    	
        Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view
        Ext.Viewport.add(Ext.create('sencha.view.XmlListView'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

