import { sendPendingVisits } from '../src/services/sync';
import type { Visit } from '../src/types';
const sample:Visit={id:'1',agentId:'A-1',customer:'Demo Store',territory:'South-1',notes:'Follow up',createdAt:'2026-01-01T00:00:00Z',synced:false};
describe('offline sync queue',()=>{it('keeps visits queued without API configuration',async()=>{const result=await sendPendingVisits([sample],false);expect(result.syncedIds).toEqual([]);expect(result.message).toContain('remain safely queued')});it('demonstrates queue acknowledgement in demo mode',async()=>{const result=await sendPendingVisits([sample],true);expect(result.syncedIds).toEqual(['1']);expect(result.message).toContain('No remote server')})});
