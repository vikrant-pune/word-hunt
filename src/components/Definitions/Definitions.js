import React from "react";

import './Definitions.css'


const Definitions = ({ word, meanings }) => {
	console.log({ meanings })
	console.log({ word })

	return (
		<div className="meanings">
			{/* <div className='singleMean'
				style={{ backgroundColor: "white", color: "black" }} > */}


			{/* audio---------------------------- */}
			{meanings[0] && word  && (
				<audio
					style={{
						backgroundColor: "#fff", borderRadius: 10,
						width: "auto"
					}}
					className = "singleAudio"
					src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
					controls
				>
					Your browser does not support the audio element.
				</audio>
			)}
			{/* audio---------------------------- */}

			{word === "" ? (
				<span className='subTitle' > Start by typing word in search </span>
			) : (
				meanings.map((mean) =>
					mean.meanings.map((item) =>
						item.definitions.map((def) => (
							// console.log({ def })
							<div
								className='singleMean'
								style={{ backgroundColor: "white", color: "black" }} >
								<b> {def.definition} </b>


								{def.example && (
									<span>
										<hr style={{
											backgroundColor: "black",
											width: "100%"
										}} />
										<b>Example : </b>
										{def.example}
									</span>)}

								{def.synonyms[0] && (
									<span>
										<b>Synonyms : </b>
										{def.synonyms.map ((s) => `${s} , `)}
									</span>)}



							</div>))
					)
				)
				)}
				{/* </div> */}

		</div >);

};

export default Definitions;