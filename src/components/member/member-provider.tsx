"use client";
import {createContext,useCallback,useContext,useEffect,useRef,useState} from "react";
export type Member={id:string;loginId:string;email:string;name:string;phone:string;address:string;addressDetail:string};
export async function memberRequest(action:string,body?:unknown){const r=await fetch(`/api/member/${action}`,{cache:"no-store",...(body!==undefined?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}:{})});const data=await r.json();if(!r.ok)throw new Error(data.error??"요청에 실패했습니다.");return data}
const Context=createContext<{user:Member|null;loading:boolean;refresh:()=>Promise<void>;setUser:(u:Member|null)=>void}>({user:null,loading:true,refresh:async()=>{},setUser:()=>{}});
export function MemberProvider({children}:{children:React.ReactNode}){
 const [user,setMember]=useState<Member|null>(null);const [loading,setLoading]=useState(true);const version=useRef(0);
 const setUser=useCallback((u:Member|null)=>{version.current++;setMember(u);setLoading(false)},[]);
 const refresh=useCallback(async()=>{const n=++version.current;try{const data=await memberRequest("me");if(n===version.current)setMember(data.user)}finally{if(n===version.current)setLoading(false)}},[]);
 useEffect(()=>{const sync=()=>{void refresh().catch(()=>{})};sync();window.addEventListener("focus",sync);return()=>window.removeEventListener("focus",sync)},[refresh]);
 return <Context.Provider value={{user,loading,refresh,setUser}}>{children}</Context.Provider>;
}
export const useMember=()=>useContext(Context);
