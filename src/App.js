import React, { useState } from 'react';
import './styles.css';

export default function App() {
    // eslint-disable-next-line
    const [user, setUser] = useState({
        nombre: 'Josep',
        apellidos: 'Garcia',
        id: 1,
        email: 'josegarciamanez@gmail.com'
    });

    const frutas = ['melon', 'fresa', 'limon', 'pera', 'piña'];

    const keys = Object.keys(user);

    return (
        <div className="App" style={styleGen}>
            <h1>Prácticas React </h1>
            <h2>Ejercicios Curso Universidad React</h2>
            <hr />
            <h3>Map an Array</h3>
            <ul>
                {frutas.map((fruta, i) => (
                    <li key={i}>{fruta}</li>
                ))}
            </ul>
            <hr />
            <h3>Map an Object</h3>
            <ul>
                {keys.map(key => (
                    <li key={key}>
                        <strong>{key}</strong>: {user[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Estilos en línea
const styleGen = {
    paddingTop: 50,
    background: '#4f4f4f',
    color: 'white',
    minWith: 100 + 'vw',
    minHeight: 100 + 'vh'
};
