import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import Header from '../components/Header';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditTodoForm from '../components/EditTodoForm';

const EditTodoPage = () => {
	const navigate = useNavigate();

	const onBackClick = () => {
		navigate('/');
	};

	return (
		<Container maxWidth="md">
			<Header title={'Edit TODO'}
				PreviousPageBtn={
					<Button
						variant="contained"
						color="primary"
						startIcon={<ArrowBackIcon />}
						onClick={onBackClick}
					>
						Back
					</Button>} />

			<EditTodoForm />
		</Container>
	);
};

export default EditTodoPage;
