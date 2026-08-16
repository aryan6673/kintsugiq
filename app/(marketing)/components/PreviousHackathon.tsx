import { Kalam } from "next/font/google";
import Image from "next/image";
const kalam = Kalam({
    subsets: ['latin'],
    weight: ['300', '400', '700']
})
export default function PreviousHackathon() {
    return (
        <div className={`flex relative group min-h-[60vh] my-8 sm:my-12 md:my-16 justify-center ${kalam.className} px-4 sm:px-6 md:px-8`}>
            <div className="bg-[#2A1A08] items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-12 md:py-24 lg:flex lg:flex-row flex-col justify-center border-4 border-dashed border-[#c9a030] w-full px-4 sm:px-6 rounded-4xl group-hover:scale-102 cursor-grab transition-all duration-300">
                <div className="flex justify-between flex-col gap-3 sm:gap-4 md:gap-6 flex-1">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a030] text-left">
                        This december,110+ hackclubbers from every corner will code and fix in japan for a 5 day long patchy hackathon
                    </div>
                    <div className="text-base sm:text-lg md:text-xl text-[#F5E4B0] font-light text-left">
                        This hackathon will be organised by <span className="underline decoration-2 underline-offset-4 decoration-dashed text-[#c9a030]">Hack Club</span>, A US bases 501(c)(3) nonprofit and network of 100,000 teens across the world.
                    </div>
                    <div className="text-base sm:text-lg md:text-xl text-[#F5E4B0] font-light text-left">
                        The whole hackathon including food ,accomodation ,activity etc. will be <span className="font-bold text-[#B88900]">free of cost</span> for all the attendees.Travel and flight stipend would be availaible for free too!
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-[#A3926D] font-extralight text-left">
                        Photos from a hc hackathon held in Singapore
                    </div>
                </div>
                <div className="bg-[#F5E4B0] py-3 sm:py-4 md:py-5 w-fit h-fit px-3 sm:px-4 md:px-5 rotate-6 justify-center items-center flex-shrink-0">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto aspect-square relative">
                        <Image src={'/images/hc1.webp'} alt="hc-event" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <div className="hidden lg:block absolute right-24 md:right-40 lg:right-70 pointer-events-none z-2 border-1 w-20 h-8 -rotate-4 -top-5 border-[#d2b432] bg-[#FFF4968A]" />
                </div>
            </div>
            <div className="hidden md:block absolute group-hover:scale-108 cursor-grab transition-all duration-300 z-2 border-1 w-40 h-12 rotate-4 -top-4 border-[#d2b432] bg-[#FFF4968A]" />

        </div>
    )
}