import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const useTodoStore = create(
    devtools(
      persist(
        (set, get) => ({
          todos: [],
  
          fetchTodos: async () => {
            try {
              const response = await fetch(`${apiUrl}/api/todos`);
              const data = await response.json();
              set({ todos: data });
            } catch (error) {
              console.error('Error fetching todos:', error);
            }
          },

          deleteTodo: async (id) => {
            try {
              const response = await fetch(`${apiUrl}/api/todos/${id}`, {
                method: 'DELETE',
              });
              if (response.status === 200) {
                set((state) => ({
                  todos: state.todos.filter((todo) => todo.id !== id),
                }));
              } else {
                console.error('TODO deletion failed:', response.statusText);
              }
            } catch (error) {
              console.error('Error deleting todo:', error);
            }
          },
        }),
        {
          name: 'todo-storage',
        }
      )
    )
  );

export default useTodoStore;
