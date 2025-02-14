import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

interface Params extends ParsedUrlQuery {
  dynamic: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  console.log(context.params?.dynamic);
  return {
    props: {
      params: context.params?.dynamic,
    },
  };
};

interface Props {
  params: string | undefined;
}

const Dynamic: FC<Props> = (props) => {
  return (
    <main>
      Dynamic-routing
      {props.params}
    </main>
  );
};

export default Dynamic;
