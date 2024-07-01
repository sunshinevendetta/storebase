// app/page.tsx
import type { NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("../components/Three/ThreeScene"), { ssr: false });
const StandScene = dynamic(() => import("../components/Stand/Stand"), { ssr: false });
const RoomScene = dynamic(() => import("../components/Room/Room"), { ssr: false });
const WelcomeScene = dynamic(() => import("../components/Welcome/Logo"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-center p-6 bg-gray-800">
          <ThreeScene />
        </div>
        <div className="container mx-auto py-16 px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text gradient">
                PWR2TP Sponsors Marketplace
              </span>
            </h1>
            <h2 className="text-3xl font-semibold text-gray-400">
              Unlock Business Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="h-40 mb-4 rounded-md">
                <WelcomeScene />
              </div>
              <h3 className="text-2xl font-bold mb-3">Welcome</h3>
              <p className="text-gray-400 mb-3">
                Join us at the World Trade Center in Mexico City on September 7-8, 2024. Discover unparalleled opportunities to showcase your brand, protocol, token, project, or product in this premier expo.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="h-40 mb-4 rounded-md">
                <RoomScene />
              </div>
              <h3 className="text-2xl font-bold mb-3">Engage with Industry Leaders</h3>
              <p className="text-gray-400 mb-3">
                Participate in interactive zones featuring personalized experiences, workshops, hackathons, and trading tournaments. Connect with pioneers and innovators in decentralized technologies, AI, robotics, and more.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="h-40 mb-4 rounded-md">
                <StandScene />
              </div>
              <h3 className="text-2xl font-bold mb-3">Exhibit and Network</h3>
              <p className="text-gray-400 mb-3">
                Visit our booths, explore the event mapping, and browse exclusive merchandise. Network with other industry leaders, discover new partnerships, and find inspiration in our comprehensive showcase of innovation and creativity.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-3">Get Ready to Elevate Your Business</h3>
            <p className="text-gray-400 mb-6">
              Whether you're an investor, tech enthusiast, artist, or entrepreneur, PWR2TP offers something for everyone. Explore all the opportunities to elevate your business and connect with the global community.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
              <h3 className="text-2xl font-bold mb-3">Step-by-Step Guide</h3>
              <p className="text-gray-400 mb-3">
                1. <strong>Explore Sections:</strong> Click on the sections below to see the various opportunities available at PWR2TP.
              </p>
              <p className="text-gray-400 mb-3">
                2. <strong>Register to Place Orders or Get Information:</strong> Registration is required to place orders or get more information.
              </p>
              <p className="text-gray-400 mb-3">
                3. <strong>On-Chain Registration:</strong> Connect your wallet to register.
              </p>
              <p className="text-sm text-gray-500 mb-3">
                We recommend generating a base smart wallet specifically for this site to ensure the safety of your personal wallet.
              </p>
              <p className="text-gray-400">
                4. <strong>Secure Your Transactions:</strong> Use your smart wallet for all transactions and interactions on the site. Gas fees are sponsored by us.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                className="w-56 p-3 rounded-lg transition-all hover:shadow-lg gradient border-white/10 border text-center"
                href="/booth"
              >
                Explore Booths
              </Link>
              <Link
                className="w-56 p-3 rounded-lg bg-white/[.04] transition-all hover:bg-white/[.06] border-white/10 border text-center"
                href="/sponsorship-deals"
              >
                Sponsorship Deals
              </Link>
              <Link
                className="w-56 p-3 rounded-lg bg-white/[.04] transition-all hover:bg-white/[.06] border-white/10 border text-center"
                href="/special-activations"
              >
                Special Activations
              </Link>
              <Link
                className="w-56 p-3 rounded-lg bg-white/[.04] transition-all hover:bg-white/[.06] border-white/10 border text-center"
                href="/all"
              >
                See All
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 py-4">
        <div className="text-center text-gray-400">
          Powered by <span className="font-bold">Vibecluv©</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
