import { useState, useEffect } from 'react';
import TrendItem from './trendItem';

function Trends() {
  const [trends, setTrends] = useState([]);

  // trendler api'den getirildi.
  useEffect(() => {
    const fetchTrends = async () => {
      const res = await fetch('/api/trends');
      const data = await res.json();
      setTrends(data[0].trends);
    };

    fetchTrends();
  }, []);

  return (
    <div>
      {trends &&
        trends
          .slice(0, 5)
          .map(trend => (
            <TrendItem
              key={trend.name}
              url={trend.url}
              category={`Trendin in Turkey`}
              hashtag={trend.name}
              number={trend.tweet_volume}
            />
          ))}
    </div>

    // <TrendItem category={category} hashtag={hashtag} number={number} url={url} />
  );
}

export default Trends;
