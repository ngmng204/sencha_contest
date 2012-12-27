
function globalVariables(){
	var res = Array();
	res.map = {
			"Lat": 51.89882,
			"Long":-8.473871
	};
	res.loginToken = null;
	return res;
}
Ext.Loader.setPath({
	"Ext":"sdk/src"
})
Ext.application({
    name: 'sencha',

    requires: [
        'Ext.MessageBox',
        'Ext.AjaxFixed'
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
            'XmlListView',
            
            'FormLoginView',
            //'FormLoginFrame'
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
        Ext.Viewport.add(Ext.create('sencha.view.FormLoginView'));
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
