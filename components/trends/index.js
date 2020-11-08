// import { useState, useEffect } from 'react';
import useSWR from 'swr';

import style from './style.module.css';
import TrendItem from './trendItem';
import fetcher from '../../lib/fetch';

function Trends({explore}) {
  // const [trends, setTrends] = useState([]);

  // // trendler api'den getirildi.
  // useEffect(() => {
  //   const fetchTrends = async () => {
  //     const res = await fetch('/api/trends');
  //     const data = await res.json();
  //     setTrends(data[0].trends);
  //   };

  //   fetchTrends();
  // }, []);

  const { data } = useSWR('/api/trends', fetcher);

  return (
    <div className={explore && style.explore}>
      {data &&
        data?.[0].trends
          .slice(0, 5)
          .map(trend => (
            <TrendItem
              key={trend.name}
              url={trend.url}
              category={`Trending in Turkey`}
              hashtag={trend.name}
              number={trend.tweet_volume}
              explore={explore}
            />
          ))}
    </div>
  );
}

export default Trends;
