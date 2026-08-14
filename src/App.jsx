import { useState } from 'react';
import Exercicio1 from './exercicios/Exercicio1';
import Exercicio2 from './exercicios/Exercicio2';
import Exercicio3 from './exercicios/Exercicio3';
import Exercicio4 from './exercicios/Exercicio4';
import Exercicio5App from './exercicios/Exercicio5/App';

const exercicios = {
  1: Exercicio1,
  2: Exercicio2,
  3: Exercicio3,
  4: Exercicio4,
  5: Exercicio5App,
};

function App() {
  const [atual, setAtual] = useState(1);
  const ExercicioAtual = exercicios[atual];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        {Object.keys(exercicios).map((numero) => (
          <button
            key={numero}
            onClick={() => setAtual(Number(numero))}
            style={{ marginRight: '0.5rem' }}
          >
            Exercício {numero}
          </button>
        ))}
      </nav>
      <hr />
      <ExercicioAtual />
    </div>
  );
}

export default App;
