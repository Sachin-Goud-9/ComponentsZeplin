import React from 'react'


const MyImage = ({src,height,width,alt,styles,...rest}) => {
    return (
        <img src={src} height={height} width={width} alt={alt} style={styles} {...rest} /> 
    );
}

export default MyImage
