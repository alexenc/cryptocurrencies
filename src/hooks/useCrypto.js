import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const SelectCryptoC = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCrypto = (label, stateInicial, currencies) => {

    //state de custom hook
    const [state, setState] = useState(stateInicial);

    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectCryptoC
                onChange={e => setState(e.target.value)}
                value={state}
            >
            <option value="">--Select your cryptocurrencie -</option>                
                {currencies.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </SelectCryptoC>
        </Fragment>
        
    );
    //return state
    return [state, SelectCrypto, setState];
}

export default useCrypto;