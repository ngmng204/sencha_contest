Ext.define("sencha.controller.DashBoardController", {
	extend: "Ext.app.Controller",
	config:{
		refs:{
			projects: "#projects",
			xmlListView: 'xmllistview',
			cardView: 'cardview'
		},
		control:{
			projects: {
				tap: "projectTap"
			},
			xmlListView: {
				itemtap: "onItemTap"
			}
		}
	},
	projectTap: function(){
		alert("A")
	},
	onItemTap: function(a,b,c,d){
		console.log(d.getData().id);
		projectStore = Ext.getStore('ProjectStore');
//		Ext.Ajax.request({
//			url: "http://jira.glandoresystems.com:8080/rest/api/2/project",
//			method: "GET",
//			success:function(res){
//				
//				var data = res.responseText.toString();				
//				dataDecoded = Ext.decode(data);				
//				
//				Ext.Array.each(dataDecoded, function(data, index, dataItSelf) {
//				    console.log(data.name);
//				    var projectData = new Object();  	
//				    projectData.key = data.key;
//				    projectData.name = data.name;
//				    projectData.self = data.self;
//				    Ext.Ajax.request({
//				    	url: projectData.self,
//				    	method: "GET",
//				    	success: function(res){
//				    		var data = res.responseText.toString();
//				    		dataDecoded = Ext.decode(data);
//				    		//alert(dataDecoded.lead.name);
//				    		projectData.lead = dataDecoded.lead.name;
//				    	}
//				    });
//				    console.log(projectData)
//				    projectModel = Ext.create('sencha.model.ProjectModel', projectData);
//					projectStore.add(projectModel);
//				});
//				
//				
//			}
//		});
//		var store = Ext.getStore("ProjectStore");
//		console.log(store);
//		var projectList = Ext.create('Ext.List', {
//		    store: 'ProjectStore',
//		    itemTpl: '{name}'
//		});
		 this.getCardView().setActiveItem(2, {type:'slide', direction:'left'});
		 Ext.getCmp("item3").setHtml("A")
	}
});