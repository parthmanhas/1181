import Card from "@/components/Card";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function VideoIdeaGenerator() {
    return (
        <main className="flex w-full">
            <div className="w-[60%] py-14 px-28 h-[100vh]">
                <Logo />
                <h1 className="text-4xl font-semibold mt-10">Video Idea Generator</h1>
                <p className="mt-5 font-medium text-gray-500">Generate 2 video ideas for your next viral video.</p>
                <form className="mt-10">
                    <div className="flex flex-col w-1/2 mt-5">
                        <label className="font-medium text-gray-600 mb-1">Blog Tone/Mood</label>
                        <input className="border-2 border-gray-300 rounded-md p-2" placeholder="Funny, Educational, Inspirational"></input>
                    </div>
                    <button className="mt-5 bg-gradient-to-t from-blue2 to-blue1 text-white w-1/2 p-2 rounded-md">Generate &gt;</button>
                </form>
            </div>
            <div className="w-[40%] bg-gray-100 h-[100vh] overflow-y-auto">
                <Card />
                <Card />
                <Card />
            </div>
        </main>
    );
}
