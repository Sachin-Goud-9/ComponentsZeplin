import React from 'react'
import { ThemeProvider, Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import customtheme from '../../../theme'
import CustomImage from '../../atoms/image/CustomImage'

export default function AQI(props){
    return(
    <ThemeProvider theme={customtheme}>
        <Grid container direction="column" justify="space-between" alignItems="center">
            <Grid item>
                 <img src={props.imgPath} alt="AQI"/>
            </Grid>
            <Grid item>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        {props.isNumber &&
                                <Typography  style={{fontWeight:"inherit", fontSize:props.countSize, color: props.color}} >
                                    {props.count}
                                </Typography>
                        }
                    </Grid>
                    <Grid item>
                        {props.isNumberTag &&
                                <Typography  style={{fontWeight:"inherit", fontSize:props.numberTagSize, color: props.color}} >
                                    {props.numberTag}
                                </Typography>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography style={{fontWeight:"500", fontSize:props.textSize, marginTop: props.textSize, color: props.color}}>
                    {props.text}
                </Typography>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}