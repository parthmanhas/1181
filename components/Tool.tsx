import Image from 'next/image';

interface Tool {
    name: string,
    desc: string,
    iconSrc: string
}

export default function Tool({ props }: { props: Tool }) {
    return (
        <div className="h-32 border-2 border-gray-100 rounded-lg p-4 w-full">
            <Image className="p-2 bg-gray-50 border-2 border-gray-200 rounded box-content" src={props.iconSrc} width={20} height={20} alt="tool-img"></Image>
            <p className="font-semibold my-2">{props.name}</p>
            <p className="text-gray-400 text-sm">{props.desc}</p>
        </div>
    )
}