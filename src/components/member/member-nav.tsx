"use client";
import Link from "next/link";
import {useMember,memberRequest} from "./member-provider";
import {useState} from "react";
export function MemberNav(){const {user,loading,setUser}=useMember();const [error,setError]=useState("");return <span className="flex items-center gap-4">{loading?<span>회원 확인 중</span>:user?<><Link href="/account">{user.name}님 · 내 정보</Link><button onClick={async()=>{try{await memberRequest("logout",{});setUser(null);setError("")}catch(e){setError((e as Error).message)}}}>로그아웃</button></>:<><Link href="/login">로그인</Link><Link href="/register">회원가입</Link></>}<Link href="/cart">장바구니</Link>{error&&<span role="alert">{error}</span>}</span>}
