import React from 'react'
import { Link } from 'react-router-dom'

const DocumentCard = ({id, description, drawing, updates, created_by, created_at }) => (
	<div className="column is-fullwidth">
		
		<div className="card">
			<div className="card-header">
				<Link to={`/documents/${id}`}>
				<h4 className="card-header-title">{description}</h4>
				</Link>
			</div>
			<div className="card-image">
				<figure className="image">
					<img src={`${drawing}`} />
				</figure>
				<div className="card-content">
					<h5 className="title is-6">Last update: {updates[0].update_description}</h5>
					<h6 className="title is-6">By {created_by.username}</h6>
					<h6 className="title is-6">Created at {created_at}</h6>
				</div>
			</div>
		</div>
	</div>
		
)

export default DocumentCard

