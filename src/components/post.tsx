import Link from "next/link";
import Date from "../lib/date";
import { PostData } from "../lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import { useRouter } from "next/router";

export default function Post({ postData }: { postData: PostData }) {
    const Content = getMDXComponent(postData.sourceMDX);
    const router = useRouter();

    return (
        <article>
            {router.pathname === "/" ? (
                <Link href={`posts/${postData.id}`}>
                    <a>
                        <h2>
                            {postData.title}
                        </h2>
                    </a>
                </Link>
            ): (
                <h2>
                    {postData.title}
                </h2>
            )}

            <div>
                <Date dateString={postData.date} />
            </div>
            <div>
                <Content />
            </div>
        </article>
    );
}