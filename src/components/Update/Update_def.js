import { Component } from 'react';
import ReactGoogleSheets from 'react-google-sheets';


class DataComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {

			sheetLoaded: false,
		}

	}

	YOUR_SPREADSHEET_NAME = "foo"

	render() {
		return (
			<ReactGoogleSheets
				clientId={"test"}
				apiKey={"test"}
				spreadsheetId={"test"}
				afterLoading={() => this.setState({ sheetLoaded: true })}
			>
				{this.state.sheetLoaded ?
					<div>
						{/* Access Data */}
						{
							console.log('Your sheet data : ',
								this.props.getSheetsData(
									"fooo"
								)
							)
						}

						{/* Update Data */}
						<button onClick={() => {
							this.props.updateCell(
								'sheet02', // sheetName
								'E', // column
								13, // row
								'Apple', // value
								null, // successCallback
								(error) => {
									console.log('error', error)
								} // errorCallback
							);
						}}>update cell!</button>
					</div>
					:
					'loading...'
				}
			</ReactGoogleSheets>
		)
	}
}

export default ReactGoogleSheets.connect(DataComponent);
