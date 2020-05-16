import React from 'react'
import classes from './Button.module.css'

const Button=(props)=>(
<button className={[classes.Button,classes[props.btntype]].join(' ')} 
        onClick={props.clicked}
>
{props.children}
</button>
)

export default Button