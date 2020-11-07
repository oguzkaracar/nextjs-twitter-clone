import Twit from "../../lib/twit";

// Nextjs' de api klasöründeki dosyalar client tarafında gözükmüyor. Bir nevi node uygulaması gibi çalışıyor. API endpointleri gibi kullanabiliyoruz...

// tweetleri sitemize gömücez.
export default (req, res) => {
	Twit.get("search/tweets", { from: "oguzhankaracar"}, function (err, data, response) {
		if (err) {
			return res.status(400).json({message:'Bir hata oluştu!!!'});
		}

		res.status(200).json(JSON.stringify(data));
	});
};
