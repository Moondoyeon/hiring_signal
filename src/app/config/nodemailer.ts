import nodemailer from 'nodemailer';

// 메일 주소 및 앱 비밀번호 선언하기 (gmail)
const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_PASSWORD;

// transporter 생성하기
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // 아래 secure 옵션을 사용하려면 465 포트를 사용해야함
  secure: true, // true for 465, false for other ports
  auth: {
    user: email,
    pass: pass,
  },
});

export async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const mailData = {
    subject: `[채용시그널 포트폴리오] ${name}`,
    from: `${email}`,
    to: process.env.NEXT_PUBLIC_EMAIL,
    //	html 옵션 또는 text 옵션 둘중 하나만 사용해야함
    html: `
    <h2> 회사명: ${name}</h2>
    </br>
    <p>${message}</p>
    <div>${new Date().toLocaleString()}에 보낸 메일입니다</div>
    `,
    //	attachments 옵션으로 첨부파일도 전송 가능함
    //	attachments : [첨부파일]
  };
  return transporter.sendMail(mailData);
}
