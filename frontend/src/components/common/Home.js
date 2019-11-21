import React from 'react'


class Home extends React.Component {
  render() {
    return (
    <>
    <hr></hr>
      <h1>Welcome to Document Version Control</h1>

      <img className='homeImage' src={require('../../assets/cabinet.jpg')} alt='file cabinet' height='300px'/>
      <hr></hr>
      </>
    )
  }
}

export default Home
