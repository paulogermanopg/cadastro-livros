interface InputProps {
    texto: string
    tipo?: 'text' | 'number'
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className=" flex flex-col ">
            <label className='my-2 ml-2'>
                {props.texto}
            </label>
            {props.texto == 'Sinopse' &&
                <textarea name="" id=""  rows={5} 
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                        border border-yellow-500 rounded-lg
                        focus:outline-none bg-gray-50
                        focus:bg-white
                        px-4 py-2
                    `}>
                    
                </textarea>
            }
            {props.texto != 'Sinopse' &&
                <input 
                    type={props.tipo ?? 'text'}
                    value={props.valor}
                    readOnly={props.somenteLeitura}
                    onChange={e => props.valorMudou?.(e.target.value)}
                    className={`
                        border border-yellow-500 rounded-lg
                        focus:outline-none bg-gray-50
                        focus:bg-white
                        px-4 py-2
                    `}
                />
            }
            
        </div>
    )
}