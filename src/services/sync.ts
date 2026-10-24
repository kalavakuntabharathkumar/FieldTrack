import type { Visit } from '../types';
export async function sendPendingVisits(pending:Visit[], apiConfigured:boolean):Promise<{syncedIds:string[];message:string}>{
 if(!apiConfigured)return {syncedIds:[],message:`${pending.length} visit(s) remain safely queued. Enable API mode only after configuring a real authenticated endpoint.`};
 // Demo behavior only: replace this block with POST requests and per-item acknowledgement from your backend.
 return {syncedIds:pending.map(v=>v.id),message:`Demo queue processed ${pending.length} visit(s). No remote server was contacted.`};
}
