import Twit from '../../lib/twit';

export default (req, res) => {
	Twit.get("statuses/home_timeline", { count:100, }, function (err, data, response) {
		if (err) {
			return res.status(400).json({err});
		}

		res.status(200).json(JSON.stringify(data));
	});
};