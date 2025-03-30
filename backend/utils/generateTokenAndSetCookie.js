import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });

  res.cookie('token', token, {
    httpOnly: true, // prevents client-side JS from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // use secure cookies in production
    sameSite: 'strict', // prevent CORS attacks
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })

  return token;
};

