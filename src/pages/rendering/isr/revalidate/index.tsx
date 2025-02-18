import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Porps {
  timestamp: string;
}

export const getStaticProps: GetStaticProps<Porps> = () => {
  return {
    props: { timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss") },
    revalidate: 10,
  };
};

const RevalidationPage: FC<Porps> = (props) => {
  const { timestamp } = props;
  return (
    <main>
      <h1 className="text-2xl">{timestamp}</h1>
    </main>
  );
};

export default RevalidationPage;
