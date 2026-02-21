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
    const safeHref = isSafeUrl(href || "") ? href : "#"

    if (import.meta.env.DEV && href && href !== safeHref) {
      console.warn(`SecureLink: unsafe href blocked: ${href}`)
    }

    const isExternal = target === "_blank"

    let finalRel = rel || ""
    if (isExternal) {
      if (!finalRel.includes("noopener")) finalRel = (finalRel + " noopener").trim()
      if (!finalRel.includes("noreferrer")) finalRel = (finalRel + " noreferrer").trim()
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
