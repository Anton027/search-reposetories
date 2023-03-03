import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://api.github.com/search/users?q=';

export const fetchUsers = createAsyncThunk("users/fetchUserName", async (userName) => {
    try {
        const response = await axios.get(`${URL}${userName}`)
        return response.data.items;
    } catch (error) {
        return error.message;
    }
});