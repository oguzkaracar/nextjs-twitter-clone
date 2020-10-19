import React from "react";

// components..
import Layout from "../components/layout/";
import Tweet from "../components/tweet";

function HomePage() {
	return (
		<Layout>
			<Tweet 
				name='Oğuzhan' 
				slug='OzzyTrouble' 
				datetime={new Date("2020-08-03")}
				text={`Kariyerimde yeni bir sayfa açmak üzereyim`}
				>
					
			</Tweet>
			<Tweet 
				name='Oğuzhan' 
				slug='OzzyTrouble' 
				datetime={new Date("2020-10-20")}
				text={`deneme tweet burada 
				
sen nerdesin....`}
				>
					
			</Tweet>
			
		</Layout>
	);
}

export default HomePage;
