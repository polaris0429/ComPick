import Link from "next/link";
import { MemberNav } from "./member-nav";
export function MemberShell({children}:{children:React.ReactNode}){return <div className="member-page"><header className="member-header"><Link className="brand" href="/">Com<span>Pick</span></Link><MemberNav/></header><main className="member-main">{children}</main></div>}
