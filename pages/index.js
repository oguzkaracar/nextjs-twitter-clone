import useSWR from "swr";
import fetcher from "../lib/fetch";

// components..
import Layout from "../components/layout/";
import Tweet from "../components/tweet";
import Loading from "../components/loading";

function HomePage() {
	// next js useSWR hook kullanarak, rest api işlemi yaptık ve verimizi aldık...
	const { data } = useSWR("/api/tweet", fetcher);
	return (
		<Layout>
			{!data && <Loading/>}

			{data?.statuses.map((tweet) => (
				<Tweet key={tweet.id} {...tweet} />
			))}
		</Layout>
	);
}

export default HomePage;
