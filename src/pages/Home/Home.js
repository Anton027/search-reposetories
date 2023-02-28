// import { Loader } from "components/Loader/Loader"
import { NavLink } from "react-router-dom"
import * as React from 'react';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import css from './Home.module.css'

export const Home = ({ users }) => {
    
    return (

        <section>
            <Container>
                <h1 className={css.VisuallyHidden}>Home</h1>
                
                { users !== null && users !== undefined  ?
                        <>
                            <h2 className={css.Title}>GitHub Users</h2>
                        <List>
                            {
                                users.map(({ id, login,html_url,avatar_url
                                }) =>
                                    <ListItem key={id} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={login} src={avatar_url} />
                                        </ListItemAvatar>
                                        
                                        <ListItemText
                                            
                                            secondary={
                                                <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    <NavLink to={html_url}>{login}</NavLink>
                                                </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                        
                                        </ListItem>
                                        

                                    )
                                }
                        </List>
                    </> :
                    <h2 className={css.Title}>Please enter User name  of GitHub</h2>
                    }
                </Container>
            </section>
    )
}