const HeroSubscribe = () => {
    return (
        <div className="grid grid-cols-2 w-full py-12 px-14 border-2 border-gray-100 rounded-lg bg-pink5 mt-16">
            <div>
                <h1 className="text-3xl font-semibold">Want to know more about<br></br> the tools?</h1>
                <p className="mt-5 text-gray-500">Join the club and explore all the free tools...</p>
            </div>
            <div className="flex justify-end items-center">
                <button className="bg-gradient-to-t from-pink3 to-pink1 text-white py-2 px-14 rounded border-2 border-pink-500 font-medium">Subscribe</button>
            </div>
        </div>
    )
}

export default HeroSubscribe;