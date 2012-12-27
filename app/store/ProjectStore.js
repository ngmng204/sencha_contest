Ext.define("sencha.store.ProjectStore",{
	extend: "Ext.data.Store",
	requires: 'Ext.DateExtras',
	config: {
		autoLoad: true,
		model: 'sencha.model.ProjectModel',
		grouper: {
			//sortProperty: 'date',
			groupFn: function(record){
				return record.get('key');
			}
		},
		storeId: 'ProjectStore'

	}
})