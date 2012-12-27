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