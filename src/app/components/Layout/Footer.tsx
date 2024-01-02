'use client';

import Link from 'next/link';

export default function Footer() {
  async function handleEmailClick() {
    await navigator.clipboard.writeText('mmmdo21@gmail.com');
    window.alert('이메일이 복사되었습니다 🥰');
  }
  return (
    <footer className="h-24 relative -translate-y-full flex justify-start items-center pl-8 mobile:pl-4">
      <div className="w-52 flex justify-between font-bold underline cursor-pointer">
        <Link href="https://github.com/Moondoyeon" target="_blank">
          깃허브
        </Link>
        <Link href="https://velog.io/@mmmdo21" target="_blank">
          블로그
        </Link>
        <span onClick={handleEmailClick}>이메일</span>
      </div>
    </footer>
  );
}
