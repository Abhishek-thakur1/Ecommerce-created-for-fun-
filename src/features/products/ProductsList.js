import React from "react";
import { useSelector } from "react-redux"
import styled from'styled-components'
import Card from '../../components/card/Card.jsx'


export const ProductsList = () => {

    // styles...
    const Wrapper = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
    `


    const products = useSelector(state => state.products)

    const renderedProducts = products.map(product => (
        <Card props={ product} key={product.id}/>
    ))

    return (
        <Wrapper>
            {renderedProducts}
        </Wrapper>
    )

}