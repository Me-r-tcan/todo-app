import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Paper, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import useTodoStore from '../stores/todoStore';


const EditTodoForm = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');

	const getTodoById = useTodoStore((state) => state.getTodoById);
	const updateTodo = useTodoStore((state) => state.updateTodo);

	useEffect(() => {
		const todo = getTodoById(id);

		if (todo) {
			setTitle(todo.title);
			setDescription(todo.description);
			setStatus(todo.status);
		}
	}, [getTodoById, id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateTodo(id, { title, description, status });
		navigate('/');
	};

	return (
		<Paper elevation={3} sx={{ p: 3 }}>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							label="Title"
							variant="outlined"
							fullWidth
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label="Description"
							variant="outlined"
							fullWidth
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							multiline
							rows={4}
							required
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth variant="outlined" required>
							<InputLabel>Status</InputLabel>
							<Select
								value={status}
								onChange={(e) => setStatus(e.target.value)}
								label="Status"
							>
								<MenuItem value="PENDING">Pending</MenuItem>
								<MenuItem value="IN_PROGRESS">In Progress</MenuItem>
								<MenuItem value="COMPLETED">Completed</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary" fullWidth>
							Update Todo
						</Button>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
};

export default EditTodoForm;
