import { useEffect, useState } from "react";
import ColecaoLivro from "../backend/dataBase/ColecaoLivro";
import Botao from "../components/Botao";
import Estante from "../components/Estante";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Livro from '../core/Livro'
import LivroRepositorio from "../core/LivroRepositorio";
import ModalLivro from "../components/ModalLivros";

export default function Home() {

  const repositorio: LivroRepositorio = new ColecaoLivro()

  const [livro, setLivro] = useState<Livro>(Livro.vazio())
  const [mostrar, setMostrar] = useState<'estante' | 'form'>('estante')
  const [livros, setLivros] = useState<Livro[]>()
  const [modalIsOpen, setIsOpen] = useState(false)

  useEffect(leitura, [])
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function leitura() {
    repositorio.leitura().then(livros => {
      setLivros(livros)
      setMostrar('estante')
    })
  }

  function livroSelect(livro: Livro) {
    setLivro(livro)
    setMostrar('form')
  }

  async function livroDel(livro: Livro) {
    await repositorio.excluir(livro)
    leitura()
  }

  function novoLivro() {
    setLivro(Livro.vazio())
    setMostrar('form')
  }

  async function salvarLivro(livro: Livro) {
    await repositorio.salvar(livro)
    leitura()
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
                  <div onClick={openModal} className="flex-1 items-start">
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
      {console.log(typeof livros === "object")}
      {typeof livros === "object" &&  
        <ModalLivro open={modalIsOpen} onCancel={closeModal} livros={livros}/>
      }
      
    </div>
  )
}
