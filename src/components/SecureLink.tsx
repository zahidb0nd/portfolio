import * as React from "react"
import { cn } from "@/lib/utils"

const isSafeUrl = (url: string) => {
  if (!url) return true
  const lowerUrl = url.trim().toLowerCase()

  // Handle protocol-relative URLs (start with //) - usually safe
  if (lowerUrl.startsWith("//")) return true

  // Regex to extract protocol
  // Scheme must start with a letter, followed by letters, digits, +, -, .
  // and ends with a colon.
  const match = lowerUrl.match(/^([a-z][a-z0-9+\-.]*):/)

  if (match) {
    const protocol = match[1] + ":"
    const allowedProtocols = ["http:", "https:", "mailto:", "tel:"]
    return allowedProtocols.includes(protocol)
  }

  return true // Relative URL or just a path
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
