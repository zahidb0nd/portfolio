import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    # Grant clipboard permissions
    context = browser.new_context()
    context.grant_permissions(['clipboard-read', 'clipboard-write'])

    page = context.new_page()

    print("Navigating to app...")
    page.goto("http://localhost:5173/")

    print("Scrolling to contact section...")
    contact_section = page.locator("#contact")
    contact_section.scroll_into_view_if_needed()
    contact_section.wait_for(state="visible", timeout=10000)

    # Take initial screenshot
    page.screenshot(path="verification/contact_initial.png")

    # Find the button
    copy_btn = page.get_by_role("button", name="Copy Email")

    if copy_btn.count() == 0:
        print("Copy Email button NOT found!")
        browser.close()
        return

    print("Clicking Copy Email button...")
    copy_btn.click()

    # Check for success state
    success_btn = page.get_by_role("button", name="Copied!")
    try:
        success_btn.wait_for(state="visible", timeout=1000)
        print("SUCCESS: Button text changed to 'Copied!'")
        page.screenshot(path="verification/contact_success.png")
    except Exception as e:
        print("FAILURE: Button text did not change.")
        print(e)
        # Check if toast appeared
        if page.locator("text=Failed to copy email").count() > 0:
            print("Toast error: Failed to copy email")
        elif page.locator("text=Email copied to clipboard").count() > 0:
            print("Toast success: Email copied to clipboard")

        page.screenshot(path="verification/contact_failure.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
