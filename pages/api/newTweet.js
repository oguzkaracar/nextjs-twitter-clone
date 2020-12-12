import Twit from '../../lib/twit';

// tweet gönderme
export default (req, res) => {
  const { tweet } = req.body;

  if (!tweet) return res.status(400).json({ message: 'Tweet boş olamaz!!' });

  // statuses/update
  Twit.post('#!', { status: 'TEST ' + tweet }, function (err, data, response) {
    if (err) {
      return res.status(400).json({ message: 'Bir hata oluştu!!!' });
    }
    res.status(200).json(JSON.stringify(data));
  });
};
