import Card from "@/components/Card";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function AudioGram() {
    return (
        <main className="flex w-full">
            <div className="w-[60%] py-14 px-28 h-[100vh]">
                <Logo />
                <h1 className="text-4xl font-semibold mt-10">Audiogram</h1>
                <p className="mt-5 font-medium text-gray-500">Generate 2 charts for hearing tests</p>
                <form className="mt-10">
                    <div className="flex flex-col w-1/2">
                        <label className="font-medium text-gray-600 mb-1">Enter the hearing test link</label>
                        <input className="border-2 border-gray-300 rounded-md p-2" placeholder="https://example.com/"></input>
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
