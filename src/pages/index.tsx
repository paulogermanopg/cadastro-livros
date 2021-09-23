import Estante from "../components/Estante";
import Layout from "../components/Layout";
import Livro from '../core/Livro'

export default function Home() {

  const livros = [
    new Livro('A Guerra dos Tronos', 'George Martin', 'qualquer uma', 580),
    new Livro('O Paradoxo do Caos', 'Paulo Germano', 'um livro massa', 534),
    new Livro('Mistério em Barbalha', 'Silva Silva', 'oxente', 210)
  ]

  function livroSelect(livro: Livro) {

  }

  function livroDel(livro: Livro) {

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-white to-yellow-100
      text-white
    `}>
      <Layout titulo="Acervo">
        <Estante 
          livros={livros}
          livroSelect={livroSelect}
          livroDel={livroDel}></Estante>
      </Layout>
    </div>
  )
}
