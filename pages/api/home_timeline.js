import Twit from '../../lib/twit';

export default (req, res) => {
	Twit.get("statuses/home_timeline", { count:20, }, function (err, data, response) {
		if (err) {
			return res.status(400).json({message:'Bir hata oluştu!!!'});
		}

		res.status(200).json(JSON.stringify(data));
	});
};