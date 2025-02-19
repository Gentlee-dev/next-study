import { fetchPost, fetchPostList, Post } from "@/api/post";
import { PostDetail } from "@/domains/post/detail";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import { ComponentProps, FC } from "react";

type Params = { id: string };
type Props = ComponentProps<typeof PostDetail>;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const result = await fetchPostList();
  const slicedPostList = result.slice(0, 3);
  const paths: GetStaticPathsResult<Params>["paths"] = slicedPostList.map(
    (post) => {
      return {
        params: { id: post.id.toString() },
      };
    }
  );
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params?.id;
  if (!id) {
    return { notFound: true };
  }
  const post = await fetchPost(id);
  console.log("-----------");
  console.log(post);

  return {
    props: { post },
  };
};

const PostDetailPage: FC<Props> = (props) => {
  return <PostDetail {...props} />;
};

export default PostDetailPage;
