import { Kalam } from "next/font/google"
import Image from "next/image"

const kalam = Kalam({
    subsets: ['latin'],
    weight: ["300", "400", "700"]
})
export default function PotTiers() {
    const Cards = [
        {
            id: 1,
            icon: "✦",
            image: "/pots/silver.png",
            title: "1 Silver Pots",
            description: "Work on a real problem for 10+ hours.. Log em properly.Commit regularly.",
            tags: "10hrs"
        },
        {
            id: 2,
            icon: "✦",
            image: '/pots/bronze.png',
            title: "1 Bronze Pots",
            description: "Work on a general project for any amount of hours. Get one pot for each hour you code.",
            tags: "general"
        },
        {
            id: 3,
            icon: "✦",
            image: "/pots/golden.png",
            title: "1 Gold Pots",
            description: "Well made Project Good storytelling and visible efforts Something which blows up our socks.Not just basic webpage.",
            tags: "Full Stack"
        },
        {
            id: 6,
            image: "/images/event-ticket.png",
            title: "Hackathon Ticket ✈️",
            description: "Work on a general project for 50 hours The rarest Tier. 金継ぎ master..",
            tags: "50hrs. ELITE HACKATHON",
        },
    ]

    return (
        <div className="flex flex-col gap-4 min-h-screen px-4 sm:px-6 md:px-8">
            <div className="flex gap-2 flex-col items-center w-full">
                <h1 className={`${kalam.className} text-[#2a1a08] text-2xl sm:text-3xl md:text-4xl font-bold text-center`}>Pot tiers</h1>
                <p className={`text-base sm:text-lg ${kalam.className} text-[#ac9453] text-center`}>The more you fix, the Shinier your pot</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-8 sm:mt-12 justify-center items-center">
                {Cards.map((card) => (
                    <div key={card.id} className="col-span-1 w-full sm:w-80 md:w-96 lg:w-120 xl:w-full h-auto rounded-4xl bg-[#2A1A08] px-4 sm:px-6 py-4 sm:py-6 justify-between border-4 border-[#c9a030] border-dashed flex flex-col gap-3 sm:gap-4 cursor-grab transition-all duration-300 hover:scale-102 hover:shadow-[3px_8px_0_rgba(26,18,9,0.18)] hover:-translate-y-2">
                        <div className="select-none flex-shrink-0 w-full flex justify-start">
                            <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                                <Image src={card.image} alt={card.title} width={112} height={112} style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                        <div className={`flex gap-2 text-[#F5E4B0] font-medium text-lg sm:text-xl md:text-2xl ${kalam.className}`}>
                            <div className="flex-shrink-0">{card.icon}</div>
                            <div className="text-left">{card.title}</div>
                        </div>
                        <div className={`text-[#A3926D] text-sm sm:text-base md:text-lg ${kalam.className} text-left`}>
                            {card.description}
                        </div>
                        <div className={`${kalam.className} bg-[#3d2A08] w-fit text-sm sm:text-base px-3 sm:px-4 py-2 rounded-3xl items-center text-center justify-center flex text-[#c9a030]`}>
                            {card.tags}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}