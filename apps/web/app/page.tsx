"use client"

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { TextInput } from "@repo/ui/text-input";


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center text-xl text-blue bg-white">
        <TextInput placeholder="Room name" size="small"></TextInput>
        <button onClick={() => {
          router.push("/chat/123")
        }}>Join Room</button>
    </div>
  );
}
