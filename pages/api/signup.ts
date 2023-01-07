import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  const { email, password, firstName, lastName } = req.body

  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
        firstName,
        lastName,
      },
    })
  } catch (err) {
    res.status(401)
    res.json({ error: 'User already exists' })
    return
  }

  const token = jwt.sign(
    {
      email: user.email,
      password: user.id,
      time: Date.now(),
    },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  // will set into browser
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('SPOTIFY_ACCESS_TOKEN', token, {
      httpOnly: true, // not accessible by JS
      maxAge: 8 * 60 * 60,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  res.json(user)
}
