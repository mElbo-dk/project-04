import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DocumentCard from '../create/DocumentCard'

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

		
    const { documents } = this.state
    console.log(documents)
    
    

		if (!documents) return null
		return (

			<section className="section-library">
				<div className="container">
					{documents.map(document => (
						<div key={document.id} className="document-index">
							<DocumentCard {...document} />
						</div>
					))}
				</div>

			</section>
		
		)
	}
}


export default Library


