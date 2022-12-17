import React, { useContext, useState } from "react";
import { EnvContext } from "../../App";
import { STATUS } from  '../../define/STATUS';
import { Btn } from "../btn/Btn";
import Style from './Board.module.css';

type Props = {
    btnCount: number;
    random: number[];
    setStatus:(arg0: STATUS) => void;
}

export const Board: React.FC<Props> = ({ btnCount, random, setStatus }) => {

    const envContext = useContext(EnvContext);

    // 紫クリックカウント
    const [count, setCount] = useState(0);

    // 紫インクリメント
    const addCount = () => {
        setCount(count + 1);

        if(count + 1=== random.length){
            setStatus(STATUS.GOAL);
            
        }
    }

    const list: JSX.Element[] = [];

    for (let i = 1; i <= btnCount; i++) {
        console.log("----------------------------");
        console.log("random:" + envContext.random);
        console.log("     i:" + i);
        console.log("result:" + envContext.random.includes(i));
        console.log("----------------------------");
        list.push(<Btn key={i} isPurple={envContext.random.includes(i)} addCount={addCount} />);
    }

    return (

        <div className={Style.background}>
            <div className={Style.center}>
                <div className={Style.btnlist}>{list}</div>
                <span className={Style.message}>紫をクリックした回数：{count}回</span>  <br />
            </div>
        </div>

    );
}