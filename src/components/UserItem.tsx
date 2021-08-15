import React from "react"
import { deleteUser } from "../lib/api/users"
import { User } from "../interfaces"

interface UserItemProps {
    user: User
    setUsers: Function
}

export const UserItem: React.FC<UserItemProps> = ({ user, setUsers }) => {
    const handleDeleteUser = async (id: number) => {
        try {
            const res = await deleteUser(id)
            console.log(res)

            if (res?.status === 200) {
                setUsers((prev: User[]) => prev.filter((user: User) => user.id !== id))
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <tr>
            <td>{user.name}</td>
            <td>
                <button onClick={() => handleDeleteUser(user.id || 0)}>Delete</button>
            </td>
        </tr>
    )
}
