import Client from "./api"
import axios from "axios"

export const BASE_URL = "http://127.0.0.1:5000"

export const createUser = async (email, password) => {
  try {
    const { data } = await axios.post(
      "http://127.0.0.1:5000/signup",
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
      "http://127.0.0.1:5000/signin",
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
    const res = await Client.put(
      `http://127.0.0.1:5000/users/${id.$oid}`,
      body
    )
    return res
  } catch (e) {
    return e.response.data.message
  }
}

export const getUsers = async (lat, long) => {
  try {
    const res = await Client.get(
      `http://127.0.0.1:5000/users/location?lat=${lat}&long=${long}&distance=100000`
    )
    return res
  } catch (e) {
    return e.response
  }
}
