"use client";

import Link from "next/link";

export default function Footer() {
  async function handleEmailClick() {
    await navigator.clipboard.writeText("mmmdo21@gmail.com");
    window.alert("이메일이 복사되었습니다 🥰");
  }
  return (
    <footer className="h-20 relative -translate-y-full flex justify-center items-center border-t-2 border-black">
      <div className="w-52 flex justify-between font-bold underline cursor-pointer">
        <Link href="https://github.com/Moondoyeon" target="_blank">
          GitHub
        </Link>
        <Link href="https://velog.io/@mmmdo21" target="_blank">
          Blog
        </Link>
        <span onClick={handleEmailClick}>Email</span>
      </div>
    </footer>
  );
}
