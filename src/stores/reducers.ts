/**
 * 全局的状态（如系统设置、主题等）
 */

import { combineReducers } from "redux";

interface GlobalState {
    // 主题
    theme: 'dark' | 'light';
    // 侧边栏收缩
    collapse: boolean;
    // 默认颜色
    colorPrimary: string;
    // 菜单
    menus: any[];
}

// 定义初始全局状态
const initGlobalState: GlobalState = {
    // 主题
    theme: "dark",
    // 侧边栏是否收缩
    collapse: false,
    // 系统默认主体色
    colorPrimary: "#1677ff",
    // 菜单
    menus: []
}

// Action 类型
interface Action {
    // 操作类型
    type: string;
    // 传过来的数据
    payload?: any;
}

// reducer 处理action和payload
const globalReducer = (state = initGlobalState, action: Action): GlobalState => {
    switch (action.type) {
        case "SET_THEME":
            return { ...state, theme: action.payload };
        case "SET_COLLAPSE":
            return { ...state, collapse: action.payload };
        case "SET_COLORPRIMARY":
            return { ...state, colorPrimary: action.payload };
        case "SET_MENUS":
            return { ...state, menus: action.payload };
        default:
            return state;
    }
}

// 将多个reducer组合成一个root Reducer（上面的数据全局，后续可以考虑进行代码的分离）
const rootReducer = combineReducers({
    global: globalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;