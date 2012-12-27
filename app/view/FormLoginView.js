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
            title: 'Please login',
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
            }]
		
		},
		{
        	xtype: "button",
        	ui: "action",
        	text: "Login",
        	width: 100,
        	handler:function(){ 
        		Ext.Viewport.setMasked({
            		xtype: "loadmask"
            	});
        		var username = Ext.getCmp("username-id").getValue();
        		var password = Ext.getCmp("password-id").getValue();
        		console.log(sencha.app.sencha.loginToken)
        		Ext.AjaxFixed.request({
                    url: "https://api.vietnamworks.com/users/login",
                    method: "POST",
                    headers: {"CONTENT-MD5": "4c443c7e2c515d6b4b4d693c2f63434a7773226a614846733c4c4d4348"},
                    jsonData: {
	                    "user_email": "ngmng204@yahoo.com",
	                    "user_password": "30032008"
                    },
                    
                    success: function(res){
                          //console.log(res.responseText);
                          var data = res.responseText.toString();
                          console.log(data);
                          dataDecoded = Ext.decode(data);
                          sencha.app.sencha.loginToken = dataDecoded.data.login_token;
                          if(sencha.app.secha.loginToken != null){
                        	  //successful
                        	  Ext.Viewport.setMasked(false);
                          }else{
                        	  //failed
                          }
                          
                    },
                    failure: function(err){
                          console.log(err);
                          //alert("failed")
                    }
        		});
        		
        	}
        }]
	}
});

