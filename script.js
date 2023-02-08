const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8502031aamsh391fa0b633cf356p192eebjsn6809f3689eb0',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

var tempLat, tempLon;

function setCoord(){
	if (document.getElementById('inputlatlon') != null) {
		userinput = document.getElementById("inputlatlon").value;
		console.log(`Success : ${userinput}`)
		const myCoord = userinput.split(",")
		tempLat = myCoord[0]
		tempLon = myCoord[1]
		askAPI(tempLat, tempLon)
		document.getElementById('inputlatlon').value = "";
		const myHiddenEl = document.getElementById('tableau')
		myHiddenEl.classList.remove('hidden')
	}
	else{
		console.log("Failed to get user input !")
	}
}

function askAPI(apiLat, apiLon){
	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${apiLat}%2C${apiLon}`, options)
	.then(response => response.json())
	.then(json => {
		const location = json.location
			
		const city = location.name
		document.getElementById("city").innerHTML = city;
		const country = location.country
		document.getElementById("country").innerHTML = country;
		const region = location.region
		document.getElementById("region").innerHTML = region;
		const lat = location.lat
		document.getElementById("lat").innerHTML = lat;
		const lon = location.lon
		document.getElementById("lon").innerHTML = lon;
		const tz_id = location.tz_id
		document.getElementById("tz_id").innerHTML = tz_id;
		const localtime = location.localtime
		document.getElementById("localtime").innerHTML = localtime;
		//
		const current = json.current

		const last_updated = current.last_updated
		document.getElementById("last_updated").innerHTML = last_updated;
		const temp_c = current.temp_c
		document.getElementById("temp_c").innerHTML = temp_c;
		const temp_f = current.temp_f
		document.getElementById("temp_f").innerHTML = temp_f;
		const humidity = current.humidity
		document.getElementById("humidity").innerHTML = humidity;

		const condition = current.condition

		const icon = condition.icon
		const newicon = icon.replace("//","https://")
		document.getElementById("weatherimg").src=newicon;
		}
	)
}

