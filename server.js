const express = require('express');
const app = express();
const port = 3000;

let controllerData = require('./controller.json');

app.use('/public', express.static(__dirname + ':3000/public'));

app.get('/data', (req, res) => {
	res.sendFile(__dirname + '/data.html');
});

app.get('/edit', (req, res) => {
	res.sendFile(__dirname + '/edit.html');
})

app.get('/api', (req, res) => {
	res.json({
		sucess:true,
		controllerData,
	});
});


app.get('/api/get/users', (req, res) => {
	const users_data = controllerData;

	res.json({
		users_data,
	});
})

app.get('/api/get/users/:user_index', (req, res) => {
	const user_index = req.params.user_index;
	const user_data = controllerData[user_index];

	res.json({
		user_data,
	});
});

app.get('/api/post/users/:user_name', (req, res) => {
	const user_name = req.params.user_name;
	const user_data = {
		name: user_name,
		sp: 0.0,
		pv: 0.0,
		mv: 0.0,
	};
	controllerData.push(user_data);

	res.json({
		user_data,
	});
});

app.get('/api/put/users/:user_index/:user_name/:sp/:pv/:mv', (req, res) => {
	const user_index = req.params.user_index;
	const user_data = {
		name: req.params.user_name,
		sp: Number(req.params.sp),
		pv: Number(req.params.pv),
		mv: Number(req.params.mv),
	};

	const new_user_data = user_data;
	controllerData[user_index] = new_user_data;

	res.json({
		user_data,
	});
});


app.get('/api/patch/users/:user_index/:key/:value', (req, res) => {
	const user_index = req.params.user_index;
	const key = req.params.key;
	const value = key !== 'name' ? Number(req.params.value) : req.params.value;

	const user_data = controllerData[user_index];
	user_data[key] = value;
	controllerData[user_index] = user_data;

	res.json({
		user_data,
	});
});

app.get('/api/delete/users/:user_index', (req, res) => {
	const user_index = req.params.user_index;

	const users_data = controllerData;
	users_data[user_index] = {},
	controllerData = users_data;

	res.json({
		users_data,
	})
});

app.listen(port, () => {
	console.log(`server is listening at localhost:${port}`);
});
