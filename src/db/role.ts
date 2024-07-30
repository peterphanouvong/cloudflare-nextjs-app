import { count, eq } from "drizzle-orm"
import { db } from "./index"
import { rolesTable } from "./schema"

export const getRoles = async () => {
  return await db.select().from(rolesTable)
}

export const getRoleById = async (id: number) => {
  const data = await db.select().from(rolesTable).where(eq(rolesTable.id, id))

  return data[0]
}

export const getRoleByName = async (name: string) => {
  const data = await db
    .select()
    .from(rolesTable)
    .where(eq(rolesTable.name, name))

  return data[0]
}

export const insertRole = async (name: string) => {
  return await db.insert(rolesTable).values({ name }).returning()
}

export const updateRole = async (id: number, name: string) => {
  return await db
    .update(rolesTable)
    .set({ name })
    .where(eq(rolesTable.id, id))
    .returning()
}

export const deleteRoleById = async (id: number) => {
  return await db.delete(rolesTable).where(eq(rolesTable.id, id))
}

export const getRolesCount = async () => {
  return await db.select({ count: count() }).from(rolesTable)
}
