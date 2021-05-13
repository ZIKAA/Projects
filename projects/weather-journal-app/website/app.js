// Personal API Key for OpenWeatherMap API
const apiKey='85259c14ab8dc2072a2581428352c97e';

//get the button element from web page
const button = document.getElementById('generate');

// Event listener to add function to existing HTML DOM element
button.addEventListener('click',  async function eventHandler() {
	try{
		getWhetherInfo()
		.then((input) => {
			return serverHandler(input)		
		})
		.then((input)=>{
			updateUiData(input)
		})
	}
	catch(error)
	{
		console.log(error);
	}
});


/* Function called by event listener */

/* Function to GET Web API Data*/
async function getWhetherInfo(){
	const zipCode= document.getElementById('zip').value;
	const feels= document.getElementById('feelings').value;
	 const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`);
	const apiData = await res.json();
	// Create a new date instance dynamically with JS
	let d = new Date();
	let newDate = +d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
	const ret =  {
		date: newDate,
		feelings: feels,
		temp: apiData.main.temp};
	return ret;
}

/* Function to POST data */
/* Function to GET Project Data */
async function serverHandler(input){
	await fetch('/saveData', {
		method: 'POST',
		credentials: 'same-origin', 
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(input)  
    });
	const res= await fetch('/getData', {
		method: 'GET',
		credentials: 'same-origin',
		headers:{
			"Content-Type": 'application/json'
		}
	});
	const output = res.json();
	return output;
}

function updateUiData(input){
	 document.getElementById('temp').innerHTML = 'Temperature: ' + input.temp + ' degC';
	 document.getElementById('date').innerHTML = 'Date: ' + input.date; 
     document.getElementById('content').innerHTML = 'Feels: ' + input.feelings;
	
}