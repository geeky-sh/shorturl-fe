'use client';
import Image from 'next/image'
import Login from './components/login'
import { isLoggedIn } from './utils/session'
import { redirect } from 'next/dist/server/api-utils'
import { useEffect, useState } from 'react'
import URLs from './components/urls';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if(isLoggedIn()) {
      router.replace("/urls")
      return
    }
    router.replace("/login")
  }, [router])

  return "loading"
}
