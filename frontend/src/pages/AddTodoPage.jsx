import React from 'react';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from '../components/Header';
import AddTodoForm from '../components/AddTodoForm';

const AddTodoPage = () => {
	const navigate = useNavigate();

	const onBackClick = () => {
		navigate('/');
	};

  return (
    <Container maxWidth="md">
			<Header title={'Add New TODO'} 
			PreviousPageBtn={
				<Button
					variant="contained"
					color="primary"
					startIcon={<ArrowBackIcon />}
					onClick={onBackClick}
				>
				Back
			</Button>} />
        
			<AddTodoForm />
    </Container>
  );
};

export default AddTodoPage;
