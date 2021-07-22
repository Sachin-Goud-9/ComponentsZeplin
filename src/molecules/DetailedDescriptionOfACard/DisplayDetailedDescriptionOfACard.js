import { Card, CardContent, Typography } from "@material-ui/core"
import React from "react"
import descriptionOfAJob from './DescriptionOfAJob'

export function DisplayDetailedDescriptionOfACard(props){
    return(
        <div>
            <Card>
                <CardContent>
                    <Typography>
                        Description
                    </Typography>
                    <Typography>
                        {descriptionOfAJob[props.id].description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}