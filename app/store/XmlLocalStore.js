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