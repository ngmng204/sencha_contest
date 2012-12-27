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