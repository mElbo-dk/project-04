import React from 'react'

class EditComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: ''
		};
	}

	// componentDidMount() {
	// 	let canvasTxt = document.getElementById("canvasComponent").getContext("2d");
	// 	canvasTxt.canvas.width = canvasTxt.measureText(this.props.name).width;
	// 	canvasTxt.fillText(this.props.name, this.props.x, this.props.y);
	// 	this.setState({
	// 		img: canvasTxt.canvas.toDataURL()
	// 	});
	// }

	render() {
		// console.log(this.state)
		return (
			<div>
				<img src="../../assets/images/plan4.png" />
				
			</div>
		);
	}
}

export default EditComponent

// 	< canvas id = "canvasComponent" style = {{ display: "none" }} />
// {
// 	this.state.img.length > 0 ?
// 	<img id="imageComponent" src="../../assets/images/plan4.png" />
// 	: null
// }