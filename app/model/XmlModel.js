Ext.define('sencha.model.XmlModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'type', type: 'string' }
        ]
    }
});