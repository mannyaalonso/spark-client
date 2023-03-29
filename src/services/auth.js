import Client from "./api"

export const checkSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    return res
  } catch (e) {
    return e.response.data.message
  }
}
