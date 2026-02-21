import * as React from "react"
import { cn } from "@/lib/utils"

const isSafeUrl = (url: string) => {
  if (!url) return true
  try {
    // We use a dummy base because standard URL() constructor throws for relative URLs
    // We use 'http://dummy.com' as base so relative URLs inherit 'http' protocol
    const parsed = new URL(url, "http://dummy.com")

    // Whitelisted protocols
    const allowedProtocols = ["http:", "https:", "mailto:", "tel:"]

    return allowedProtocols.includes(parsed.protocol)
  } catch {
    // If URL parsing fails, consider it unsafe
    return false
  }
}

const SecureLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a">>(
  ({ className, href, target, rel, children, ...props }, ref) => {
    // Memoize the safe href calculation to avoid expensive URL parsing on every render
    const { safeHref, finalRel } = React.useMemo(() => {
      const checkedHref = isSafeUrl(href || "") ? href : "#"

      const isExternal = target === "_blank"
      let computedRel = rel || ""

      if (isExternal) {
        if (!computedRel.includes("noopener")) computedRel = (computedRel + " noopener").trim()
        if (!computedRel.includes("noreferrer")) computedRel = (computedRel + " noreferrer").trim()
      }

      return { safeHref: checkedHref, finalRel: computedRel }
    }, [href, target, rel])

    if (import.meta.env.DEV && href && href !== safeHref) {
      console.warn(`SecureLink: unsafe href blocked: ${href}`)
    }

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
