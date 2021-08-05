import React from 'react';
import styled from '@emotion/styled';

const Price = styled.p`
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.3rem;
`

const Num = styled.span`
    color: wheat;
    font-size: 1.4rem;
`
const NumH = styled.span`
    color: green;
    font-size: 1.4rem;
`
const NumL = styled.span`
    color: red;
    font-size: 1.4rem;
`


const Quote = ({result}) => {

    if(Object.keys(result).length === 0) return null

    console.log(result)
    return ( 
        <div>
            <Price>
                The price is:<br/> 
                <Num>{result.PRICE}</Num>            
            </Price>
            <Price>The lowest price in the day was:<br/>  <NumL>{result.LOWDAY}</NumL></Price>
            <Price>The highest price in the day was:<br/>  <NumH>{result.HIGHDAY}</NumH></Price>
        </div>

     );
}
 
export default Quote;