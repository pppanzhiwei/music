// getters 作用对状态再进行一些操作,类似于计算属性
/* 
gettersP: {
  doneTodos: state =>{
    return state.todos.filter(todo=>todo.done)
  }
}
*/
export const singer = state => state.singer
export const playingState = state => state.playingState
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const playMode = state => state.playMode
export const currentIndex = state => state.currentIndex
export const currentSong = (state)=>{
  return state.playList[state.currentIndex] || {}
}

export const searchHistory = (state)=>state.searchHistory