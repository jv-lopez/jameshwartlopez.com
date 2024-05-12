import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border ">
      <div className="flex flex-col lg:flex-row items-center justify-between p-4 container text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        <p>All rights reserved © Jameshwart Lopez {currentYear}</p>
        <nav className="flex items-center">
          <Link href={siteConfig.links.github}>
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.meta className="h-3 w-3 fill-current" />
              <span className="sr-only">Meta</span>
            </div>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
