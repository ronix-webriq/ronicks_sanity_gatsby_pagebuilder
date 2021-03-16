import { Box, Button, Link, Typography } from '@material-ui/core'
import React from 'react'

export default function Hero(props) {
    // console.log(props)
    if(props.data.length === 0) {
        console.log('------> "Hero Section is not Set" <------')
        return null
    }

    const navigate = (link) => {
        alert(link)
    }
    
    const HeroSection = () => {
        if(props.data.page_sections.section[0].imageStyle === 'Background Image') {
            return (
                <div style={{backgroundImage: `url(${props.data.page_sections.section[0].imageElement.asset.url})`, backgroundSize: 'cover', height: '80vh'}}>
                    <Box padding={10}>
                        <Typography variant={props.data.page_sections.section[1].headingStyle} align={String(props.data.page_sections.section[1].style).toLocaleLowerCase()} style={{color: 'whitesmoke'}}>
                            {props.data.page_sections.section[1].displayTitle}
                        </Typography>
                        <Box marginTop={2}>
                            <Typography variant='h6' align={String(props.data.page_sections.section[2].style).toLocaleLowerCase()} style={{color: 'whitesmoke'}}>
                                {props.data.page_sections.section[2].displayParagraph}
                            </Typography>
                        </Box>
                        <Box marginTop={8}>
                            <Typography align={String(props.data.page_sections.section[3].style).toLocaleLowerCase()}>                              
                                <Button style={{backgroundColor: props.data.page_sections.section[3].buttonColor}} onClick={() => navigate(props.data.page_sections.section[3].btnLink.slug.current)}>
                                    {props.data.page_sections.section[3].buttonName}
                                </Button>                                
                            </Typography>
                        </Box>
                    </Box>
                </div>
            )
        }
        
    }

    return (
        <>
            {HeroSection()}
        </>
    )
}
