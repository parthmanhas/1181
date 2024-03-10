import Image from "next/image";

export default function VideoIdea() {
    return (
        <main className="flex w-full">
            <div className="w-[70%] p-14">
                <div className="flex justify-start">
                    <Image src="mark.svg" width={25} height={25} alt="logo"></Image>
                    <h1 className="ml-3 font-bold text-xl">Creatertools.ai</h1>
                </div>
                <h1>Video Idea Generator</h1>
            </div>
            <div className="w-[30%]"></div>
        </main>
    );
}
