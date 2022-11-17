import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToDoState {
  tasks: Array<string>
}

const initialState: ToDoState = {
  tasks: ['Lavar roupa', 'Estudar', 'Academia']
}

export const ToDoListSlice = createSlice({
  name: 'taskHandler',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.tasks = [...state.tasks, action.payload ]
    },
    remove: (state, action: PayloadAction<string>) => {
      const newTasks = state.tasks.filter((task) => task !== action.payload);
      state.tasks = newTasks;
    },
  }
})

// Action creators are generated for each case reducer function
export const { add, remove } = ToDoListSlice.actions

export default ToDoListSlice.reducer
