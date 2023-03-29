import Client from "./api"

export const checkSession = async () => {
  try {
    const { data } = await Client.get("/auth/session")
    return data
  } catch (error) {
    return error
  }
}
