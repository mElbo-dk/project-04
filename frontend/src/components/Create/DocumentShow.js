import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
// import Auth from '../../lib/Auth'

class DocumentShow extends React.Component {
	constructor() {
		super()

		this.state = {
			document: null
		}
	}

	componentDidMount() {
		const DocumentId = this.props.match.params.id
		axios.get(`/api/documents/${DocumentId}`)
			.then(res => this.setState({ document: res.data }))
			.catch(err => console.log(err))
	}

	render() {
		if (!this.state.document) return null
		const { document } = this.state
		return (
			<>
				<div className="card">
					<div className="card-header">
						<h4 className="card-header-title">{document.description}</h4>
					</div>
					<div className="card-image">
						<figure className="image">
							<img src={`${document.drawing}`} />
						</figure>
						<div className="card-content">
              {document.updates[0] && 
              <h5 className="title is-6">Last update: {document.updates[document.updates.length - 1].update_description}</h5>
            }
							<h6 className="title is-6">Created by {document.created_by.username}</h6>
							<h6 className="title is-6">Created at {moment(document.created_at).format('MMMM Do YYYY, h:mm:ss a')}</h6>
							<Link to={`/edit/${document.id}`} className="button is-dark">
								Add changes/comments
              </Link>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default DocumentShow