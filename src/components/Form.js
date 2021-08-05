import styled from "@emotion/styled";
import useCurrencie from "../hooks/useCurrencie";

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

const Form = () => {

    const currencies = [
        {code: 'USD', name: 'USD'},
        {code: 'EUR', name: 'Euro'},
        {code: 'MXN', name: 'MXN'},
        {code: 'GBP', name: 'GBP'}
    ]

    //use useCurrencies
    const [currencie, SelectCurrencie] = useCurrencie('Select your currencie', '', currencies)

    return ( 
       <form>

           <SelectCurrencie />
           <Button
            type="submit"
            value="calculate"
           />
       </form>
     );
}
 
export default Form;