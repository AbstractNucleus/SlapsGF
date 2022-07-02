import { getAllPostIds, getPostData, PostData } from "../../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import Post from "../../../components/Post";
import PostLayout from "../../../components/PostLayout";

export default function PostPage({ postData }: { postData: PostData }) {
    return (
      <PostLayout>
        <Post postData={postData} />
      </PostLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};