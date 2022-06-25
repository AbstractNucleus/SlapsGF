import { getSortedPostsData, PostData } from '../lib/posts';
import { GetStaticProps } from "next";
import Post from "../components/post";

export default function Index({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <>
      <h1>HOME</h1>
      <section>
        {allPostsData.map((postData, index) => (
          <Post postData={postData} key={index} />
        ))}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};