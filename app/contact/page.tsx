import Image from "next/image";
import Balancer from "react-wrap-balancer";

import profile from "@/public/images/profile.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className=" flex-col items-center space-y-3 gap-2 py-8">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Want to connect?
        </h1>
        <Balancer className="max-w-[750px] text-center text-lg font-light text-foreground">
          I enjoy connecting with like minded people, developers who wanted to
          create something useful and special.
        </Balancer>
      </section>
      <div>
        <Link
          href={`mailto:${siteConfig.email}`}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "flex items-center justify-start space-x-2 py-6"
          )}
        >
          <Icons.email className="h-6 w-6" />
          <span>{siteConfig.email}</span>
        </Link>

        <Link
          href={siteConfig.links.meta}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "flex items-center justify-start space-x-2 py-6"
          )}
        >
          <Icons.meta2 className="h-6 w-6" />
          <span>{siteConfig.name}</span>
        </Link>
        <Link
          href={siteConfig.links.twitter}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "flex items-center justify-start space-x-2 py-6"
          )}
        >
          <Icons.x className="h-6 w-6" />
          <span>{siteConfig.name}</span>
        </Link>

        <div></div>
      </div>
    </main>
  );
}
