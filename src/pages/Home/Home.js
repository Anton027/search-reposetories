import { NavLink } from "react-router-dom"

export const Home = ({ users }) => {

    return (
        <>
            <h1>Home</h1>
            <section>
                { users !== null && users !== undefined  ?
                        <>
                            <h2>GitHub Users</h2>
                        <ul>
                            
                                {
                                    users.map(({ id, login,html_url,repos_url
 }) =>
                                        <li key={id}>
                                            <NavLink to={html_url}>{login}</NavLink>
                                            <span> / </span>
                                            <NavLink to={repos_url}>Repo</NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                    </> :
                    <h2>Not found</h2>
                }
            </section>
        </>
    )
}