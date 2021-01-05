import axios from 'axios'

const api = axios.create({baseURL:"http://localhost:3001/database"})

export const collegeregistration = (payload)=>api.post('/collegeregistrationform',payload)
export const staffregistration = (payload)=>api.post('/staffregistrationform',payload)
export const getcollegeregistrationform = (id) => api.get(`/getcollegeregistrationform/${id}`)
export const deletecollegeregistration = (id) => api.delete(`/deletecollegeregistration/${id}`)
export const approvecollegeregistration = (id) => api.get(`/approvecollegeregistration/${id}`)
export const login = (payload) =>api.post('/login',payload)
export const addpost = (payload) =>api.post('/addpost',payload)
export const getpost = (name) => api.get(`/getpost/${name}`)
export const addcompany = (payload) =>api.post('/addcompany',payload, {
    headers: {
        'content-type': 'multipart/form-data',
    },
})
export const getcompany = (name) => api.get(`/getcompany/${name}`)
export const getcollegename = () => api.get('/getcollegename')