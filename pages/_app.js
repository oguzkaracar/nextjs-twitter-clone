import { useEffect, useState } from "react";
import StoreContext from "../store";
import "../styles/app.css";

export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		// useEffect aslında ssr de düzgün bir şekilde çalışmaz. useLayoutEffect'de nextjs' de uyarı veriyor.. alternatif çözümlere bakılabilir...

		const theme = localStorage.getItem("THEME") || "light";
		setTheme(theme);

		// if (theme) {
		// 	return setTheme(theme);
		// }

		// return setTheme("light");
	}, []);

	useEffect(() => {
		if (!theme) return;
		const $html = document.querySelector("html");
		$html.setAttribute("class", theme);
	}, [theme]);

	const changeTheme = (theme) => {
		setTheme(theme);
		localStorage.setItem("THEME", theme);
	};

	return (
		<StoreContext.Provider value={{ theme, changeTheme }}>
			<Component {...pageProps} />
		</StoreContext.Provider>
	);
}
