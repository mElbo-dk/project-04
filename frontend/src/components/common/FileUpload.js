import React, { Component } from 'react'

class FileUpload extends Component {
	constructor() {
		super()

		this.state = {
			image: null,
			loading: false
		}

		this.handleUpload = this.handleUpload.bind(this)
	}

	handleUpload({ target: { files } }) {
		this.setState({ loading: true }, () => {
			const body = new FormData
			body.append('file', files[0])
			body.append('upload_preset', 'sssecztp')

			fetch('https://api.cloudinary.com/v1_1/ollyaulakh/image/upload', { method: 'POST', body, contentType: 'application/json' })
				.then(res => res.json())
				.then(res => {
					this.setState(
						{ image: res.secure_url, loading: false },
						this.props.handleChange({ target: { name: this.props.fieldName, value: res.secure_url } })
					)
				})
		})
	}

	render() {
		const { image, loading } = this.state
		return (
			<>
				{(image || loading) ?
					<div>
						{image ?
							<img src={image} alt="profile-image-preview" />
							:
							<div className="loading loading-lg"></div>
						}
					</div>
					:
					<>
						<label htmlFor="files">{this.props.labelText}</label>
						<input
							type="file"
							placeholder="Profile Picture"
							id="files"
							name="profile_image"
							onChange={this.handleUpload}
						/>
					</>
				}
			</>
		)
	}
}

export default FileUpload