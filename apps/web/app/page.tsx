"use client";

import { useRouter } from "next/navigation";
import { BackgroundParticles } from "../components/background-particles";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      {/* Background Particles */}
      <BackgroundParticles />

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-8 p-8">
        <h1 className="text-7xl font-bold text-primary tracking-tighter">
          YapYap
        </h1>

        <div className="flex flex-col gap-4 w-80 p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-[var(--color-input-border)] shadow-2xl">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-1">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full p-3 rounded-lg bg-[var(--color-input-bg)] border border-[var(--color-input-border)] text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-1">Room ID</label>
            <input
              type="text"
              placeholder="Enter Room ID"
              className="w-full p-3 rounded-lg bg-[var(--color-input-bg)] border border-[var(--color-input-border)] text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              className="flex-1 bg-primary hover:bg-[var(--color-secondary)] text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 active:scale-95"
              onClick={() => router.push("/chat/new")}
            >
              Create Room
            </button>
            <button
              className="flex-1 bg-[var(--color-input-bg)] hover:bg-[var(--color-input-border)] text-white font-bold py-3 px-4 rounded-lg border border-[var(--color-primary)] transition-all transform hover:scale-105 active:scale-95"
              onClick={() => router.push("/chat/123")}
            >
              Join Room
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Chat with friends instantly
        </div>
      </div>
    </div>
  );
}
