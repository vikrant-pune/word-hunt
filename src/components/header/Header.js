import { React } from 'react';
import {
	TextField, createTheme,
	ThemeProvider,
	MenuItem
} from "@material-ui/core"
import './Header.css'
import categories from '../../data/category';

const Header = ({ setCategory, category, word, setWord}) => {

	const darkTheme = createTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#fff'
			}
		},

	});


	const handleChange = (language) => {
		setCategory(language);
		setWord("")
	}


	return (
		<div className='header'>
			{/* <span className="title">  Word Hunt</span> */}
			<span className="title">{word ? word : "Word Hunt"}</span>

			<div className="inputs">
				<ThemeProvider theme={darkTheme}>
					<TextField
						className="search"
						label="Search a word"
						value={word}
						onChange ={(e) => setWord(e.target.value)}
					/>

					<TextField
						className="select"
						select
						label="Language"
						value={category}
						onChange={(e) => handleChange(e.target.value)}
						helperText="Please select your Language"
					>
						{
							categories.map(
								(option) => (
									<MenuItem key={option.label}
										value={option.label}>
										{option.value}
									</MenuItem>
								)
							)
						}
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Header