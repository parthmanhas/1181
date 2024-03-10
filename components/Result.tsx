import Image from 'next/image';
import Tag from '@/components/Tag';

interface Result {
    iconSrc: string,
    alt: string,
    heading: string,
    content: string,
    tags: string[]
}

export default function Result({ props }: { props: Result }) {

    const getRandomNumber = (maximum: number, minimum: number) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    return (
        <div className='p-5 border-2 border-gray-200 rounded-lg bg-slate-50'>
            <div className={"h-[40px] w-[40px] rounded-full flex justify-center items-center " + ["bg-green-200", "bg-purple-200", "bg-blue-200", "bg-red-200", "bg-orange-200", "bg-yellow-200", "bg-lime-200"][getRandomNumber(0, 7)]}>
                <Image width={20} height={20} src={props.iconSrc} alt={props.alt}></Image>
            </div>
            <h1 className='font-semibold text-3xl my-3 text-slate-800'>{props.heading}</h1>
            <p className='text-gray-500'>{props.content}</p>
            <div className='mt-5 flex'>
                {props.tags.map((tag, index) => (<Tag key={index} props={{ tagName: tag }} />))}
            </div>
        </div>
    )
}