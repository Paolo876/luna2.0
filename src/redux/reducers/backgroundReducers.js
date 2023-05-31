import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** fetchBackground
*   @desc fetch a random background from unsplash
*/

export const fetchBackground = createAsyncThunk('background/fetchBackground', async ( payload, { rejectWithValue }) => {
    try {
        const res = await fetch("https://source.unsplash.com/1920x1080/?wallpapers/");
        return res.url;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})

