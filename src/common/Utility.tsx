export class Utility {

    // 紫ボタンのインデックリストを取得します。
    static getPurpleIndexList = (btnCount: number, purpleCount :number): number[] => {
    let list: number[] = [];
    let i = 0;
    while(true){

      // 乱数（最大値：ボタン件数）を取得
      const random = Math.floor(Math.random() * btnCount);

      // 重複がなければリストに追加
      if(!list.includes(random)){
        list[i] = random;
        i++;
      }

      // 規定数に達したら終了
      if(list.length === purpleCount){
        break;
      }
    
    }
  
    return list;
  }
}