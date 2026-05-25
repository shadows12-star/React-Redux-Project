import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query: 'nature',
        activeTab: 'Photos',
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setSearchQueryResults: (state, action) => {
            state.loading = false; // Stop loading when results are set
            state.results = action.payload;
        }
        ,
        setLoading: (state, action) => {
            state.loading = action.payload;
            state.error = null; // Clear error when loading starts
        }
        ,setError: (state, action) => {
            state.error = action.payload;
            state.loading = false; // Stop loading when an error occurs
        }
        ,
        clearResults: (state) => {
            state.results = [];
            state.error = null; // Clear error when results are cleared
        },
     
    }
});

export const { setSearchQuery, setActiveTab, setSearchQueryResults, setLoading, setError, clearResults } = searchSlice.actions;
export default searchSlice.reducer;