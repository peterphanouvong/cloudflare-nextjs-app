import { count, eq } from "drizzle-orm"
import { db } from "./index"
import {
  InsertUserRole,
  SelectUser,
  userRolesTable,
  usersTable
} from "./schema"

export const getUsers = async () => {
  return await db.select().from(usersTable)
}

export const getUserById = async (id: number) => {
  return await db.select().from(usersTable).where(eq(usersTable.id, id))
}

export const getUserByExtId = async (extId: string) => {
  return await db.select().from(usersTable).where(eq(usersTable.extId, extId))
}

export const getUserByEmail = async (email: string) => {
  return await db.select().from(usersTable).where(eq(usersTable.email, email))
}

export const createUser = async (user: SelectUser) => {
  return await db.insert(usersTable).values(user).returning()
}

export const deleteUser = async (id: number) => {
  return await db.delete(usersTable).where(eq(usersTable.id, id))
}

export const updateUser = async (id: number, user: SelectUser) => {
  return await db
    .update(usersTable)
    .set(user)
    .where(eq(usersTable.id, id))
    .returning()
}

export const getUsersCount = async () => {
  return await db.select({ count: count() }).from(usersTable)
}

export const assignRoleToUser = async ({ userId, roleId }: InsertUserRole) => {
  return await db.insert(userRolesTable).values({ userId, roleId }).returning()
}
