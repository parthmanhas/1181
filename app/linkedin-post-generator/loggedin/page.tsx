import Result from '@/components/Result';
import SidebarComponent from '@/components/SidebarComponent';
import Image from 'next/image';

export default function LoggedIn() {
    return (
        <main className='flex'>
            <div className='w-[25%] p-5 border-2 border-gray-100'>
                <div className="flex justify-start p-3">
                    <Image src="/mark.svg" width={25} height={25} alt="logo"></Image>
                    <h1 className="ml-3 font-bold text-xl">Creatertools.ai</h1>
                </div>
                <div className='mt-5'>
                    <p className='font-bold text-gray-500 mb-3 text-sm px-3'>ALL CREATOR TOOLS</p>
                    <SidebarComponent props={{ name: "Video Idea Generator", iconSrc: "/video-gen-icon.png", iconAlt: "video-gen-icon" }} />
                    <SidebarComponent props={{ name: "Free Audiogram Generator", iconSrc: "/audiogram-icon.png", iconAlt: "audiogram-icon" }} />
                    <SidebarComponent props={{ name: "YT video to SEO Blog", iconSrc: "/seo-blog-icon.png", iconAlt: "seo-blog-icon" }} />
                    <SidebarComponent props={{ name: "YT video to Linkedin Post", iconSrc: "/linkedin-icon.svg", iconAlt: "linkedin-icon" }} />

                </div>
            </div>
            <div className="w-[75%] p-8">
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

        </main>
    )
}