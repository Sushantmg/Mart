import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import AD from "../components/Home/AD";

export default function Home() {
    return (
        <main className="w-full relative overflow-hidden dark:bg-gray-900">
            <Hero />

            <div className="-mt-20 relative z-20 px-4 md:px-8 ">
                <Features />
            </div>

            <div className="-mt-12 relative z-10">
                <AD />
            </div>
        </main>
    );
}
