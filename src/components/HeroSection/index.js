import React, { useState } from 'react'
// pexels.com for free stock videos
import Icon5 from '../../images/b2.jpeg'
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={Icon5}/>
            </HeroBg>
            <HeroContent>
                <HeroH1> CHARTERED ACCOUNTANTS </HeroH1>
                <HeroP> 
                    We are here to service you. Please signup for any accounts related service we will reach you
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                        Get started 
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection