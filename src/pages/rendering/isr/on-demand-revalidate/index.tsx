import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
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

const OnDemandRevalidationPage: FC<Porps> = (props) => {
  const { timestamp } = props;
  const router = useRouter();
  const revalidate = async () => {
    const result = await fetch("/api/revalidate");
    const data = await result.json();
    if (data.revalidated) {
      router.reload();
    } else {
      alert("실패");
    }
  };
  return (
    <main>
      <h1 className="text-2xl">{timestamp}</h1>
      <button onClick={revalidate}>Revalidate</button>
    </main>
  );
};

export default OnDemandRevalidationPage;
