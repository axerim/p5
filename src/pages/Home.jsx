import { useState } from "react"
import Table from "../components/Table"

const Home = ({ name }) => {
    const [counter, setCounter] = useState(0)
    let increment = 0

    const data = ['a', 'b', 'c']

    const handlerIncrement = () => {
        increment = increment + 1
        console.log(increment)
    }

    return (
        <>
            <div className="test">Home</div>
            <p>Bonjour {name}</p>
            <Table data={data} />
            <Table data={['d', 'e', 'f']} />
            <div>Combien: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Ajouter + 1 à counter</button>
            <div>Combien: {increment}</div>
            <button onClick={handlerIncrement}>Ajouter + 1 à increment</button>
        </>

    )
}

export default Home