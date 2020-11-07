// https://api.twitter.com/1.1/trends/place.json

import Twit from "../../lib/twit";

const params = {
  id: 23424969, //  ==> Turkey id. (WOEID). twitter trends data will fetch.
};

export default (req, res) => {
  Twit.get('trends/place', params, function (err, data, response) {
    if (err) {
      return res.status(400).json({ message: 'Bir hata oluştu!!!' });
    }
    res.status(200).json(JSON.stringify(data));
  });
};
