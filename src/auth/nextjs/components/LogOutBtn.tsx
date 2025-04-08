"use client";

import { Button } from "@/components/ui/button";
import { logOut } from "../actions";

export function LogOutButton() {
  return (
    <Button variant="destructive" onClick={logOut}>
      Log Out
    </Button>
  );
}
