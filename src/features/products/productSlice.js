import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
  {
    id: "1",
    title: "men's cloth",
    content: "good cloth",
    photo:
      "https://assets.vogue.com/photos/61b8faa2509a36e633df7b63/1:1/w_2667,h_2667,c_limit/slide_4.jpg",
  },
  {
    id: "2",
    title: "women's cloth",
    content: "nice one",
    photo:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635949166-17-02-2020_velvasheen_regulartee_olive_161477-ol_blr_1.jpg",
  },
  {
    id: "3",
    title: "women's cloth",
    content: "good one",
    photo:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635949166-17-02-2020_velvasheen_regulartee_olive_161477-ol_blr_1.jpg",
  },
];

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
                const response = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                return response.data;
        } catch (error) {
                console.log(error);
            }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        itemAdded(state, action) {
            state.push(action.payload)
        }
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
    },
})

export const {itemAdded} = productsSlice.actions

export default productsSlice.reducer;