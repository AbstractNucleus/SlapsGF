import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import Post from "../../components/post";

export default function PostPage({ postData }: { postData: PostData }) {
    return <Post postData={postData} />
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