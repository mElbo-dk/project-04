import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Library extends React.Component {
	constructor() {
		super()
		this.state = {
			documents: null
		}
	}

	componentDidMount() {
		axios
			.get('/api/documents')
			.then(res => this.setState({ documents: res.data }))
			.catch(err => console.log(err))
	}



	render() {

		console.log(this.state)
		const { documents } = this.state
		if (!documents) return null
		return (

			<section className="section-library">
				<div className="container">
					{documents.map(document => (
						<div key={document.id} className="document-index">
							<Link to={`/document/${document.id}`}>{document.description}</Link>
							<p> Description: {document.updates[0].update_description}</p>
							<p>By: {document.created_by.username}</p>
							<p>At: {document.created_at}</p>
							<img src={`./../../${document.drawing}`} height='50'/>
						</div>
					))}
				</div>

			</section>
		
		)
	}
}


export default Library


