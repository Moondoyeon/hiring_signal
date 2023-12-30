import { sendEmail } from '@/config/nodemailer';
import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';
const DB_URI = process.env.DB_CONNECTION_STRING!;
const dbConnection = await new MongoClient(DB_URI, {
  maxConnecting: 1,
  maxPoolSize: 1,
}).connect();

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const db = dbConnection.db('hiringSignal');
      const count = await db.collection('signals').countDocuments();

      return NextResponse.json({ count });
    } catch (err) {
      return NextResponse.json({ message: ' 시그널 카운트 조회 실패' });
    }
  }
}
export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const body = await req.json();
    const { name, email, message } = body;
    try {
      const db = dbConnection.db('hiringSignal');

      await db.collection('signals').insertOne({
        name: name,
        email: email,
        message: message,
        time: new Date(),
      });

      return sendEmail({ name, email, message })
        .then(
          () =>
            new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
              status: 200,
            }),
        )
        .catch((error) => {
          console.error(error);

          return new Response(JSON.stringify({ message: '메일 전송에 실패함' }), {
            status: 500,
          });
        });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: ' 시그널 입력 데이터 추가 실패' });
    }
  }
}
