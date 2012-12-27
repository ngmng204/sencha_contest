Ext.define('sencha.model.XmlModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'eventID', type: 'int' },
            { name: 'name', type: 'string' }
        ]
    }
});