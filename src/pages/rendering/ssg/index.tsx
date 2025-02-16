import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Porps {
  text: string;
}

export const getStaticProps: GetStaticProps<Porps> = () => {
  return {
    props: { text: dayjs().format("YYYY-mm-dd HH:mm:ss") },
  };
};

const SsgPage: FC<Porps> = (props) => {
  return (
    <main>
      fsafsd
      <div>{props.text}</div>
      <div>{dayjs().format("YYYY-mm-dd HH:mm:ss")}</div>
    </main>
  );
};

export default SsgPage;
