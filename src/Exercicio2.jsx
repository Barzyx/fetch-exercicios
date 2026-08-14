import { useEffect, useState } from 'react';

function Exercicio2() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    async function buscarComentarios() {
      try {
        const resposta = await fetch(
          'https://jsonplaceholder.typicode.com/comments?postId=1'
        );
        const dados = await resposta.json();
        setComentarios(dados);
      } catch (erro) {
        console.error('Erro ao buscar comentários:', erro);
      }
    }

    buscarComentarios();
  }, []);

  return (
    <div>
      <h1>Exercício 2 — Comentários do post 1</h1>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario.id}>
            {comentario.name} — {comentario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio2;
