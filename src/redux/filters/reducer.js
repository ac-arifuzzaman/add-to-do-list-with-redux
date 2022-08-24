import { COLORCHANGED, STATASCHANGED } from "./actionTypes";
import initialState from "./initalState";


const filterReducer = (state = initialState, action) =>{
  switch (action.type) {
    case STATASCHANGED:
      return {
        ...state,
        statas: action.payload
      }

      case COLORCHANGED:
        const {color,changedType} = action.payload;
        switch (changedType) {
          case "added":
            return {
              ...state,
              color: [
                ...state.color,
                color 
              ]
            }

            case "remover":
              return {
                ...state,
                colors: state.colors.filter(newColor => newColor !== color)
              }
        
          default:
            return state;
        }
    default:
      return state;
  }
}

export default filterReducer;