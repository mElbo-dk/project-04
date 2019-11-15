import React from 'react'
// import EditComponent from "../edit/EditComponent"

class Edit extends React.Component {

constructor() {
	super()
	this.state={
		description:''
	}
	this.handleChange=this.handleChange.bind(this)
}

handleChange(e) {
this.setState({description:e.target.value})
}

	render() {
		console.log(this.state)
		return (
			<>
			<section className="Edit_canvas">
			<div id="container">
					<p>{this.state.description}</p>
						<img src="../../assets/images/plan4.png" />
			</div>
			</section>
			<section className="Edit_form">
				<div className="Edit_bottom"></div>
				<div className="container columns">
					<form onSubmit={this.onSubmit} className="column is-12">
						{/* <h2 className="title">Document ID</h2> */}
					

							<div className="field">
								<label className="label">Description</label>
								<div className="control">
									<input
										className="input"
										type="Edit"
										name="Edit"
										placeholder="Edit"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<button type="submit" className="button is-dark">Submit</button>
					</form>
						</div>
			</section>
			</>
		)
	}
}

export default Edit

	// < div className = "field" >
	// 	<label className="label">Document ID</label>
	// 	<div className="control">
	// 		<input
	// 			className="input"
	// 			name="Description"
	// 			placeholder="Description"
	// 			onChange={this.onChange}
	// 		/>
	// 	</div>
	// 					</div > 