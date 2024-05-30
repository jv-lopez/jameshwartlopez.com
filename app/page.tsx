import Image from "next/image";
import Balancer from "react-wrap-balancer";

import profile from "@/public/images/profile.png";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="mx-auto flex max-w-[980px] flex-col items-center space-y-3 gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-16">
        <Image
          src={profile}
          height={250}
          width={250}
          priority
          alt="Jameshwart Lopez profile"
          className="rounded-full my-3"
        />
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Creating something that matters
        </h1>
        <Balancer className="max-w-[750px] text-center text-lg font-light text-foreground">
          As a full-stack engineer, I want to build something special. Something
          I want to share, something that I will be proud of.
        </Balancer>
        <Link
          href={"/experience"}
          className={cn(
            buttonVariants({
              size: "xl",
            })
          )}
        >
          Learn More
        </Link>
      </section>
    </main>
  );
}
