import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

interface Params extends ParsedUrlQuery {
  dynamic: string[];
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  console.log(context.params?.dynamic);
  return {
    props: {
      route: context.params?.dynamic,
    },
  };
};

interface Props {
  route: string[] | undefined;
}

const CatchAllSegments: FC<Props> = (props) => {
  console.log(props);
  return (
    <div>
      캐치올세그먼트
      {props.route?.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
};

export default CatchAllSegments;
