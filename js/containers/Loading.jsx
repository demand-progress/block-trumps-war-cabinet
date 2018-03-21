import React, { Component } from 'react'

class Loading extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    let processing = null

    if(this.props.process){
      processing = (
        <span>Sending</span>
      )
    } else {
      processing = (
        <span>Calling</span>
      )
    }

    return (
      <div>
        <span className="Loader">
          <div className="Loader-indicator" >
              {processing}
              <span className="Loader-ellipsis" >
                <span className="Loader-ellipsisDot">.</span>
                <span className="Loader-ellipsisDot">.</span>
                <span className="Loader-ellipsisDot">.</span>
              </span>    
          </div>
        </span>
      </div>
    )
  }
}

export default Loading