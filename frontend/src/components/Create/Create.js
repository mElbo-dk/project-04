import React from 'react'
import axios from 'axios'

class Create extends React.Component {

	constructor() {
		super()
		this.state={
			file: {}
		}
		this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
	}

	fileSelectedHandler(e) {
		const fileSelected = event.target.files[0]
		console.log('Before setting state', fileSelected)
		this.setState({ file: fileSelected })
		console.log('file set in state')
	}

	onSubmit(e) {
		e.preventDefault()
		axios.post('/api', this.state.data, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
			.then(res => this.props.history.push(`/library/${res.data._id}`))
			.catch(err => console.log(err))
	}


	render() {
		console.log('render area', this.state)
		return (
		<>
				<section className="Create_upload">
					<div id="container_create">
					</div>
				</section>
			
				<section className="Create_form">
					<div className="Create_bottom"></div>
					<div className="container columns">
						<form onSubmit={this.onSubmit} className="column is-12">
							<div className="field">
								<label className="label">Document ID</label>
								<div className="control">
									<input
										className="input"
										name="Description"
										placeholder="Description"
										onChange={this.onChange}
									/>
								</div>
							</div>

							<div className="field">
								<label className="label">Description</label>
								<div className="control">
									<input
										className="input"
										type="Edit"
										name="Edit"
										placeholder="Edit"
										onChange={this.onChange}
									/>
								</div>
							</div>
							<div>
									<input type="file" onChange={this.fileSelectedHandler}/>
									<button onClick={this.fileUploadHandler}>Upload</button>
								</div>
							<button type="submit" className="button is-dark is-3-columns">Submit</button>
						</form>
					</div>
				</section>

		</>
		)
	}
}

export default Create