import React,{Component} from 'react'
import ModalVideo from 'react-modal-video'

class VideoModal extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.updateFocus = this.updateFocus.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  closeModal () {
    this.setState({isOpen: false})
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({isOpen: nextProps.isOpen})
  }

  componentDidUpdate () {
    if (this.state.isOpen) {
      this.modal.focus()
    }
  }

  updateFocus (e) {
    if (e.keyCode === 9) {
      e.preventDefault()
      e.stopPropagation()
      if (this.modal === document.activeElement) {
        this.modalbtn.focus()
      } else {
        this.modal.focus()
      }
    }
  }

  getQueryString (obj) {
    let url = ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] !== null) {
          url += key + '=' + obj[key] + '&'
        }
      }
    }
    return url.substr(0, url.length - 1)
  }

  getYoutubeUrl (youtube, videoId) {
    const query = this.getQueryString(youtube)
    return '//www.youtube.com/embed/' + videoId + '?' + query
  }

 

  getVideoUrl (opt, videoId) {
      return this.getYoutubeUrl(opt.youtube, videoId)
     
  }



  render () {
    

    return (
      
        
          
             this.state.isOpen &&  <div className={this.props.classNames.modalVideo} tabIndex='-1' role='dialog'
                aria-label={this.props.aria.openMessage} onClick={this.closeModal} ref={node => {this.modal = node;}} onKeyDown={this.updateFocus}>
                    <div className={this.props.classNames.modalVideoIframeWrap} >
                      <button className={this.props.classNames.modalVideoCloseBtn} aria-label={this.props.aria.dismissBtnMessage} ref={node => {this.modalbtn = node;}} onKeyDown={this.updateFocus} />
                      <iframe width='460' height='230' src={this.getVideoUrl(this.props, this.props.videoId)} frameBorder='0' allowFullScreen={this.props.allowFullScreen} tabIndex='-1' />
                    </div>
                  
              </div>
          
        )
  }
}

VideoModal.defaultProps = {
  channel: 'youtube',
  isOpen: false,
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    list: null,
    listType: null,
    loop: 0,
    modestbranding: null,
    origin: null,
    playlist: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: 'transparent',
    theme: 'dark'
  },
  ratio: '16:9',

  allowFullScreen: true,
  animationSpeed: 300,
  classNames: {
    modalVideo: 'modal-video',
    modalVideoClose: 'modal-video-close',
    modalVideoIframeWrap: 'modal-video-movie-wrap',
    modalVideoCloseBtn: 'modal-video-close-btn'
  },
  aria: {
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
}

export default VideoModal
