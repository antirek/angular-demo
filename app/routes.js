module.exports = function(app) {

	var Nerd = require('./models/Nerd');

	app.all('/*', function(req, res, next) {
		var arbitraryUrls = ['partials', 'api'];
		if (arbitraryUrls.indexOf(req.url.split('/')[1]) > -1) {
			next();
		} else {
			res.render('index');
		}
	});

	app.get('/partials/*', function(req, res, next) {
		res.render('.' + req.path);
	});

	app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

	app.post('/api/nerds', function (req, res) {
		console.log('create', req.body);
		var nerd = new Nerd(req.body);
		nerd.save((err) => {
			if (err) console.log('err', err);
			res.json({result: 'ok'});
		});

	});

	app.post('/api/nerds/:id', function (req, res) {
		var id = req.params.id;
		console.log('update', id, req.body);
		Nerd.update({_id: id}, req.body, {upsert: true}, (err) => {
			if (err) console.log('err', err);
			res.json({result: 'ok'});
		});
	});


};