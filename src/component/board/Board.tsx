import React, { useContext, useState, memo } from "react";
import { EnvContext } from "../../App";
import { STATUS } from "../../define/STATUS";
import { Btn } from "../btn/Btn";
import { Discription } from "../discription/Discription";
import { PurpleCounter } from "../purplecounter/PurpleCounter";
import Style from "./Board.module.css";

type Props = {
  btnCount: number;
  random: number[];
  setStatus: (arg0: STATUS) => void;
};

export const Board: React.FC<Props> = ({ btnCount, random, setStatus }) => {
  const envContext = useContext(EnvContext);

  // 紫クリックカウント
  const [count, setCount] = useState(0);

  // 紫インクリメント
  const addCount = () => {
    setCount(count + 1);

    if (count + 1 === random.length) {
      setStatus(STATUS.GOAL);
    }
  };

  const list: JSX.Element[] = [];

  for (let i = 1; i <= btnCount; i++) {
    list.push(
      <MemoBtn
        key={i}
        isPurple={envContext.random.includes(i)}
        addCount={addCount}
      />
    );
  }

  return (
    <div className={Style.background}>
      <div className={Style.center}>
        <Discription />
        <div className={Style.btnlist}>{list}</div>
        <PurpleCounter count={count} />
      </div>
    </div>
  );
};

const MemoBtn = memo(Btn);
