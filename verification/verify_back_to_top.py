from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5173/")

        # Wait for page to load
        page.wait_for_selector("h1")

        # Scroll to bottom
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        # Wait for smooth scroll or just ensure footer is visible
        # We can find the footer element
        footer = page.wait_for_selector("footer")

        # Take screenshot of footer
        page.screenshot(path="verification/footer.png")
        print("Footer screenshot saved to verification/footer.png")

        # Click "Back to Top" button
        # Using aria-label as added in the plan
        back_to_top = page.get_by_role("button", name="Back to top")
        back_to_top.click()

        # Wait for scroll to top and focus
        # We expect #main-heading to be focused
        # We can poll for active element

        try:
            page.wait_for_function("document.activeElement.id === 'main-heading'", timeout=5000)
            print("Focus is on #main-heading")
        except Exception as e:
            print(f"Focus check failed: {e}")
            # Print current active element
            active_id = page.evaluate("document.activeElement.id")
            print(f"Current active element ID: {active_id}")

        # Take screenshot of the top
        page.screenshot(path="verification/top_focused.png")
        print("Top screenshot saved to verification/top_focused.png")

        browser.close()

if __name__ == "__main__":
    run()
