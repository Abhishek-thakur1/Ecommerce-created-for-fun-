import React from 'react'
import Slides from '../slides/slide.jsx'
import {
    Wrapper,
    Container,
    SlideShow
} from "./DisplayHome.js";
import {s1, s2, s3, s4,s5} from "../../assets/banner"

const DisplayHome = () => {
    return (
        <Wrapper>
            <Container>
                <SlideShow>
                    <Slides Slides={[ s1, s2, s3, s4, s5]}/>
                </SlideShow>
            </Container>
        </Wrapper>
        
    )
}

export default DisplayHome