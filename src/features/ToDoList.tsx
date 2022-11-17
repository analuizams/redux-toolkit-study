import React from 'react';
import type { RootState } from '../app/store.js';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from './toDoListSlice';
import { Input } from 'antd';

const ToDoList = () => {
  const { tasks } = useSelector((state: RootState) => state.toDoList)
  const dispatch = useDispatch()

  console.log(tasks)

  return (
    <>
      <Input
        type="text"
        onPressEnter={({target}) => dispatch(add(target.value))}
      />
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(remove())}
      >
        Remove Task
      </button>
      <div>
      { tasks.length > 0 && tasks.map((task) => <li>{task}</li>)}
      </div>
    </>
  )
}

export default ToDoList;
