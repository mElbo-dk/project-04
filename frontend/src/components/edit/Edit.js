import React from 'react'
// import EditComponent from "../edit/EditComponent"
import axios from 'axios'
import Auth from '../../lib/auth'



class Edit extends React.Component {

constructor() {
	super()
	this.state={
    update_description:''
    

	}
  this.handleChange=this.handleChange.bind(this)
  this.onSubmit = this.onSubmit.bind(this)
}

onSubmit(e) {
  e.preventDefault()

  
  axios.post(`/api/documents/${this.props.match.params.id}/update`, this.state, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
    .then(res => {
      // console.log(res.data)
      
      this.props.history.push('/Library')
    })
    .catch(err => console.log(err))
}


handleChange(e) {
this.setState({update_description:e.target.value})
}

	render() {
		console.log(this.props.match.params.id)
		return (
			<>
			{/* <section className="Edit_canvas">
			<div id="container">
					<p>{this.state.description}</p>
						<img src="../../assets/images/plan4.png" />
			</div>
			</section> */}
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
