import { useState } from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Container from '@mui/material/Container';
import { ToastContainer, toast } from 'react-toastify';
import css from './SearchBar.module.css'

export const SearchBar = ({onSubmit}) => {
    const [userName, setUserName] = useState('')

    const handleChange = e => {
        setUserName(e.currentTarget.value)
    };


    const handleSubmit = e => {
        e.preventDefault();
        if (userName.trim() === '') {
            toast("Please write correct city");
        }
        onSubmit(userName);
        setUserName('');
    };

    return (
        <Container maxWidth="sm">
            <form className={css.Form}
                onSubmit={handleSubmit}
                >
                <OutlinedInput
                        type="text"
                        name='repoName'
                        value={userName}
                        placeholder="User"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                    />
                    <Button type='submit' variant="contained">Search</Button>
            </form>
            <ToastContainer />
        </Container>
    );
};
