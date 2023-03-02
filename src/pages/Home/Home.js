import { NavLink } from "react-router-dom"
import * as React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import css from './Home.module.css'
import { getUsers } from "redux/selectors";
import { useSelector } from "react-redux";


export const Home = () => {
    const users = useSelector(getUsers);

    return (
        <section className={css.Section}>
            <Container >
                <h1 className={css.VisuallyHidden}>Home</h1>
                        <h2 className={css.Title}>GitHub Users</h2>
                        <List className={css.List}>
                            {
                                users.map(({ id, login,html_url,avatar_url
                                }) =>
                                    <ListItem key={id}
                                        alignItems="flex-start"
                                        className={css.ListItem}
                                    >
                                        <NavLink to={html_url}>
                                            <ListItemAvatar>
                                                <Avatar alt={login} src={avatar_url} />
                                            </ListItemAvatar>
                                            <p>{login}</p>
                                        </NavLink>
                                    </ListItem>
                                    )
                                }
                        </List>
                </Container>
            </section>
    )
}