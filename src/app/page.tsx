"use client";

import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <main>
      <Button
        onClick={() => {
          console.log("111111111");
        }}
      >
        butttton
      </Button>
    </main>
  );
}
