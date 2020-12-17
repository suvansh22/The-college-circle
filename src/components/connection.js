import axios from 'axios'

const api = axios.create({baseURL:"http://localhost:3001/database"})

export const collegeregistration = (payload)=>api.post('/collegeregistrationform',payload)
export const staffregistration = (payload)=>api.post('/staffregistrationform',payload)