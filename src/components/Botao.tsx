interface BotaoProps {
    children: any
    className: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} 
        className={`
        bg-gradient-to-r from-yellow-200 to-yellow-400
        text-gray-800 px-4
        p-2 rounded-lg font-bold
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}