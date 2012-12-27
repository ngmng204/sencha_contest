Ext.define("sencha.controller.LoginController", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			 loginButton: '#login-btn',
			 cardView: "cardview"
		},
		control: {
			loginButton:{
				tap: "onLoginButtonTap"
				
			}
		}
	},
	onLoginButtonTap: function(){
		
		//alert("a");
		Ext.Viewport.setMasked({
    		xtype: "loadmask"
    	});
		var username = Ext.getCmp("username-id").getValue();
		var password = Ext.getCmp("password-id").getValue();
		console.log(sencha.app.sencha.loginToken);
		var me = this;
//		Ext.AjaxFixed.request({
//            url: "http://jira.glandoresystems.com:8080/rest/auth/1/session",
//            method: "POST",
//            headers: {"Content-Type": "application/json"},
//            jsonData: {
//                "username": "ngan.nguyen",
//                "password": "hello!"
//            },
//            
//            success: function(res){
//                  //console.log(res.responseText);
//                  var data = res.responseText.toString();
//                  console.log(data);
//                  alert(data)
//                  dataDecoded = Ext.decode(data);
//                  sencha.app.sencha.loginToken = dataDecoded.session.value;
//                  alert(sencha.app.sencha.loginToken);
//                  Ext.Viewport.setActiveItem(2);
//                  if(sencha.app.sencha.loginToken != null){
//                	  //successful
//                	  Ext.Viewport.setMasked(false);
//                	  me.getCardView().setActiveItem(1, {type:'slide', direction:'left'});
//                  }else{
//                	  //failed
//                  }
//                  
//            },
//            failure: function(err){
//                  console.log(err);
//                  //alert("failed")
//            }
//		});
//		Ext.Ajax.request({
//			url: "dashboard.html",
//			method: "GET",
//			success: function(res){				
//				console.log(res.responseText);
//				sencha.app.sencha.dashBoardContent = res.responseText;				
//				//Ext.getCmp("dashboard-id").setHtml(sencha.app.sencha.dashBoardContent)
//			}
//		 });
//		Ext.Viewport.setMasked(false);
		//console.log(sencha.app.sencha.dashboardContent);
		Ext.Viewport.setMasked(false);
		this.getCardView().setActiveItem(1, {type:'slide', direction:'left'});
		
	},
	init: function(){
		
		 
	}
});