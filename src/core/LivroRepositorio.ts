import Livro from './Livro'

export default interface LivroRepositorio {
    salvar(livro:Livro): Promise<Livro>
    excluir(livro:Livro): Promise<void>
    leitura(): Promise<Livro[]>
}