import React from 'react'
import axios from 'axios'
import FileUpload from '../common/FileUpload'
import Auth from '../../lib/auth'

class Create extends React.Component {

	constructor() {
		super()
		this.state={
			data: {}
		}
		this.handleChange = this.handleChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()
		console.log(this.state.data)
		axios.post('/api/documents', this.state.data, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
			.then(res => this.props.history.push(`/library/${res.data.id}`))
			.catch(err => console.log(err))
	}

	handleChange({ target: { name, value, type, checked } }){
		this.setState(({ data }) => ({
			data: { ...data, [name]: type === 'checkbox' ? checked : value }
		}))
	}

	render() {
		console.log('render area', this.state)
		return (
		<>
				<section className="Create_upload">
					<div id="container_create" >
					</div>
				</section>
			
				<section className="Create_form is-half">
					<div className="Create_bottom"></div>
					<div className="container columns">
						<form onSubmit={this.onSubmit} className="column is-8">
							<div className="field">
								<label className="label">Create your Document</label>
								<div className="control">
									<input
										className="input"
										name="description"
										placeholder="Description"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div>
									<FileUpload 
										fieldName="drawing"
										handleChange={this.handleChange}
										labelText="Select your file"
									/>
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