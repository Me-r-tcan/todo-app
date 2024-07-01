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

				addTodo: async (values) => {
					try {
						const response = await fetch(`${apiUrl}/api/todos`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(values),
						});
						const data = await response.json();
						set((state) => ({
							todos: [...state.todos, data],
						}));
					} catch (error) {
						console.error('Error adding todo:', error);
					}
				},

				getTodoById: (id) => {
					const todos = get().todos;
					return todos.find((todo) => todo.id === Number(id));
				},

				updateTodo: async (id, updatedValues) => {
					try {
						const response = await fetch(`${apiUrl}/api/todos/${id}`, {
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(updatedValues),
						});
						const data = await response.json();
						set((state) => ({
							todos: state.todos.map((todo) => (todo.id === Number(id) ? data : todo)),
						}));
					} catch (error) {
						console.error('Error updating todo:', error);
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
