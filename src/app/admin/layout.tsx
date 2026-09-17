import {headers} from 'next/headers';
import {notFound} from 'next/navigation';
import {canUseLocalAdmin} from '@/lib/admin/access';
import {AdminShell} from '@/components/admin/admin-shell';
export const dynamic='force-dynamic';
export default async function Layout({children}:{children:React.ReactNode}){if(!canUseLocalAdmin(await headers()))notFound();return <AdminShell>{children}</AdminShell>}
