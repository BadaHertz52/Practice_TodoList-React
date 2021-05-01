import  React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
// styled-componets 는 자동적으로 지역적으로 기능하지만 createGlobalStyle을 설정하면 전역적으로 작동 가능 
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`; 

function App(){
  return(
    <TodoProvider>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </TodoProvider>
  )
};
export default App;
