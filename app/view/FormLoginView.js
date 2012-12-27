Ext.define("sencha.view.FormLoginView", {
	extend: "Ext.form.Panel",
	xtype: "formloginview",
	id: "formloginview-id",
	config: {
		fullscreen: true,
		labelWidth:100,		
		items:[
			{
			xtype: 'fieldset',
            title: 'Welcome to JIRA Issue Tracking System',
            items: [{
            	id: "username-id",
            	xtype: "textfield",
            	label: "Username",
            	name: "username"
            },{
            	xtype: "passwordfield",
            	label: "Password",
            	name: "password",
            	id: "password-id",
            },
            {
            	xtype: "textfield",
            	label: "Server URL",
            	name: "serverurl",
            	id: "serverurl-id",
            	placeHolder: "http://host:port"
            },
            {
            	xtype: "textfield",
            	label: "Soap URL",
            	name: "soapurl",
            	id: "soapurl-id",
            	placeHolder: "http://host:port"
            }]
		
		},
		{
        	xtype: "button",
        	ui: "action",
        	text: "Login",
        	width: 100,
        	id: 'login-btn',
        	
        }]
	}
});

