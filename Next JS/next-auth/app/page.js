"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function pages() {
  const { data: session } = useSession()
  console.log(111,session?session.user.image:session)
  if(session) {
    return <>
    <div className="image">
      <img src={session?session.user.image:session} alt="No Profile Image" />
    </div>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}