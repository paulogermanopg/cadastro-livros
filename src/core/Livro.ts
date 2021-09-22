export default class Livro {
    #id: string
    #titulo: string
    #autor: string
    #sinopse: string
    #paginas: number

    constructor(
        titulo: string, autor: string, sinopse: string, 
        paginas: number, id: string = null
        ) {
        this.#titulo = titulo
        this.#autor = autor
        this.#sinopse = sinopse
        this.#paginas = paginas
        this.#id = id
    }

    static vazio() {
        return new Livro('', '', '', 0)
    }

    get id() {
        return this.#id
    }

    get titulo() {
        return this.#titulo
    }

    get autor() {
        return this.#autor
    }

    get sinopse() {
        return this.#sinopse
    }

    get paginas() {
        return this.#autor
    }

}