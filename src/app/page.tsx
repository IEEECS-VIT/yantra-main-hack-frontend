import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <h1 className="w-2 h-2 custom">IEEE-CS</h1>
        <Button>Test button</Button>
      </MaxWidthWrapper>
    </main>
  );
}
