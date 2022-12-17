import { createContext, useState } from "react";
import Style from './App.module.css';
import { Board } from './component/board/Board';
import { Goal } from "./component/goal/Goal";
import { Start } from "./component/start/Start";
import { Title } from './component/title/Title';
import { STATUS } from  './define/STATUS';
import { Utility } from './common/Utility';
import {Env} from './common/Env';

const App = () => {

  // ボタン数
  const btnCount = Number(process.env.REACT_APP_BUTTON_COUNT);
  // 紫の数
  const purpleCount = Number(process.env.REACT_APP_PURPLE_COUNT);
  // 紫となるインデックス
  const random = Utility.getPurpleIndexList(btnCount, purpleCount);

  const [status, setStatus] = useState<STATUS>(STATUS.START);

  return (

    <div className={Style.App}>
      <Title />
      <EnvContext.Provider value={Env}>
      {status === STATUS.START && 
      <Start setStatus={setStatus}/>
      }
      {status === STATUS.GAME && 
      <Board btnCount={btnCount} random={random} setStatus={setStatus}/>
      }
      {status === STATUS.GOAL && 
      <Goal setStatus={setStatus}/>
      }
      </EnvContext.Provider>
    </div>

  )
}

export default App;

export const EnvContext = createContext(Env);
