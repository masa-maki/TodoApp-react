import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo.tsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
