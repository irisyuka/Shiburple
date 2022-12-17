import { useEffect, useState } from "react";
import { STATUS } from  '../../define/STATUS';
import styles from './Start.module.css';



export const Start = (prop: { setStatus: (arg0: STATUS) => void; }) => {

    const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(()=>setLoad(true), 2500);
  },[])

const clickHandle = () => {
    prop.setStatus(STATUS.GAME);
}

    return (
        <>
            {load ? 
            <button className={styles.startbutton} onClick={clickHandle}>Start</button>
            :<div className={styles.loader}>Loading...</div>
            }

        </>
    )
}