import React from 'react'

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
						</form>
					</div>
				</section>

		</>
		)
	}
}

export default Create