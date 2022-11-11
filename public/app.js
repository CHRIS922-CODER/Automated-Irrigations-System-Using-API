const WEATHER_API_DATA = "https://api.open-meteo.com/v1/forecast?latitude=`${lat}`&longitude=`${long}`&hourly=temperature_2m,relativehumidity_2m,rain,soil_temperature_18cm,soil_moisture_9_27cm&daily=precipitation_hours&timezone=auto";

async function getApiData(url){
	const response = await fetch(url);
	const responseData = await response.json();
      console.log(responseData)
	showData(responseData.results);
}


function showData(data){
	const {} = data;
}

// form.addEventListener("submit",(e)=>{
// 	e.preventDefault();

// 	const searchTerm = search.value;

// 	if(searchTerm){
//            getApiData(SEARCHAPI + searchTerm);
// 	}
// }

	
// getting the current location longitudes and latitudes then insert into api

// const successCallback = (position) => {
// 	var longitude = position.coords.longitude;
// 	var latitude = position.coords.latitude;
//  console.log("long: " + long + " lat: " +lat);
// 	return 	{
// 		longitude:long,
//        	latitude: latitude
// 	};
// };

// const errorCallback = (error) => {
//   console.log(error);
// };

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// function getLocationOfTheFarm(){
// 	if(navigator.geolocation){
// 		// timeout 1 minute
// 		var options = {
// 			timeout:60000
// 		};
// 		navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options)
// 	}else{
// 		alert("sorry we could not find your location");
// 	}
		// form.addEventListener("submit",(e)=>{
		// 		e.preventDefault();
			
		// 		const searchTerm = search.value;
			
		// 		if(searchTerm){
		// 	           getApiData(SEARCHAPI + searchTerm);
		// 		}
		// 	}
//};// handled by event listener
var map = L.map('map').setView([ -0.680482, 34.777061], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.getCurrentPosition(success,error);
let marker,circle;

function success(pos){
const lat =pos.coords.latitude;
const long =pos.coords.longitude;
const accuracy = pos.coords.accuracy;
if(marker){
map.removeLayer(marker);
map.removeLayer(circle);
}

marker=L.marker([lat,long]).addTo(map);
circle=L.circle([lat,long ], { radius: accuracy}).addTo(map);

map.fitBounds(circle.getBounds());
}

function error(err){
if(err.code === 1){
alert("please allow geolocation access");
}else{
alert("cannot get current location ");
}
}



