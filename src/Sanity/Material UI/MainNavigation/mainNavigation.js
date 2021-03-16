import { Box, Typography } from '@material-ui/core'
import React from 'react'

const MainNavigation = (props) => {
    if(props.data.length === 0) {
        console.log('------> "Main Navigation Section is not Set" <------')
        return null
    }
    console.log(props)
    const navigation = () => {
        if(props.data[0].style === 'Left') {
            return (
                <Box>
                    {
                        props.data[0].length !== 0 ?
                        <img src={props.data[0].imageElement.asset.url} height="80" style={{marginTop: 10, marginBottom: 0}}/>
                        :null
                    }
                </Box>          
            )
        }
    }
    return (
        <React.Fragment>
            {navigation()}
        </React.Fragment>
    )
}

export default MainNavigation