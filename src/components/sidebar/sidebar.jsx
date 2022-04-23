import React from 'react'
import { Wrapper,Container, Logo, List, ListItem, Dis, Auth } from './sidebar.js'


const Sidebar = () => {
    return (
        <Wrapper>
            <Container>
                <Logo>
                    <img src={require('../../assets/icons/logo.png')} alt="logo" />
                    <p>shopee.</p>
                </Logo>
                <List>
                    <ListItem>
                        <img src={require('../../assets/icons/new.png')} alt="" />
                        <p>New in</p>
                    </ListItem>
                    <ListItem>
                        <img src={require('../../assets/icons/men-clothing.png')} alt="" />
                        <p>Clothing</p>
                    </ListItem>
                    <ListItem>
                        <img src={require('../../assets/icons/men-shoes.png')} alt="" />
                        <p>Shoes</p>
                    </ListItem>
                    <ListItem>
                        <img src={require('../../assets/icons/aceessories-men.png')} alt="" />
                        <p>Accessories</p>
                    </ListItem>
                </List>
            </Container>
        </Wrapper>
    )
}

export default Sidebar