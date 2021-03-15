import React, { Component } from 'react'


import VideoModal from './VideoModal'

class Modal extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <VideoModal channel='youtube' isOpen={this.state.isOpen} videoId='tkzwXX53qQ8' onClose={() => this.setState({isOpen: false})} />
        <div className="row"> 
            <div className="col-lg-12 col-lg-6 col-md-12 col-12 col-sm-12">
                <div className="welcome_video">
                    <img src="./img/home/home-video.jpg" className="img-fluid" width="600"/>
                   
                  <i className="fa fa-play welcome_boton" style = {{backgroundColor:"#ee8324",fontSize:"20px", padding:"15px",color:"white"}} onClick={this.openModal}></i>
                  
                </div>
            </div>
        </div>
      
      </div>
    )
  }
}

export default Modal
