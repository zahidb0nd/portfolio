import * as React from "react"
import { cn } from "@/lib/utils"
import { isSafeUrl } from "@/lib/security"

const SecureLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a">>(
  ({ className, href, target, rel, children, ...props }, ref) => {
    const { safeHref, finalRel } = React.useMemo(() => {
      const url = href || ""
      const safe = isSafeUrl(url) ? url : "#"

      if (import.meta.env.DEV && href && href !== safe) {
        console.warn(`SecureLink: unsafe href blocked: ${href}`)
      }

      const isExternal = target === "_blank"
      let calculatedRel = rel || ""

      if (isExternal) {
        if (!calculatedRel.includes("noopener")) calculatedRel = (calculatedRel + " noopener").trim()
        if (!calculatedRel.includes("noreferrer")) calculatedRel = (calculatedRel + " noreferrer").trim()
      }

      return { safeHref: safe, finalRel: calculatedRel }
    }, [href, target, rel])

    return (
      <a
        ref={ref}
        href={safeHref}
        target={target}
        rel={finalRel || undefined}
        className={cn(className)}
        {...props}
      >
        {children}
      </a>
    )
  }
)
SecureLink.displayName = "SecureLink"

export { SecureLink }
