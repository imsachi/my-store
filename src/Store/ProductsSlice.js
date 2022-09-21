import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsData = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
  }
);

export const productsSlice = createSlice({
  name: "myproducts",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [getProductsData.pending]: (state, action) => {
      state.status = "loading";
      state.data = [];
    },
    [getProductsData.fulfilled]: (state, action) => {
      state.data = action.payload.products;
      state.status = "success";
    },
    [getProductsData.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
export default productsSlice.reducer;
