'use client';

import HeroFooter from "@/components/HeroFooter";
import HeroSubscribe from "@/components/HeroSubscribe";
import LoginButton from "@/components/LoginButton";
import LoginModal from "@/components/LoginModal";
import Logo from "@/components/Logo";
import Modal from "@/components/Modal";
import Tool from "@/components/Tool";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full">
      {/* hero page 1 */}
      <div className="px-40 h-[100vh]">
        <nav className="flex w-full justify-between items-center py-16">
          <Logo />
          <LoginButton onClick={() => setIsModalOpen(true)}/>
        </nav>
        <div className="flex justify-center">
          <div className="flex border-2 border-gray-200 justify-center bg-gray-100 rounded-2xl items-center w-80">
            <Image src="star.svg" width={15} height={15} alt="star"></Image>
            <p className="px-1 font-medium">All the top creator tools in one place</p>
            <Image src="star.svg" width={15} height={15} alt="star"></Image>
          </div>
        </div>
        <div className="flex justify-center mt-10 relative">
          <Image className="absolute top-6 right-32" src="star-sticker.svg" width={80} height={80} alt="star"></Image>
          <Image className="absolute top-16 left-28" src="heart-sticker.svg" width={80} height={80} alt="heart"></Image>
          <Image className="absolute bottom-[-200px] left-5" src="thumbs-up-sticker.svg" width={80} height={80} alt="thumbs-up"></Image>
          <Image className="absolute bottom-[-100px] right-12" src="+1-sticker.svg" width={80} height={80} alt="+1"></Image>
          <h1 className="text-6xl text-center"><Image className="inline" src="top-creator-heading.svg" width={450} height={450} alt="heading"></Image> for making <br></br>those <span className="font-medium">videos go viral 🚀</span></h1>
        </div>
        <div className="flex justify-center mt-10">
          <p className="text-2xl text-center text-gray-500 font-normal">We are ready to be your creator co-pilot. Generate ideas, SEO friendly<br></br> blogs & Linkedin posts from videos, Audiograms</p>
        </div>
        <div className="flex justify-center mt-12">
          <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-t from-pink3 to-pink1 text-white p-2 rounded border-2 border-pink-500 font-medium">Login and explore &gt;</button>
        </div>
        <div className="flex justify-center mt-12">
          <Image src="arrow-down.svg" width={15} height={15} alt="arrow-down"></Image>
          <p className="px-1 font-semibold text-pink2">scroll down to explore</p>
          <Image src="arrow-down.svg" width={15} height={15} alt="arrow-down"></Image>
        </div>
      </div>
      {/* hero page 2 */}
      {/* tools information */}
      <div className="flex flex-col items-center px-24 mb-5">
        <p className="text-pink2 font-medium pt-8">All of our tools</p>
        <h1 className="font-medium text-3xl py-5">Click on any tool below and explore</h1>
        <Image src="arrow-down-fancy.svg" width={15} height={15} alt="arrow-down-fancy"></Image>
        <div className="grid grid-cols-2 gap-5 w-full mt-4">
          <Link href="/video-idea">
            <Tool props={{
              name: "Video Idea Generator",
              desc: "Generate 10 unique ideas for your next viral video. Forget the creative block",
              iconSrc: "/video-gen-icon.png"
            }} />
          </Link>
          <Link href="/audiogram">
            <Tool props={{
              name: "⁠Free Audiogram Generator",
              desc: "Generate 10 unique ideas for your next viral video. Forget the creative block",
              iconSrc: "/audiogram-icon.png"
            }} />
          </Link>
          <Link href="/seo-blog-generator">
            <Tool props={{
              name: "YouTube video to SEO Blog Generator",
              desc: "Generate 10 unique ideas for your next viral video. Forget the creative block",
              iconSrc: "/seo-blog-icon.png"
            }} />
          </Link>

          <Link href="/linkedin-post-generator">
            <Tool props={{
              name: "YouTube video to LinkedIn Post Generator",
              desc: "Generate 10 unique ideas for your next viral video. Forget the creative block",
              iconSrc: "/linkedin-icon.svg"
            }} />
          </Link>
        </div>
        {/* Subcscribe section */}
        <HeroSubscribe />
        {/* footer */}
        <HeroFooter />
        
        {/* Login Modal */}
        <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </main>
  );
}
