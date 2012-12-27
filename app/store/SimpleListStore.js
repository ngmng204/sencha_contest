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