import React from "react"
import { UserItem } from "./UserItem"
import { User } from "../interfaces/"

interface UserListProps {
    users: User[]
    setUsers: Function
}

export const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Users</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user: User, index:  number) => {
                    return (
                        <UserItem
                            key={index}
                            user={user}
                            setUsers={setUsers}
                        />
                    )
                })
            }
            </tbody>
        </table>
    )
}
