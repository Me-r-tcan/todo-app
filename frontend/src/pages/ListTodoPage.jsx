import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import ConfirmationModal from '../components/ConfirmationModal';
import { useNavigate } from 'react-router-dom';
import useTodoStore from '../stores/todoStore';

const ListTodoPage = () => {
	const [deleteItemId, setDeleteItemId] = useState(null);
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
	const deleteTodo = useTodoStore((state) => state.deleteTodo);

	const navigate = useNavigate();

	const handleDeleteClick = (id) => {
		setDeleteItemId(id);
		setIsConfirmationOpen(true);
	};

	const handleConfirmDelete = () => {
		deleteTodo(deleteItemId);
		setIsConfirmationOpen(false);
	};

	const handleCancelDelete = () => {
		setIsConfirmationOpen(false);
		setDeleteItemId(null);
	};

	const handleAddTodo = () => {
		navigate('/add');
	};

	return (
		<Container maxWidth="md">
			<Header title={'TODO List'}
				NextPageBtn={
					<Button
						variant="contained"
						color="primary"
						startIcon={<AddIcon />}
						onClick={handleAddTodo}
					>
						Add Todo
					</Button>} />

			<TodoList onDeleteConfirmation={handleDeleteClick} />

			<ConfirmationModal
				open={isConfirmationOpen}
				onClose={handleCancelDelete}
				onConfirm={handleConfirmDelete}
			/>
		</Container>
	);
};

export default ListTodoPage;
