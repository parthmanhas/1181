import Image from "next/image";

export default function Card() {
    return (
        <div className="p-4 bg-white rounded-md border-2 border-gray-200 m-4">
            <div className="flex justify-between">
                <div className="flex">
                    <Image src="panda-media.svg" width={60} height={60} alt="image"></Image>
                    <div className="ml-2">
                        <p className="text-md font-semibold">Panda Media</p>
                        <p className="text-sm text-gray-500">326 abonnes</p>
                        <div className="flex text-sm text-gray-500">
                            <p>20 h</p>
                            <p className="mx-0.5">&#x2022;</p>
                            <Image src="world.svg" width={20} height={20} alt="world"></Image>
                        </div>
                    </div>
                </div>
                <div className="flex text-gray-500"><p>&#x2022;</p><p>&#x2022;</p><p>&#x2022;</p></div>
            </div>
            <p className="mt-5 text-md">[Historical Fact] The West first learned of the giant panda on 11 March 1869, when the French missionary Armand David received a skin from a hunter.
                In 1936, Ruth Harkness became the first Westerner to bring back a live giant panda.</p>
            <p className="flex justify-end text-gray-500 mt-3">...see more</p>
            <p className="flex justify-start mt-3 font-semibold text-blue-600 text-sm">See translation</p>
            <div className="mt-5 flex items-center text-sm">
                <Image className="mr-3" src="thumbs-up.svg" width={30} height={30} alt="reaction"></Image>
                <Image className="mr-3" src="clap.svg" width={30} height={30} alt="reaction"></Image>
                <Image className="mr-3" src="heart.svg" width={30} height={30} alt="reaction"></Image>
                <Image className="mr-3" src="love.svg" width={30} height={30} alt="reaction"></Image>
                <Image className="mr-3" src="confused.svg" width={30} height={30} alt="reaction"></Image>
                <p className="text-gray-500">88</p>
                <p className="text-gray-500 mx-3">&#x2022;</p>
                <p className="text-gray-500">4 Comments</p>
            </div>
        </div>

    );
}