import AudioGram from "@/components/loggedIn/AudioGram";
import LinkedInPostGenerator from "@/components/loggedIn/LinkedInPostGenerator";
import SeoBlogGenerator from "@/components/loggedIn/SeoBlogGenerator";
import VideoIdeaGenerator from "@/components/loggedIn/VideoIdea";

export const CONSTANTS = {
    TOOLS: [
        {
            name: "Video Idea Generator",
            iconSrc: "/video-gen-icon.png",
            iconAlt: "video-gen-icon",
            id: 0,
            component: VideoIdeaGenerator
        },
        {
            name: "Free Audiogram Generator",
            iconSrc: "/audiogram-icon.png",
            iconAlt: "audiogram-icon",
            id: 1,
            component: AudioGram
        },
        {
            name: "YT video to SEO Blog",
            iconSrc: "/seo-blog-icon.png",
            iconAlt: "seo-blog-icon",
            id: 2,
            component: SeoBlogGenerator
        },
        {
            name: "YT video to Linkedin Post",
            iconSrc: "/linkedin-icon.svg",
            iconAlt: "linkedin-icon",
            id: 3,
            component: LinkedInPostGenerator
        }
    ]
}