Ext.define('sencha.view.MapView', {

	extend: 'Ext.Container',
	requires: 'Ext.Map',
	
	xtype: 'mapview',
	id: 'mapview-id',
	config: {

		title: 'Map',
		iconCls: 'locate',
		layout: 'fit',

		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Map View',
			}
		]
	},
	initialize: function() {
		var mapLatLong = sencha.app.sencha.map;				
		var position = new google.maps.LatLng(mapLatLong.Lat, mapLatLong.Long), 			
			map, marker;
		this.callParent();

		map = this.add({
			xtype: 'map',
			mapOptions: {
                zoomControl: true,
				center: position,
				zoom: 14,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		});
		marker = new google.maps.Marker({
	        position: position,
	        map: map.getMap(),
	        visible: true
	    });

	    google.maps.event.addListener(marker, 'click', function() {
	        infoWindow.open(map, marker);
	    });
	}
});
