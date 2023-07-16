import { db } from './db'

export async function getEventDetail(id: string) {
  return db.event.findUnique({ where: { id } })
}
