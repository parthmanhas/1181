import Result from '@/components/Result';

export default function LoggedIn() {
    return (
        <div className="p-8 justify-self-end">
            <div className='flex justify-end'>
                <button className='text-pink2 font-bold border-2 border-gray-200 px-3 py-1 rounded-md'>Log out</button>
            </div>
            {/* results */}
            <p className='font-semibold text-gray-500 mb-5'>Results</p>
            <div className='grid grid-cols-2 gap-4 overflow-y-auto'>
                <Result props={{
                    iconSrc: "/audiogram-icon.png",
                    heading: "UX review presentations",
                    content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
                    alt: "audiogram",
                    tags: ["Design", "Research", "Nocode"]
                }} />
                <Result props={{
                    iconSrc: "/result-icon-1.png",
                    heading: "UX review presentations",
                    content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
                    alt: "audiogram",
                    tags: ["Design", "Research", "Nocode"]
                }} />
                <Result props={{
                    iconSrc: "/result-icon-2.png",
                    heading: "UX review presentations",
                    content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
                    alt: "audiogram",
                    tags: ["Design", "Research", "Nocode"]
                }} />
                <Result props={{
                    iconSrc: "/result-icon-3.png",
                    heading: "UX review presentations",
                    content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
                    alt: "audiogram",
                    tags: ["Design", "Research", "Nocode"]
                }} />
                <Result props={{
                    iconSrc: "/result-icon-4.png",
                    heading: "UX review presentations",
                    content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
                    alt: "audiogram",
                    tags: ["Design", "Research", "Nocode"]
                }} />
                <Result props={{
                    iconSrc: "/result-icon-5.png",
                    heading: "UX review presentations",
                    content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
                    alt: "audiogram",
                    tags: ["Design", "Research", "Nocode"]
                }} />
            </div>
        </div>
    )
}