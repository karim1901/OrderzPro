'use client'

import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";


const UserContext = createContext()


export const UserProvider = ({ children }) => {

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [employees, setEmployees] = useState(null)
    const [loading, setLoading] = useState(false);
    const pathname = usePathname()




    const veriryTokenGetUser = async () => {

        const path = pathname.split("/")[2]

        try {

            const res = await axios.get("/api/me")

            setLoading(true)

            console.log("data user", res.data)
            localStorage.setItem("user", JSON.stringify(res.data.user));

            setUser(res.data.user)


        } catch (error) {


            localStorage.removeItem("user")

            if (path == "dashboard" || path == "employee" || path == "orders" || path == "setting") {
                router.push("login")
            }




            console.log("verify token error", error.message)
        }


    }


    useEffect(() => {
        veriryTokenGetUser()

    }, []);


    const getEmployees = async () => {
        try {



        } catch (error) {
            toast.error(" get emlpoyees field !")
            console.log(error.message)
        }
    }

    useEffect(() => {
        getEmployees()
    }, [])







    return <UserContext.Provider value={{ loading, veriryTokenGetUser, user }}>
        {children}
    </UserContext.Provider>
}



export const useUser = () => {
    const context = useContext(UserContext)
    // if (!context) {
    //     throw new Error("useUser must be used within a UserProvider")
    // }

    return context

}