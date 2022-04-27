import React from 'react'
import { Wrapper, Container, Choices,Cart, Buttons } from './top.js'
import CustomizedSwitches from '../toggle/toggle.jsx'

const Top = () => {
    return (
        <Wrapper>
            <Container>
                {/* <Choices>
                    <p>Men</p>
                    <CustomizedSwitches />
                    <p>Women</p>
                </Choices> */}
                <Cart>
                    <img src={require('../../assets/icons/shopping-cart.png')} alt="" />
                </Cart>
                <Buttons>
                    <button className="signIn">sign in</button>
                    <button className="reg">Register</button>
                </Buttons>
            </Container>
        </Wrapper>
    )
}

export default Top