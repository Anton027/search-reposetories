import * as React from 'react';
import Container from '@mui/material/Container';
import { Link } from './Header.styled'
import css from './Header.module.css'
export const Header = () => {
    return (
        <>
            <header>
                <Container fixed maxWidth="sm">
                    <nav className={css.Nav}>
                        <Link  to='/' end>Home</Link>
                        <Link  to='/user'>User</Link>
                    </nav>
                </Container>
            </header>
        </>
    )
}