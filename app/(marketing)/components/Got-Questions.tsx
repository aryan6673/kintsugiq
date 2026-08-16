"use client"
import { Kalam } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
const kalam = Kalam({
    subsets: ['latin'],
    weight: ['300', '400', '700']
})
export default function GotQuestions() {
    const questions = [
        {
            id: 1,
            question: 'What is Kintsugi?',
            answer: "A Hack Club YSWS where you fix a real problem you ran into-Broken tool, Bad UI/UX,Nonsense workflow- and ship it open source."
        },
        {
            id: 2,
            question: "What do I get?",
            answer: "Once your Project gets reviewed and approved, You can trade your pots for a real kintsugi repair kit - Gold powder,resin,and a broken ceramic bowl or other cute kintsugi stuffs. 金継ぎ for real.",
        },
        {
            id: 3,
            question: "Rules to follow?",
            answer: "No double dipping unless your program allows. AI is okay but up to 30%- Track time with Hackatime or lapse. Don't vibecode it.Real work Only."
        },
        {
            id: 4,
            question: "How can I track time?",
            answer: "Software development time is tracked using Hackatime and hardware time is tracked through Lapse."
        },
        {
            id: 5,
            question: 'What kind of projects can I make?',
            answer: 'You can submit any kind of Software or Hardware related project! It can either be an automation or any game or any web or any bot and  anything related to software!.',
        },
        {
            id: 6,
            question: "Need more help?",
            answer: "Ask at #kintsugi-help on Slack. Read the full FAQs at #kintsugi Your question will surely be answered."
        },
    ]
    const [openId, setOpenId] = useState<number | null>(null);
    const toggleQuestion = (id: number) => {
        setOpenId(openId === id ? null : id)
    }
    return (
        <div className="flex min-h-[80vh] flex-col px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 gap-6 sm:gap-8">
            <div className="flex gap-2 flex-col items-center w-full">
                <h1 className={`${kalam.className} text-[#2a1a08] text-2xl sm:text-3xl md:text-4xl font-bold text-center`}>Got Questions?</h1>
                <p className={`text-base sm:text-lg ${kalam.className} text-[#ac9453] text-center`}>Click the Pot to get assisted</p>
            </div>
            <div className="flex justify-center transition-all duration-300 items-center flex-col gap-3 sm:gap-4 w-full max-w-4xl mx-auto">
                {questions.map((question) => {
                    const isOpen = openId === question.id
                    return (
                        <div key={question.id} onClick={() => toggleQuestion(question.id)} className="bg-[#2A1A08] transition-all duration-300 w-full py-3 sm:py-4 border-4 border-dashed border-[#c9a030] px-3 sm:px-6 md:px-8 rounded-3xl cursor-pointer hover:-translate-y-[2px] active:scale-95 sm:active:scale-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex-shrink-0 mt-0.5">
                                    <Image src={'/pots/bronze.png'} alt="bronze-pot" fill style={{ objectFit: 'contain' }} />
                                </div>
                                <div className={`${kalam.className} text-sm sm:text-base md:text-lg text-[#ac9453] font-bold text-left flex-1 break-words`}>{question.question}</div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-3 sm:mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                                <div className={`text-xs sm:text-sm md:text-base text-[#F5E4B0] font-light ${kalam.className} pl-12 sm:pl-16 pt-2`}>{question.answer}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}