import { useState } from 'react';

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
        <>
            <form
                // className={css.SearchForm}
                onSubmit={handleSubmit}
                >
                    <input
                        // className={css.Input}
                        type="text"
                        name='repoName'
                        value={userName}
                        placeholder="user"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                    />
                    <button
                        // className={css.SubmitBtn}
                        type="submit"
                    >
                        Search
                    </button>
                </form>
        </>
    );
};
