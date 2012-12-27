Ext.define('sencha.model.SimpleListModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'lastName', type: 'string' },
            { name: 'firstName', type: 'string' }
        ]
    }
});