import { gilroy } from "@/styles/fonts";
import { FC } from "react";

const LocalMain: FC = () => {
  return (
    <main>
      <p style={{ fontSize: 50 }} className={gilroy.className}>
        길로이G
      </p>
      <p style={{ fontSize: 50 }}>길로이G</p>
    </main>
  );
};

export { LocalMain };
