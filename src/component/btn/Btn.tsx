import React, { useContext, useState } from "react";
import { EnvContext } from "../../App";
import styles from './Btn.module.css';

type Props = {
        isPurple :boolean;
        addCount: React.Dispatch<React.SetStateAction<number>>;
}



export const Btn: React.FC<Props> = ({isPurple, addCount }) => {

    const envContext = useContext(EnvContext);

    const label = isPurple ? envContext.purple : envContext.text;


    const [visited, setVisited] = useState(false);

    const handleClick = (event: any) => {

        // 紫の場合のみカウント
        if (isPurple) {
            if (!visited) {
                addCount(1);
            }
        }

        setVisited(true);
    };


    let divClassName = styles.btn_wrap;
    if(visited){
        if(isPurple){
            divClassName = styles.btn_wrap_purple_disabled;
        }else{
            divClassName = styles.btn_wrap_disabled;
        }
    } 

    let className = styles.btn_normal;
    if(visited){
        if(isPurple){
            className = styles.btn_purole_disabled;
        }else{
            className =  styles.btn_noraml_disabled;
        }
    }

    return (
        <div className={`${styles.btn} ${divClassName}`}>
            <a href="#btn" onClick={handleClick} className={`${styles.btn} ${className}`}>
                {label}
            </a>
            <br />
        </div>

    );

}
