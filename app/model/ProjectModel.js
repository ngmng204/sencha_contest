Ext.define('sencha.model.ProjectModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'key', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'lead', type: 'string' },
            { name: 'self', type: 'string' }
        ]
    }
});