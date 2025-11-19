import { TextInput } from "@repo/ui/text-input"

export default function chatRoom() {
    return <div style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"

    }}>
        <div>
            chat room
        </div>
        <div>
            <TextInput size="big" placeholder="Chat Here"></TextInput>
        </div>

    </div>
}