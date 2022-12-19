import Style from "./PurpleCounter.module.css";

type Props = {
  count: Number;
};

export const PurpleCounter: React.FC<Props> = ({ count }) => {
  return (
    <>
      <span className={Style.message}>
        <>紫をクリックした回数：{count}回</>
      </span>
    </>
  );
};
