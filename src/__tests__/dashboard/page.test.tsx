import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"

import { redirect } from "next/navigation"

import Dashboard from "@/app/dashboard/page"

vi.mock("@kinde-oss/kinde-auth-nextjs/server", () => ({
  getKindeServerSession: vi
    .fn()
    .mockImplementationOnce(() => ({
      isAuthenticated: vi.fn(() => new Promise((resolve) => resolve(true))),
      getUser: vi.fn(
        () =>
          new Promise((resolve) =>
            resolve({
              given_name: "John",
              family_name: "Doe"
            })
          )
      )
    }))
    .mockImplementationOnce(() => ({
      isAuthenticated: vi.fn(() => new Promise((resolve) => resolve(false))),
      getUser: vi.fn()
    }))
}))

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    prefetch: vi.fn()
  }),
  redirect: vi.fn()
}))

describe("Dashboard page", () => {
  it("renders correctly", async () => {
    render(await Dashboard())

    expect(screen.getByText("Dashboard")).toBeDefined()
    expect(
      screen.getByRole("heading", { level: 3, name: "Welcome John Doe" })
    ).toBeDefined()
    expect(screen.getByText("Log out")).toBeDefined()
  })

  it("should redirect the user to the login page", async () => {
    const redirectMock = redirect as unknown as jest.Mock

    render(await Dashboard())

    expect(redirectMock).toHaveBeenCalledWith("/")
  })
})
