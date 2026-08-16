import GotQuestions from "./components/Got-Questions";
import Hero from "./components/Hero";
import HowKintsugiWorks from "./components/How-Kintsugi-Works";
import PotTiers from "./components/Pot-tiers";
import PreviousHackathon from "./components/PreviousHackathon";
import SignUpSection from "./components/SignUpSection";

export default function homePage(){
    return(
    <main className="mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <Hero />
        <HowKintsugiWorks />
        <PotTiers />
        <PreviousHackathon />
        <GotQuestions />
        <SignUpSection />
    </ main>
    )
}