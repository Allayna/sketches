
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
		<meta charset="utf-8">
		<title>Get Directions</title>

		<style>
			html, body {
				height: 100%;
				margin: 0;
				padding: 0;
			}
			#map {
				height: 100%;
				margin-right: 400px;
			}
			#floating-panel {
				position: absolute;
				top: 10px;
				left: 25%;
				z-index: 5;
				background-color: #fff;
				padding: 5px;
				border: 1px solid #999;
				text-align: center;
				font-family: 'Roboto','sans-serif';
				font-family: Arial;
				line-height: 30px;
				padding-left: 10px;
				margin-top:7px;
				font-size: 14px;
				border: 1px solid #ccc;
				box-shadow: 2px 2px 4px rgba(33, 33, 33, 0.4);
				display: none;
			}
			#right-panel {
				font-family: 'Roboto','sans-serif';
				line-height: 30px;
				padding-left: 10px;
				height: 100%;
				float: right;
				width: 390px;
				overflow: auto;
			}
			#right-panel select, #right-panel input {
				font-size: 15px;
			}
			#right-panel select {
				width: 100%;
			}
			#right-panel i {
				font-size: 12px;
			}
			@media print {
				#map {
					height: 500px;
					margin: 0;
				}
				#right-panel {
					float: none;
					width: auto;
				}
			}
		</style>
		<script language="JavaScript" src="http://www.geoplugin.net/javascript.gp" type="text/javascript"></script>
	</head>
	<body>
		<div id="floating-panel">
			<b>Start: </b><input id="start" value="Oklahoma City, OK">
			<b>Finish: </b><input id="end" value="St. Louis, MO">
			<b>Travel Type: </b>
			<select id="mode">
				<option value="DRIVING" selected="selected">Driving</option>
				<option value="BICYCLING">Bicycling</option>
				<option value="TRANSIT">Transit</option>
				<option value="WALKING">Walking</option>
			</select>
		</div>
		<div id="right-panel"></div>
		<div id="map"></div>
		<script>
			function initMap() {
				var oklahomacity = {lat: 35.47, lng: -97.52};
				var stlouis = {lat: 38.62, lng: -90.19};
				var map = new google.maps.Map(document.getElementById('map'), {
					center: oklahomacity,
					zoom: 5
				});
				var directionsDisplay = new google.maps.DirectionsRenderer({
					map: map
				});
				var request = {
					destination: stlouis,
					origin: oklahomacity,
					travelMode: 'DRIVING'
				};
				var directionsService = new google.maps.DirectionsService();
				directionsService.route(request, function(response, status) {
					if (status == 'OK') {
						directionsDisplay.setDirections(response);
					}
				});
				directionsDisplay.setPanel(document.getElementById('right-panel'));
				var control = document.getElementById('floating-panel');
				control.style.display = 'block';
				map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
				var onChangeHandler = function() {
					if (document.getElementById('start').value != "" && document.getElementById('end').value != "") {
						calculateAndDisplayRoute(directionsService, directionsDisplay);    
					};
				};
				document.getElementById('start').addEventListener('change', onChangeHandler);
				document.getElementById('end').addEventListener('change', onChangeHandler);
				document.getElementById('mode').addEventListener('change', onChangeHandler);
				document.getElementById('submit').addEventListener('click', onChangeHandler);
			}  

			function calculateAndDisplayRoute(directionsService, directionsDisplay) {
				directionsService.route({
					origin: document.getElementById('start').value,
					destination: document.getElementById('end').value,
					travelMode: document.getElementById('mode').value
				}, function(response, status) {
					if (status === 'OK') {
						directionsDisplay.setDirections(response);
					} else {
						window.alert('Directions request failed due to ' + status);
					}
				});
			}
		</script>
		<script async defer	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCN1GxLUrOJpbrHR9WRS81npziZoWSqBqg&callback=initMap">
		</script>
	</body>
</html>