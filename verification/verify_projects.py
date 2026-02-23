from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173")

    # Wait for the projects section to be visible (it's lazy loaded)
    # Scroll to it
    projects_section = page.locator("#projects")
    projects_section.scroll_into_view_if_needed()

    # Wait for content
    page.wait_for_selector("text=Vantage Automotive SaaS")

    # Take screenshot
    page.screenshot(path="verification/projects_verification.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
