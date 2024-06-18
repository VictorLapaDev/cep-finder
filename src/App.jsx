import React, { useState } from "react";
import axios from "axios";

export default function App(){
    const [cep, setCep] = useState("");
    const [adress, setAdress] = useState(null);
    console.log(adress)

    async function handleAddress(){
       try{
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setAdress(response.data);
        }catch(err){
            console.log(err);
        } 
    } 

    return(
        <div className="container">
            <h1>API busca CEP</h1>
            <input type="text" onChange={(e) => setCep(e.target.value)}/>
            <button onClick={handleAddress}>Busque seu CEP</button>

            {
                adress && 
                <div>
                    <p>{adress.logradouro}</p>
                    <p>{adress.ddd}</p>
                    <p>{adress.bairro}</p>
                    <p>{adress.localidade}</p>
                    <p>{adress.logradouro}</p>
                </div>
            }
            </div>
    )
}