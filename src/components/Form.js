import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import useCurrencie from "../hooks/useCurrencie";
import useCrypto from "../hooks/useCrypto";
import axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Error = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 15px;
    border-radius: 10px;
    background-color: rgb(200, 0, 140);
`

const Form = ({setCoin, setCryptoc}) => {

    const [cryptoList, setcryptoList] = useState([])
    const [error, setError] = useState(false)

    const currencies = [
        {code: 'USD', name: 'USD'},
        {code: 'EUR', name: 'Euro'},
        {code: 'MXN', name: 'MXN'},
        {code: 'GBP', name: 'GBP'}
    ]
    

    //use useCurrencies
    const [currencie, SelectCurrencie] = useCurrencie('Choose your badge', '', currencies)
    const [crypto, SelectCrypto] = useCrypto('Select your cryptocurrencie', '', cryptoList)

    //api call
    useEffect(()=>{
        const apiCall = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const result = await axios.get(url)
            setcryptoList(result.data.Data)
        }
        apiCall()
    }, [])

    const quoteCrypto = e => {
        e.preventDefault()

        //validate if both fields are completed

        if(currencie === '' || crypto === '') {
            setError(true)
            return
        }

        setError(false)
        setCryptoc(crypto)
        setCoin(currencie)
    }

    return ( 
       <form
        onSubmit={quoteCrypto}
       >
           {error ? <Error>Complete both fields in the form</Error> : null}
           <SelectCurrencie />
           <SelectCrypto/>
           <Button
            type="submit"
            value="calculate"
           />
       </form>
     );
}
 
export default Form;