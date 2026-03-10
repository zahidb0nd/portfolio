import sys
from playwright.sync_api import sync_playwright

def verify_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:4173')

        # Wait for the main page to load
        page.wait_for_selector('#main-heading')

        # Explicitly scroll down to trigger the chunk load of Projects.tsx
        page.mouse.wheel(0, 2000)
        page.wait_for_timeout(1000)

        # Look for the disabled buttons
        # The first project has disabled links (href="#")

        # The first span with cursor-not-allowed contains the Code button
        code_wrapper = page.locator('span.cursor-not-allowed').first
        code_wrapper.wait_for(state="visible", timeout=5000)
        code_wrapper.hover()

        # Wait for the tooltip to appear
        tooltip = page.get_by_role('tooltip')
        tooltip.wait_for(state="visible", timeout=5000)

        print(f"Tooltip text: {tooltip.text_content()}")

        # Take a screenshot
        page.screenshot(path="tooltip_screenshot.png")
        print("Screenshot saved to tooltip_screenshot.png")

        browser.close()

if __name__ == "__main__":
    verify_ui()
