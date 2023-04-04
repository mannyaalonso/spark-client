import Client from "./api"
import axios from "axios"

export const BASE_URL = "http://127.0.0.1:5000"

export const createUser = async (email, password) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/signup`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    return data
  } catch (e) {
    return e.response.data.message
  }
}

export const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/signin`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    localStorage.setItem('token', data.access_token)
    localStorage.setItem('id', data.user._id.$oid)
    return data
  } catch (e) {
    return e.response.data.message
  }
}

export const updateUser = async (body, id) => {
  try {
    const res = await Client.put(`${BASE_URL}/users/${id.$oid}`, body)
    return res
  } catch (e) {
    return e.response.data.message
  }
}

export const getUsers = async (lat, long) => {
  if (lat === undefined || long === undefined) return
  try {
    const res = await Client.get(
      `${BASE_URL}/users/location?lat=${lat}&long=${long}&distance=100000`
    )
    return res
  } catch (e) {
    return e.response
  }
}
