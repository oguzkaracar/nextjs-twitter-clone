import useSWR from "swr";
import fetcher from "../../lib/fetch";

// components..
import Tweet from "../tweet";
import Loading from "../loading";
import Header from "../header";
import HomeTweet from "../home-tweet";
import TextTitle from "../text/TextTitle";
import IconButton from "../button/icon";
import * as Icons from '../icons';


function HomeMain() {
	// next js useSWR hook kullanarak, rest api işlemi yaptık ve verimizi aldık...
	const { data } = useSWR("/api/tweet", fetcher);

	return (
		<div>
			<Header>
				<TextTitle>Home</TextTitle>
				<IconButton>
					<Icons.TimelineProp />
				</IconButton>
			</Header>
			<HomeTweet/>

			{!data && <Loading />}

			{data?.statuses.map((tweet) => (
				<Tweet key={tweet.id} {...tweet} />
			))}
		</div>
	);
}

export default HomeMain;
