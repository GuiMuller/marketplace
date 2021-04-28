import { useState } from 'react';
//Utilizado para implementar um componente como memória

function Home() {
    return (
        <div>
            <div>Home teste</div>
            <Contagem />
        </div>
    )
}

function Contagem() {
    const [Contagem, setContagem] = useState(1);

    function addContagem() {
        setContagem(Contagem + 1);
    }

    return (
        <div>
            <div>{Contagem}</div>
            <button onClick={addContagem}>Adicionar</button>
        </div>
    )
}

export default Home