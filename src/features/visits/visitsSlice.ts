import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { Visit } from '../../types';
const slice=createSlice({name:'visits',initialState:[] as Visit[],reducers:{
 addVisit(state,action:PayloadAction<Visit>){const index=state.findIndex(v=>v.id===action.payload.id);if(index<0)state.push(action.payload);},
 markSynced(state,action:PayloadAction<string>){const v=state.find(v=>v.id===action.payload);if(v)v.synced=true;}
}});
export const {addVisit,markSynced}=slice.actions;
export const selectVisits=(state:RootState)=>state.visits;
export default slice.reducer;
