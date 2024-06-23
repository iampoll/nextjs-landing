import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button>
        Hello
        <Rocket className="size-4 ml-2" />
      </Button>
    </main>
  );
}
