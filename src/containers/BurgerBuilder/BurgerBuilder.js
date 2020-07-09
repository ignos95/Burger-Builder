import React from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandler'

import Aux from '../../hoc/Auxilary'
import axios from '../../axios-orders'

let INGREDIENT_PRICE=null

class BurgerBuilder extends React.Component{
    state={
            ingredients:null,
            totalPrice:0,
            purchasable:false,
            dispSummary:false,
            showSpinner:false,
            error:false
          }

    componentDidMount=()=>{
      axios.get('loadData.json') // Fetch current price from
            .then( resp=>{
                          INGREDIENT_PRICE=resp.data.CURR_PRICE
                          this.setState({ingredients:resp.data.ingredients})
                          
                          //updating total price
                          let sum=100
                          for(let itm in resp.data.ingredients)
                            sum+=resp.data.ingredients[itm]*INGREDIENT_PRICE[itm]
                          this.setState( {totalPrice: sum} )
                         } 
                 )
             .catch(()=>{this.setState({error:true})})
    }
    
    DisplaySummary=()=>{
      this.setState({dispSummary:true})
    }
    
    purchaseCancelled=()=>{
      this.setState({dispSummary:false})
    }

    purchaseContinue=()=>{              //SENDING ORDER
      this.setState({showSpinner:true})
      const order={
                    totalPrice:this.state.totalPrice,
                    ingredients: this.state.ingredients,
                    date:new Date(),
                    customer:{
                              name:'abc',
                              address:{
                                        street:'xyz rd',
                                        pin:'1234',
                                        country:'india'
                                      },
                               email:'123abc@123.com'
                             },
                    deliveryMethod:'fast'
                  }
      
      axios.post('orders-ghub.json',order) //http request
            .then((resp)=>{
                       this.setState({showSpinner:false, dispSummary:false})
                       console.log('resp:',resp)
                      }
                 )
             .catch(   ()=>{
                            this.setState({showSpinner:false})
                           }
                   )
    }

    UpdatePurchasable=(ingredients)=>{
      const sum = Object.keys(ingredients)      //['salad','meat',...]
                                .map(ingr=>{    //eg [1 ,2, 0, 4]
                                  return ingredients[ingr]
                                })
                                .reduce( (sm,el)=>{ return sm + el}, 0 ) //0 is initial valu => goes to loop and result will be a no in single element array eg: [7]
      //now sum is the no.of ingredients
      this.setState( { purchasable: sum > 0 } ) // true / false
    }
          
    AddIngredient=(type)=>{
     const count=this.state.ingredients[type] + 1
     const ingr= {...this.state.ingredients}
     ingr[type]=count

     const NewPrice = this.state.totalPrice + INGREDIENT_PRICE[type]

     this.setState( {ingredients:ingr, totalPrice: NewPrice} )

     this.UpdatePurchasable(ingr)
    }      

    RemoveIngredient=(type)=>{
       if(this.state.ingredients[type]<=0)
         {  
             return;
         }
       const count=this.state.ingredients[type] - 1
       const ingr= {...this.state.ingredients}
       ingr[type]=count
       
       const NewPrice = this.state.totalPrice - INGREDIENT_PRICE[type]

       this.setState( {ingredients:ingr, totalPrice: NewPrice} )
       
       this.UpdatePurchasable(ingr)
    }

    render(){
      
        const disabledInfo={...this.state.ingredients}
        for(let key in disabledInfo)                  //to loop through all the keys in disabledInfo
          disabledInfo[key]= disabledInfo[key] <= 0   //returns true if value less han or = 0 else false
        //result eg: {salad:tue,meat:false,bacon:false,cheese:true}

        let burger=this.state.error?<h1>ingredients can't be loaded.</h1>:<Spinner/>
        let orderSummary=null
        
        if(this.state.ingredients)
        { 
          if(this.state.showSpinner) orderSummary=<Spinner/>
          else
           orderSummary=<OrderSummary ingredients={this.state.ingredients} 
                         purchaseContinue={this.purchaseContinue}
                         purchaseCancelled={this.purchaseCancelled}
                         totalPrice={this.state.totalPrice}
           />

          burger=<Aux>
                    <Modal show={this.state.dispSummary} clicked={this.purchaseCancelled}>
                     {orderSummary}
                    </Modal>
                   
                    <Burger ingredients={this.state.ingredients}/>
                   
                    <BuildControls AddIngr={this.AddIngredient} 
                                   RemoveIngr={this.RemoveIngredient}
                                   DisabledInfo={disabledInfo}
                                   Price={this.state.totalPrice}
                                   Count={this.state.ingredients}
                                   Purchasable={this.state.purchasable}
                                   DispSummary={this.DisplaySummary}
                    />
                 </Aux>
        }

        return(
            <Aux>
              {burger}
            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios) 