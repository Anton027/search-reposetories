import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import Stack from '@mui/material/Stack';
export const Header = () => {
    return (
        <>
            <header>
                <nav className={css.Nav}>
                    <Container fixed maxWidth="sm">
                        <Stack direction="row" spacing={2}>
                            <Grid item xs={8}>
                                <NavLink  to='/' end>Home</NavLink>
                                </Grid>
                            <Grid item xs={8}>
                                <NavLink to='/user'>User</NavLink>
                                </Grid>
                        </Stack>
                    </Container>
                </nav>
            </header>
        </>
    )
}