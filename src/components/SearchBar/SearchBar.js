import { useState } from 'react';

export const SearchBar = ({onSubmit}) => {
    const [repoName, setRepoName] = useState('')



    const handleChange = e => {
        setRepoName(e.currentTarget.value)
    };


    const handleSubmit = e => {
        e.preventDefault();
        if (repoName.trim() === '') {
            // alert('Please write correct city');
            return;
        }
        onSubmit(repoName);
        setRepoName('');
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
                        value={repoName}
                        placeholder="repository"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                    />
                    <button
                        // className={css.SubmitBtn}
                        type="submit"
                    >
                        Search Repo
                    </button>
                </form>
        </>
    );
};
