import Livro from '../core/Livro';
import { IconEdit, IconTrash } from './Icones';

interface EstanteProps {
    livros: Livro[]
    livroSelect?: (livro: Livro) => void
    livroDel?: (livro: Livro) => void
}

export default function Estante(props: EstanteProps){
    const showAtividades = props.livroDel || props.livroSelect

    function renderCabecalho(){
        return (
            <tr>
                <th className='text-left p-4'>Título</th>
                <th className='text-left p-4'>Autor</th>
                {showAtividades ? <th className='text-center p-2'>Atividades</th> : false}
            </tr>
        )
    }

     function renderAtividades(livro: Livro){
        return (
            <td className=' flex justify-center'>
                {props.livroSelect ? (
                    <button onClick={() => props.livroSelect?.(livro)} className={`
                        flex justify-center items-center p-2 m-1
                        text-yellow-700 rounded-full
                        hover:bg-gray-300
                    `}>
                        {IconEdit}
                    </button>
                ) : false}
                
                {props.livroDel ? (
                    <button onClick={() => props.livroDel?.(livro)} className={`
                        flex justify-center items-center p-2 m-1
                        text-red-800 rounded-full
                        hover:bg-gray-300
                    `}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderLivros(){
        return props.livros?.map((livro, i) => {
            return (
                <tr key={livro.id}
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
                    <td className='text-left p-4'>{livro.titulo}</td>
                    <td className='text-left p-4'>{livro.autor}</td>
                    {showAtividades ? renderAtividades(livro) : false}
                </tr>
            )
        })
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
                bg-gradient-to-r from-yellow-200 to-yellow-300
                text-gray-800
            `}>
                {renderCabecalho()}
            </thead>
            <tbody>
                {renderLivros()}
            </tbody>
        </table>
    )
}