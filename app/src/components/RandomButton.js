import React from 'react';
import './button.css';

export class RandomButton extends React.Component{
    render(){
        return(
            <button class="button" type="button" onclick="alert('?')">Useless button</button>
        )
    }
}