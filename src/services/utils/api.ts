import { getItem } from './storage'

const getBearerToken = () => {
    return getItem('token');
}

const headers = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getBearerToken()}`
})

const makePostOptions = (data: any) => ({
    method: 'POST',
    mode: 'cors',
    headers: headers(),
    body: JSON.stringify(data)
})

const deleteOptions = () => ({
    method: 'DELETE',
    mode: 'cors',
    headers: headers()
})

const getOptions = () => ({
    method: 'GET',
    headers: headers()
})

const request = async (url: string, options: any | undefined) => {
    return await fetch(url, options);
}

export const get = async (url: string) => await request(url, getOptions())
export const post = async (url: string, data: any) => await request(url, makePostOptions(data))
export const del = async (url: string, id: string) => await request(url + id, deleteOptions())
