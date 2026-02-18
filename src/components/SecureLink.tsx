import * as React from "react"
import { cn } from "@/lib/utils"

const isSafeUrl = (url: string) => {
  if (!url) return true
  const lowerUrl = url.trim().toLowerCase()
  // Block dangerous protocols
  if (lowerUrl.startsWith("javascript:")) return false
  if (lowerUrl.startsWith("vbscript:")) return false
  if (lowerUrl.startsWith("data:")) return false
  return true
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
