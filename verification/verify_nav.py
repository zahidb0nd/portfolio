import time
from playwright.sync_api import sync_playwright

def verify_navigation():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 800})

        # Navigate to the app (assuming default Vite port)
        try:
            page.goto("http://localhost:5173", timeout=60000)
            print("Successfully loaded the page")
        except Exception as e:
            print(f"Failed to load page: {e}")
            browser.close()
            return

        # Wait for hydration and Navigation component
        page.wait_for_selector("nav", state="visible")

        # Take a screenshot of the top of the page (Desktop)
        page.screenshot(path="verification/desktop-nav.png")
        print("Desktop screenshot captured")

        # Test Mobile View
        page.set_viewport_size({"width": 375, "height": 667})
        time.sleep(1) # Allow resize to settle

        # Take screenshot of mobile nav (collapsed)
        page.screenshot(path="verification/mobile-nav-collapsed.png")
        print("Mobile collapsed screenshot captured")

        # Click menu button
        page.click("button[aria-label='Toggle navigation menu']")
        time.sleep(1) # Wait for animation

        # Take screenshot of mobile nav (open)
        page.screenshot(path="verification/mobile-nav-open.png")
        print("Mobile open screenshot captured")

        browser.close()

if __name__ == "__main__":
    verify_navigation()
