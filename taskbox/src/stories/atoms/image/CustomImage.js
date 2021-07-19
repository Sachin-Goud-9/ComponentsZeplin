import React from 'react'

export default function CustomImage(props){
    return(
        <img src={props.imgPath} alt={props.imgAltText}/>
    );
}