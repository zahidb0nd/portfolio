from playwright.sync_api import sync_playwright

def verify_tooltips():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:4173")

        # Wait for projects to load
        page.wait_for_selector("#projects")

        # Scroll to the first project
        project = page.locator("article").first
        project.scroll_into_view_if_needed()

        # Find the GitHub link (which is a disabled button wrapped in a span for Vantage Automotive SaaS)
        # Note: both buttons are disabled in this project as both links are '#'
        github_btn_wrapper = project.locator("span.cursor-not-allowed").first

        # Hover over the span to trigger the tooltip
        github_btn_wrapper.hover()

        # Wait for the tooltip to appear
        page.wait_for_selector("[data-radix-popper-content-wrapper]")

        # Take a screenshot
        page.screenshot(path="verification_tooltip.png")

        browser.close()

if __name__ == "__main__":
    verify_tooltips()
