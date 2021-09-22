import Livro from '../core/Livro';

interface EstanteProps {
    livros: Livro[]
}

export default function Estante(props: EstanteProps){

    function renderCabecalho(){
        return (
            <tr>
                <th className='text-left p-4'>Título</th>
                <th className='text-left p-4'>Autor</th>
            </tr>
        )
    }

    function renderLivros(){
        return props.livros?.map((livro, i) => {
            return (
                <tr key={livro.id}
                    className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>
                    <td className='text-left p-4'>{livro.titulo}</td>
                    <td className='text-left p-4'>{livro.autor}</td>
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