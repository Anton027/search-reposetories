import { useState } from 'react';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Container from '@mui/material/Container';
export const SearchBar = ({onSubmit}) => {
    const [userName, setUserName] = useState('')



    const handleChange = e => {
        setUserName(e.currentTarget.value)
    };


    const handleSubmit = e => {
        e.preventDefault();
        if (userName.trim() === '') {
            // alert('Please write correct city');
            return;
        }
        onSubmit(userName);
        setUserName('');
    };

    return (
        <Container maxWidth="sm">
            <form
                // className={css.SearchForm}
                onSubmit={handleSubmit}
                >
                    <OutlinedInput
                        // className={css.Input}
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
        </Container>
    );
};
