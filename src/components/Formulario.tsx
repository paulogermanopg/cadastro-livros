import Input from "./Input";
import Livro from '../core/Livro'
import { useState } from "react";
import Botao from './Botao'

interface FormularioProps {
    livro: Livro
}

export default function Formulario(props: FormularioProps) {
    const id = props.livro?.id ?? null

    const [titulo, setTitulo] = useState(props.livro?.titulo ?? '')
    const [autor, setAutor] = useState(props.livro?.autor ?? '')
    const [paginas, setPaginas] = useState(props.livro?.paginas ?? 0)
    const [sinopse, setSinopse] = useState(props.livro?.sinopse ?? '')

    return (
        <div>
            {id ? (
                <Input somenteLeitura texto='Código' valor={id} />
            ) : false}
            <Input 
                texto='Título'
                valor= {titulo}   
                valorMudou= {setTitulo} 
            />
            <Input 
                texto='Autor'
                valor= {autor} 
                valorMudou= {setAutor}   
            />
            <Input 
                texto='Páginas' tipo='number'
                valor= {paginas}  
                valorMudou= {setPaginas} 
            />
            <Input 
                texto='Sinopse'
                valor= {sinopse}    
                valorMudou= {setSinopse}
            />

            <div className='flex justify-end mt-5'>
                <Botao className='m-2'
                    onClick={() => props.clienteMudou?.(new Livro(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} className='m-2'>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}