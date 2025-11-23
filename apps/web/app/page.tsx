"use client"

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { TextInput } from "@repo/ui/text-input";


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center bg-red-500 h-screen w-screen">
      <div className="text-2xl">Yap Yap</div>
      <div className=" text-xl text-blue border-2 border-black">
        <TextInput placeholder="Room name" size="small"></TextInput>
        <button onClick={() => {
          router.push("/chat/123")
        }}>Join Room</button>
      </div>
    </div>
  );
}
