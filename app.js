const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello'
	});
})

let ride = [
		{
			id: 1,
			departure: '12pm',
			travelling: 'Aba to Port Harcourt',
			date: '12/10/2018'
		},

		{
			id: 2,
			departure: '12pm',
			travelling: 'Enugu to Delta',
			date: '12/10/2018'
		}

	]

// Fetch all ride route
app.get('/api/v1/rides', (req, res) => {
	res.status(200).json({
		ride: ride
	});
});



// Post a ride
app.post('/api/v1/rides', (req, res) =>{
	res.status(200).json({
		message: 'Ride offer created!!!'
	});
});

module.exports = app;