import {headers} from 'next/headers';
import {notFound} from 'next/navigation';
import {canUseLocalAdmin} from '@/lib/admin/access';
import {AiManager} from '@/components/admin/ai-manager';
export const dynamic='force-dynamic';
export default async function Page(){if(!canUseLocalAdmin(await headers()))notFound();return <AiManager/>}
