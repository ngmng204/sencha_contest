Ext.define("sencha.store.XmlLocalStore",{
	extend: "Ext.data.Store",
	requires: 'Ext.data.reader.Xml',
	config: {
		autoLoad: true,
		model: 'sencha.model.XmlModel',
		
		storeId: 'XmlLocalStore',
		
		grouper: {
            groupFn: function(record) {
            	
                return record.get('type');
            },
            
        },
		proxy: {
	        type: 'ajax',
	        url : 'dashboard.xml',
	        reader: {
	            type: 'xml',
	            record: 'item',
	        }
	    }
	}
})