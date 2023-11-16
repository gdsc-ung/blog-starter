'use client';

import { Card, Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default function Home() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    const user = await prisma.user.create({
      data: {
        name: email,
        email: password,
      },
    })
  }

  return (
    <main className='h-screen flex justify-center items-center'>
      <Card className="w-80">
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </main>
  )
}
