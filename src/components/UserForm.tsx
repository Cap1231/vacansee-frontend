import React, { useState } from "react"
import { createUser } from "../lib/api/users"
import { User } from "../interfaces"

interface UserFormProps {
    users: User[]
    setUsers: Function
}

export const UserForm: React.FC<UserFormProps> = ({ users, setUsers }) => {
    const [name, setName] = useState<string>("")

    const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data: User = {
            name: name
        }

        try {
            const res = await createUser(data)
            console.log(res)

            if (res.status === 200) {
                setUsers([...users, res.data.user])
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err)
        }

        setName("")
    }

    return (
        <form onSubmit={handleCreateTodo}>
            <input
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                }}
            />
            <input type="submit" value="Add" disabled={!name} />
        </form>
    )
}