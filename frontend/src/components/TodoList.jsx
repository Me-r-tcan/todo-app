import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Box, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import useTodoStore from '../stores/todoStore';

const TodoList = ({ onDeleteConfirmation }) => {
	const todos = useTodoStore((state) => state.todos);
	const fetchTodos = useTodoStore((state) => state.fetchTodos);
	const navigate = useNavigate();

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	const handleEditTodo = (id) => {
		navigate(`/edit/${id}`);
	};

	return (
		<Paper elevation={3}>
			<List>
				{todos.map((todo) => (
					<ListItem key={todo.id} divider>
						<ListItemText
							primary={todo.title}
							secondary={todo.description}
							primaryTypographyProps={{ variant: 'h6' }}
						/>
						<ListItemSecondaryAction>
							<IconButton
								edge="end"
								aria-label="edit"
								onClick={() => handleEditTodo(todo.id)}
							>
								<EditIcon />
							</IconButton>
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => onDeleteConfirmation(todo.id)}
							>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
				{todos.length === 0 && (
					<Box textAlign="center" p={2}>
						<Typography variant="body1" color="textSecondary">
							No TODO items available. Add a new one!
						</Typography>
					</Box>
				)}
			</List>
		</Paper>
	);
};

export default TodoList;
