import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function PostCreate() {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            return (
                <div>
                    <h1>
                        Please
                        <a>
                            <Link href="api/auth/signin">sign in</Link>
                        </a>
                        in order to access this page
                    </h1>
                </div>
            );
        },
    });

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        await fetch("/api/posts/create", {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
            }),
        });
        setIsLoading(false);
    }

    return (
        <div>
            <h1>Create a new post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <MDEditor
                        value={content}
                        onChange={(value: any) => setContent(value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {isLoading && <p>Loading...</p>}
        </div>
    );
}
