import Image from 'next/image';
import { MouseEventHandler } from 'react';
const LoginButton = ({ onClick, text }: { onClick: MouseEventHandler<HTMLButtonElement>, text: string }) => {
    return (
        <button onClick={onClick} className="flex items-center border-2 rounded p-2 border-gray-200 font-semibold text-sm">
            <Image src="user.svg" className="mr-1" width={20} height={20} alt="image"></Image>
            <p>{text}</p>
        </button>
    )
}

export default LoginButton;