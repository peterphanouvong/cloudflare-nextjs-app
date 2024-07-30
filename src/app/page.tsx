"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    redirect("/api/auth/login")
  }, [])

  return <></>
}

export default Home
