import React, { useContext, } from "react";
import StoreContext from "../store";

import styles from "./theme-select.module.css";



const THEME ={
    light:'Light',
    dim:'Dim',
    dark:'Dark'
}


const ThemeSelect = () => {
    
    const {theme, changeTheme} = useContext(StoreContext);
 
	return (
		<div className={styles.container}>
			{["light", "dim", "dark"].map((appTheme) => (
				<label className={styles.label} key={appTheme}>
					<input
						type="radio"
						value={appTheme}
						name='theme'
						checked={appTheme === theme}
						onChange={(e) => changeTheme(e.target.value)}
					/>
					<span>{THEME[appTheme]}</span>
				</label>
			))}
		</div>
	);
};

export default ThemeSelect;
