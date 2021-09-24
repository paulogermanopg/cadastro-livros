import { useState } from "react";
import Botao from "../components/Botao";
import Estante from "../components/Estante";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Livro from '../core/Livro'

export default function Home() {

  const [livro, setLivro] = useState<Livro>(Livro.vazio())
  const [mostrar, setMostrar] = useState<'estante' | 'form'>('estante')

  const livros = [
    new Livro('A Guerra dos Tronos', 'George Martin', 'qualquer uma', 580),
    new Livro('O Paradoxo do Caos', 'Paulo Germano', 'um livro massa', 534),
    new Livro('Mistério em Barbalha', 'Silva Silva', 'oxente', 210)
  ]

  function livroSelect(livro: Livro) {
    setLivro(livro)
    setMostrar('form')
  }

  function livroDel(livro: Livro) {

  }

  function novoLivro() {
    setLivro(Livro.vazio())
    setMostrar('form')
  }

  function salvarLivro(livro: Livro) {
    setMostrar('estante')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-white to-yellow-100
      text-white
    `}>
      <Layout titulo="Acervo">
        

        {mostrar == 'estante' ? (
            <div>
              <div className="flex">
                  <div className="flex-1 items-start">
                    <Botao className=" mb-4 " >Exibir livros</Botao>
                  </div>
                  <div onClick={novoLivro} className="flex items-end ">
                    <Botao className=" mb-4 " >Adicionar livro</Botao>
                  </div>
              </div>
              <Estante
                  livros={livros}
                  livroSelect={livroSelect}
                  livroDel={livroDel}></Estante>
            </div>
        ) : (
          <div>
            <Formulario 
              livro={livro}
              outroLivro={salvarLivro}
              cancelar={() => setMostrar('estante')}/>
          </div>
        )}
        

        
      </Layout>
    </div>
  )
}
