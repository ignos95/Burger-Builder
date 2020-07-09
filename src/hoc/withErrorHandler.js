import React,{Component} from 'react'
import Aux from './Auxilary'
import Modal from '../components/UI/Modal/Modal'


const withErrorHandler=(WrappedComponents,axios)=>(

    class extends Component{
        state={
               error:null
              }
        componentWillMount(){
            this.reqInterceptor=axios.interceptors.request.use(
                                                               req=>{this.setState({error:null}); 
                                                                     return req},
                                                               er=>{ this.setState({error:er}) }
                                                              )
            this.resInterceptor=axios.interceptors.response.use(res=>{  if(res.config.method==='post'&&res.status===200)
                                                                         alert('ORDER RECIEVED')
                                                                        return res
                                                                },er=>{ this.setState({error:er}) }
                                                          )
        }
        
        showHandler=()=>{
            this.setState({error:null})
        }
        
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        render(){

            return <Aux>
                     <Modal show={this.state.error}
                            clicked={this.showHandler}
                           >
                        {this.state.error?this.state.error.message:null}
                     </Modal>
                     <WrappedComponents {...this.props}/>
                   </Aux>
                  
        }
    }
)

export default withErrorHandler