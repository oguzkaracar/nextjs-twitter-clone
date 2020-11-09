import useSWR from 'swr';
import fetcher from '../../lib/fetch';

// components..
import Tweet from '../tweet';
import Loading from '../loading';
import Header from '../header';
import HomeTweet from '../home-tweet';
import TextTitle from '../text/TextTitle';
import IconButton from '../button/icon';
import * as Icons from '../icons';

function HomeMain() {
  // next js useSWR hook kullanarak, rest api işlemi yaptık ve verimizi aldık...
  const { data } = useSWR('/api/home_timeline', fetcher); // tweetler yerine timeline çekilecek...
  return (
    <div>
      <Header>
        <TextTitle>Home</TextTitle>
        <IconButton>
          <Icons.TimelineProp />
        </IconButton>
      </Header>
      <HomeTweet />

      {!data && <Loading />}
      {/* Data rate limit kısıtlaması ile ilgili bişeyler yapılacak! */}
      {data ? (
        data.err ? (
          <p>{data.err.message} -- Twitter "statuses/home_timeline" API'ndan kaynaklanan bir sorun oluştu. 15 dk içinde 15 request yapma kısıtlaması bulunmaktadır... Lütfen daha sonra deneyiniz...</p>
        ) : (
          data.map(tweet => <Tweet key={tweet.id} {...tweet} />)
        )
      ) : (
        ''
      )}
    </div>
  );
}

export default HomeMain;
