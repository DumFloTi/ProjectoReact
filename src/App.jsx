import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [status, setStatus] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const valorIMC = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(valorIMC);

      if (valorIMC < 18.5) {
        setStatus('Abaixo do peso - Ruim');
      } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
        setStatus('Peso normal - Bom');
      } else if (valorIMC >= 25 && valorIMC < 29.9) {
        setStatus('Sobrepeso - Ruim');
      } else if (valorIMC >= 30 && valorIMC < 34.9) {
        setStatus('Obesidade Grau I - Ruim');
      } else if (valorIMC >= 35 && valorIMC < 39.9) {
        setStatus('Obesidade Grau II - Ruim');
      } else {
        setStatus('Obesidade Grau III - Muito Ruim');
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm): </label>
          <input 
            type="number" 
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input 
            type="number" 
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {imc && (
        <div>
          <h2>Resultado do IMC</h2>
          <table>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{imc}</td>
                <td>{status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div>
        <h2>Tabela de Classificação do IMC</h2>
        <table>
          <thead>
            <tr>
              <th>IMC (kg/m²)</th>
              <th>Classificação</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menor que 18.5</td>
              <td>Abaixo do peso</td>
              <td>Ruim</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Peso normal</td>
              <td>Bom</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Sobrepeso</td>
              <td>Ruim</td>
            </tr>
            <tr>
              <td>30.0 - 34.9</td>
              <td>Obesidade Grau I</td>
              <td>Ruim</td>
            </tr>
            <tr>
              <td>35.0 - 39.9</td>
              <td>Obesidade Grau II</td>
              <td>Ruim</td>
            </tr>
            <tr>
              <td>40.0 ou mais</td>
              <td>Obesidade Grau III</td>
              <td>Muito Ruim</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
