import Client from "./api"
import axios from "axios"

export const createUser = async (firstName, lastName, email, password) => {
  try {
    const { data } = await axios.post(
      "http://127.0.0.1:8888/signup",
      {
        email: email,
        password: password,
        vitals: { first_name: firstName, last_name: lastName },
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
      "http://127.0.0.1:8888/signin",
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
    return data
  } catch (e) {
    return e.response.data.message
  }
}

export const updateUser = async (body, id) => {
  try {
    const { data } = await Client.put(`/users/${id.$oid}`, body)
    return data
  } catch (e) {
    return e.response.data.message
  }
}
