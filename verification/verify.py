from playwright.sync_api import sync_playwright

def verify(page):
    page.goto("http://localhost:5173/")

    # Wait for the hero section
    page.wait_for_selector("text=Zahid Hussain")

    # Scroll down to load other sections
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Wait a bit for lazy loading
    page.wait_for_timeout(2000)

    # Take screenshot
    page.screenshot(path="verification/screenshot.png", full_page=True)
    print("Screenshot saved to verification/screenshot.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify(page)
        except Exception as e:
            print(f"Error: {e}")
            import sys
            sys.exit(1)
        finally:
            browser.close()
