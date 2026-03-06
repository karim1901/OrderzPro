
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/user';
import { connectDB } from '@/utils/connectDB';

connectDB()

const SECRET_KEY = process.env.JWT_SECRET || 'mysecretkey';


export async function POST(req) {
  const { username, password } = await req.json();
  // Fetch user from DB (demo purpose)
  // In real app: fetch user from DB
  console.log(username)

  const storedUser = await User.findOne({username:username});


  if (username !== storedUser.username) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, storedUser.password);

  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  // Create JWT Token
  const token = jwt.sign({id:storedUser._id}, SECRET_KEY, { expiresIn: '7d' });

  const response = NextResponse.json({ message: 'Login successful' , user:{
    _id:storedUser._id,
    username:storedUser.username,
    email:storedUser.email,
    isVerified:storedUser.isVerified
  }});
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  return response;
}
