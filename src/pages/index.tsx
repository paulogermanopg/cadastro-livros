import Botao from "../components/Botao";
import Estante from "../components/Estante";
import Formulario from "../components/Formulario";
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
        <div className="flex">
            <div className="flex-1 items-start">
              <Botao className=" mb-4 " >Exibir livros</Botao>
            </div>
            <div className="flex items-end ">
              <Botao className=" mb-4 " >Adicionar livro</Botao>
            </div>
        </div>

        {/* <Estante
          livros={livros}
          livroSelect={livroSelect}
          livroDel={livroDel}></Estante> */}

        <Formulario livro={livros[1]}/>
      </Layout>
    </div>
  )
}
