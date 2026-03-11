import time
from playwright.sync_api import sync_playwright

def test_progressive_loading():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Intercept specific chunk requests to simulate slow network loading for lazy loaded sections
        def intercept_route(route):
            url = route.request.url
            if "About" in url or "Skills" in url or "Projects" in url or "Contact" in url:
                # Add a synthetic delay to specific chunks
                time.sleep(2)
                route.continue_()
            else:
                route.continue_()

        page.route("**/*.js", intercept_route)

        page.goto("http://localhost:4173")

        # Wait for Hero section to be visible
        page.wait_for_selector("#home")
        print("Hero section loaded.")

        # Scroll down to trigger skeletons into view
        page.evaluate("window.scrollBy(0, window.innerHeight)")
        time.sleep(0.5)

        # Take a full page screenshot to show skeletons
        page.screenshot(path="skeletons.png", full_page=True)
        print("Saved skeletons.png")

        # Wait for all chunks to load
        page.wait_for_selector("#about")
        page.wait_for_selector("#skills")
        page.wait_for_selector("#projects")
        page.wait_for_selector("#contact")
        print("All lazy sections loaded.")

        page.screenshot(path="loaded.png", full_page=True)
        print("Saved loaded.png")

        browser.close()

if __name__ == "__main__":
    test_progressive_loading()
