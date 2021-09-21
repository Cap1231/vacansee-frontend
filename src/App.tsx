import React, { useState, useEffect } from "react"
// import { UserList } from "./components/UserList"
// import { UserForm } from "./components/UserForm"

// import { getUsers } from "./lib/api/users"
// import { User} from "./interfaces"

const App: React.FC = () => {
  // const [users, setUsers] = useState<User[]>([])

  // const handleGetUsers = async () => {
  //   try {
  //     const res = await getUsers()
  //     console.log(res)

  //     if (res?.status === 200) {
  //       setUsers(res.data.users)
  //     } else {
  //       console.log(res.data.message)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   handleGetUsers()
  // }, [])

  // return (
  //     <>
  //       <h1>User App</h1>
  //       {/* <UserForm users={users} setUsers={setUsers} />
  //       <UserList users={users} setUsers={setUsers} /> */}
  //     </>
  // )
  return (
    <>
      <h1>User App</h1>
    </>
  )
}

export default App
