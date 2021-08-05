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

const SelectC = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useCurrencie = (label, stateInicial, currencies) => {

    //state de custom hook
    const [state, setState] = useState(stateInicial);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectC
                onChange={e => setState(e.target.value)}
                value={state}
            >
            <option value="">--Select your currencie -</option>                
                {currencies.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectC>
        </Fragment>
        
    );
    //return state
    return [state, Select, setState];
}

export default useCurrencie;