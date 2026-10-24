import * as SQLite from 'expo-sqlite';
import type { Visit } from '../types';
let db:SQLite.SQLiteDatabase;
export async function initDatabase(){db=await SQLite.openDatabaseAsync('fieldtrack.db');await db.execAsync(`CREATE TABLE IF NOT EXISTS visits (id TEXT PRIMARY KEY NOT NULL, agent_id TEXT NOT NULL, customer TEXT NOT NULL, territory TEXT NOT NULL, notes TEXT NOT NULL, created_at TEXT NOT NULL, synced INTEGER NOT NULL DEFAULT 0);`);}
function database(){if(!db)throw new Error('Database not initialized');return db;}
export async function saveVisit(v:Visit){await database().runAsync('INSERT OR REPLACE INTO visits (id,agent_id,customer,territory,notes,created_at,synced) VALUES (?,?,?,?,?,?,?)',v.id,v.agentId,v.customer,v.territory,v.notes,v.createdAt,v.synced?1:0);}
export async function getVisits():Promise<Visit[]>{const rows=await database().getAllAsync<any>('SELECT id,agent_id,customer,territory,notes,created_at,synced FROM visits ORDER BY created_at ASC');return rows.map(r=>({id:r.id,agentId:r.agent_id,customer:r.customer,territory:r.territory,notes:r.notes,createdAt:r.created_at,synced:!!r.synced}));}
export async function setVisitSynced(id:string){await database().runAsync('UPDATE visits SET synced=1 WHERE id=?',id);}
