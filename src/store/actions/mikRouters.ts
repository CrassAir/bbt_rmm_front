import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import api, {apiError} from "../../api";
import {MikRouterType} from "../../models/IMRouter";

export const getMikRouters = createAsyncThunk(
    'getMikRouters',
    async (_, thunkAPI) => {
        try {
            const {data} = await api.get<MikRouterType[]>('/mikrotik_routers/')
            data.reverse()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(apiError(e as Error | AxiosError))
        }
    }
)

export const getMikRouter = createAsyncThunk(
    'getMikRouter',
    async (id: string, thunkAPI) => {
        try {
            const {data} = await api.get<MikRouterType>(`/mikrotik_routers/${id}/`)
            data.status_log.reverse()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(apiError(e as Error | AxiosError))
        }
    }
)

export const createMikRouters = createAsyncThunk(
    'createMikRouters',
    async (post: any, thunkAPI) => {
        try {
            const {data} = await api.post<MikRouterType>('/mikrotik_routers/', post)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(apiError(e as Error | AxiosError))
        }
    }
)

export const updateMikRouters = createAsyncThunk(
    'updateMikRouters',
    async (post: any, thunkAPI) => {
        try {
            const {data} = await api.put<MikRouterType>('/mikrotik_routers/', post)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(apiError(e as Error | AxiosError))
        }
    }
)

export const deleteMikRouters = createAsyncThunk(
    'deleteMikRouters',
    async (id: string, thunkAPI) => {
        try {
            await api.delete<MikRouterType>(`/mikrotik_routers/${id}/`)
            return id
        } catch (e) {
            return thunkAPI.rejectWithValue(apiError(e as Error | AxiosError))
        }
    }
)

export const sendScriptMikRouters = createAsyncThunk(
    'sendScriptMikRouters',
    async (post: any, thunkAPI) => {
        try {
            const {data} = await api.post('/mikrotik_routers/command/send_script/', post)
            console.log(data)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(apiError(e as Error | AxiosError))
        }
    }
)
