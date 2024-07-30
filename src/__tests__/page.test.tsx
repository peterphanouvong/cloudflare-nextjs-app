import { describe, expect, it, vi } from "vitest"
import { render } from "@testing-library/react"

import { redirect } from "next/navigation"

import Homepage from "../app/page"

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    prefetch: vi.fn()
  }),
  redirect: vi.fn()
}))

describe("Homepage", () => {
  const redirectMock = redirect as unknown as jest.Mock

  it("redirects to /api/auth/login", () => {
    render(<Homepage />)
    expect(redirectMock).toHaveBeenCalledWith("/api/auth/login")
  })
})
