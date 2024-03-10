import Image from 'next/image';
export default function Logo() {
    return (
        <div className="flex justify-start p-3">
            <Image src="/mark.svg" width={25} height={25} alt="logo"></Image>
            <h1 className="ml-3 font-bold text-xl">Creatertools.ai</h1>
        </div>
    )
}