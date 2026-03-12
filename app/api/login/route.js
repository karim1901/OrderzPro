
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/user';
import { connectDB } from '@/utils/connectDB';
import Employee from '@/models/employee';

connectDB()

const SECRET_KEY = process.env.JWT_SECRET || 'mysecretkey';


export async function POST(req) {

  try {


    const { username, password } = await req.json();
    // Fetch user from DB (demo purpose)
    // In real app: fetch user from DB
    console.log(username)


    const storedUser = await User.findOne({ username: username });


    if (username !== storedUser?.username) {

      const storedEmployee = await Employee.findOne({ username: username });


      if (username !== storedEmployee.username) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }

      const isMatch = await bcrypt.compare(password, storedEmployee.password);

      if (!isMatch) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      // Create JWT Token
      const token = jwt.sign({ id: storedEmployee._id }, SECRET_KEY, { expiresIn: '7d' });

      const response = NextResponse.json({
        message: 'Login successful', user: {
          _id: storedEmployee._id,
          fullname: storedEmployee.fullname,
          username: storedEmployee.username,
          commission: storedEmployee.commission,
          idOrder: storedEmployee.idOrder,
          isActive: storedEmployee.isActive,
          gender: storedEmployee.gender,
          isPay: storedEmployee.isPay,
          apikey: storedEmployee.apikey,
          role: storedEmployee.role,
          createdAt: storedEmployee.createdAt
        }
      });
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      });

      return response;




    }

    const isMatch = await bcrypt.compare(password, storedUser.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Create JWT Token
    const token = jwt.sign({ id: storedUser._id }, SECRET_KEY, { expiresIn: '7d' });

    const response = NextResponse.json({
      message: 'Login successful', user: {
        _id: storedUser._id,
        fullname: storedUser.fullname,
        username: storedUser.username,
        email: storedUser.email,
        isVerified: storedUser.isVerified,
        isApi: storedUser.isApi,
        role: storedUser.isApi,
        createdAt: storedUser.createdAt
      }
    });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    return response;
  } catch (error) {
    console.log("error :" , error.message)
    return NextResponse.json({message:error.message},{status:401})
  }
}
