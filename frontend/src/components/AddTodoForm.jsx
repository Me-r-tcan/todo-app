import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl, Typography, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useTodoStore from '../stores/todoStore';

const AddTodoForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('PENDING');
	const [submitted, setSubmitted] = useState(false);

	const addTodo = useTodoStore((state) => state.addTodo);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ title, description, status });
		setTitle('');
		setDescription('');
		setStatus('PENDING');
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
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
						<Button type="submit" variant="contained" color="primary" fullWidth startIcon={<AddIcon />}>
							Add Todo
						</Button>
					</Grid>
					{submitted && (
						<Grid item xs={12}>
							<Typography variant="body1" color="success.main" align="center">
								Todo successfully added!
							</Typography>
						</Grid>
					)}
				</Grid>
			</form>
		</Paper>
	);
};

export default AddTodoForm;
