import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;
    &.active{
        background-color: blue;
        color: #fff;
    }
`