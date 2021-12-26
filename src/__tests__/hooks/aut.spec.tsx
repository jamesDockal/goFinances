import React from "react";

import { renderHook, act } from "@testing-library/react-hooks";
import { mocked } from "ts-jest/utils";
import { AuthProvider, useAuth } from "../../hooks/Auth";
import { startAsync } from "expo-auth-session";

jest.mock("expo-auth-session");

describe("Auth Hook", () => {
  it("Should be able to sign in with Google account exits", async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValue({
      type: "success",
      user: {
        id: "any",
        email: "any@email.com",
        name: "any",
        photo: "any",
      },
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe("any@email.com");
  });
  it("Should not be able to sign in with Google account exits", async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValue({
      type: "cancel",
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());
    console.log("result.current.user", result.current.user);
    expect(result.current.user).not.toHaveProperty("id");
  });
});
