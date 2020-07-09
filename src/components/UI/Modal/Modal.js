import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxilary'
import Backdrop from '../Backdrop/Backdrop'


class Modal extends Component{

  shouldComponentUpdate(nxtProps){
    return (this.props.show!==nxtProps.show || this.props.children!==nxtProps.children)
  }

  render(){
   return(
          <Aux>
            <Backdrop show={this.props.show} clicked={this.props.clicked}/>
            <div className={classes.Modal}
                 style={{
                         transform:this.props.show?'translateY(0)':'translateY(-300%)', // transform:tenslate is used so the animation css works***[vh is viewport height]
                         opacity:this.props.show?'1':'0'
                        }}
            >
             {this.props.children}
            </div>
          </Aux>
         )
  }
}

export default Modal