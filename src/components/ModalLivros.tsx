import React, { useState } from 'react';
import Modal from 'react-modal';
import Livro from '../core/Livro';
import Botao from './Botao'
import { IconLeft, IconRight } from './Icones';

interface ModalProps {
    livros: Livro[],
    onCancel?: ()=> void,
    open?: boolean,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '5%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(253, 211, 77, 0.9)'
  },
};

export default function ModalLivro(props: ModalProps) {

    const [indiceLivro, setIndiceLivro] = useState(0)

    function closeModal() {
        props.onCancel()
    }

    function proximo() {
        if (indiceLivro+1 < props.livros.length){
            setIndiceLivro(indiceLivro+1)
        }
    }

    function anterior() {
        if (indiceLivro-1 >= 0){
            setIndiceLivro(indiceLivro-1)
        }
    }

    return (
        <div>
        <Modal
            isOpen={props.open}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div >

                <h1 className=" px-5 py-2 text-2xl self-center ">
                    {`${props.livros.length > 0 ? props.livros[indiceLivro].titulo : ''} - ${props.livros.length > 0  ? props.livros[indiceLivro].autor : ''}`}
                </h1>

                <h2 className=" px-5 py-2 text-xl self-center ">
                    {`Nº de Páginas - ${props.livros.length > 0 ? props.livros[indiceLivro].paginas : ''}`}
                </h2>

                <hr className=" border-2 border-yellow-300 " />
                
                <div className="flex flex-col ">
                    <span className=" font-bold px-5 py-2 ">
                        Sinopse:
                    </span>
                    <span className=" px-5 py-2 text-justify">
                        {`${props.livros.length > 0  ? props.livros[indiceLivro].sinopse : ''}`}
                    </span>
                </div>

                <div className="flex">
                    <div className="flex-1 items-start">
                        <Botao onClick={closeModal} className='mt-5 flex-1 items-start'>
                            Voltar
                        </Botao>
                    </div>
                    <div className="flex items-end ">
                        <Botao onClick={anterior} className='mt-5 mx-1 '>
                            {IconLeft}
                        </Botao>
                        <Botao onClick={proximo} className='mt-5 mx-1 '>
                            {IconRight}
                        </Botao>
                    </div>
                </div>
                
                
            

            </div>
            
        </Modal>
        </div>
    );
    }
