import { Utility } from "./Utility";
export class Env {
    static text = process.env.REACT_APP_NORMAL_TEXT;

    static purple = process.env.REACT_APP_PURPLE_TEXT;

    // ボタン数
    static btnCount = Number(process.env.REACT_APP_BUTTON_COUNT);

    // 紫の数
    static purpleCount = Number(process.env.REACT_APP_PURPLE_COUNT);

    // 紫となるインデックス
    static random = Utility.getPurpleIndexList(this.btnCount, this.purpleCount);
    

}