import client from "./client"
import { User } from "../../interfaces/index"

// todo一覧を取得
export const getUsers = () => {
    return client.get("/users")
}

// todoを新規作成
export const createUser = (data: User) => {
    return client.post("/users", data)
}

// todoを削除
export const deleteUser = (id: number) => {
    return client.delete(`/users/${id}`)
}