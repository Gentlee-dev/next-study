import { CommentResponse } from "@/api/comment";
import { Post } from "@/api/post";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  post: Post;
}

const PostDetail: FC<Props> = (props) => {
  const { post } = props;

  const router = useRouter();
  const { data: comments, isLoading } = useQuery(
    getCommentsQueryOptions(post.id)
  );

  if (router.isFallback) {
    return <main>LOADING...</main>;
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <ol>
        {isLoading
          ? "로딩중"
          : comments?.map((el) => {
              return <li key={el.id}>{el.name}</li>;
            })}
      </ol>
    </main>
  );
};

export { PostDetail };

const getCommentsQueryOptions = (
  postId: number
): UseQueryOptions<
  CommentResponse,
  Error,
  CommentResponse["comments"],
  [string, typeof postId]
> => {
  return {
    queryKey: ["comment-list", postId],
    queryFn: async () => {
      const reuslt = await fetch(`/api/post/${postId}/comment`);
      const data: CommentResponse = await reuslt.json();
      return data;
    },
    select: (data) => {
      return data.comments;
    },
  };
};
