"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ShoppingCart} from "lucide-react";
import {memberRequest,useMember} from "./member-provider";
export function AddToCart({productId,prebuiltPCId}:{productId?:string;prebuiltPCId?:string}){const {user,loading}=useMember();const router=useRouter();const [busy,setBusy]=useState(false);const [message,setMessage]=useState("");return <div className="min-w-0 flex-1"><button type="button" className="member-cart-button" disabled={busy||loading} onClick={async()=>{if(!user){router.push("/login");return}setBusy(true);try{await memberRequest("cart",{operation:"add",productId,prebuiltPCId,quantity:1});setMessage("장바구니에 담았습니다.")}catch(e){setMessage((e as Error).message)}finally{setBusy(false)}}}><ShoppingCart size={16}/>{busy?"담는 중…":"장바구니"}</button>{message&&<p role="status" className="mt-2 break-words text-xs">{message}</p>}</div>}
