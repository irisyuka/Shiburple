import { STATUS } from  '../../define/STATUS';

type Props = {
    setStatus:(status: STATUS) => void;
}

export const Goal = (props :Props) => {

    const clickHandle = () => {
        props.setStatus(STATUS.START);
    }

    return (
        <>
        You Win!
        <br/>
        <button onClick={clickHandle} name='g'>Go to Start</button>
        </>
    )
}