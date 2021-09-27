import LivroRepositorio from "../../core/LivroRepositorio";
import Livro from '../../core/Livro'
import firebase from "../config";

export default class ColecaoLivro implements LivroRepositorio {

    #conversor = {
        toFirestore(livro: Livro) {
            return {
                titulo: livro.titulo,
                autor: livro.autor,
                sinopse: livro.sinopse,
                paginas: livro.paginas,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Livro {
            const dados = snapshot?.data(options)
            return new Livro(dados.titulo, dados.autor, dados.sinopse, dados.paginas, snapshot.id)
        }
    }

    async salvar(livro: Livro): Promise<Livro> {
        if (livro?.id){
            await this.colecao().doc(livro.id).set(livro)
            return livro
        } else{
            const docRef = await this.colecao().add(livro)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(livro: Livro): Promise<void> {
        return this.colecao().doc(livro.id).delete()
    }

    async leitura(): Promise<Livro[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
       return firebase.firestore().collection('livros').withConverter(this.#conversor)
    }
}