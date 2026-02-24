from playwright.sync_api import Page, expect, sync_playwright

def test_app_content(page: Page):
    """
    Verifies that the main sections of the application are visible and render correctly.
    """
    # 1. Arrange: Go to the app homepage.
    print("Navigating to http://localhost:5173/")
    page.goto("http://localhost:5173/")

    # 2. Assert: Check Hero section.
    print("Checking Hero section...")
    expect(page.get_by_role("heading", name="Zahid Hussain")).to_be_visible()
    expect(page.get_by_text("Frontend Engineer")).to_be_visible()

    # 3. Assert: Check About section.
    print("Checking About section...")
    about_section = page.locator("#about")
    about_section.scroll_into_view_if_needed()
    expect(page.get_by_text("About Me")).to_be_visible()
    expect(page.get_by_text("Final Year BCA Student", exact=True)).to_be_visible()

    # 4. Assert: Check Skills section.
    print("Checking Skills section...")
    skills_section = page.locator("#skills")
    skills_section.scroll_into_view_if_needed()
    expect(page.get_by_text("Technical Expertise")).to_be_visible()
    # Scope to skills section
    expect(skills_section.get_by_text("React", exact=True)).to_be_visible()

    # 5. Assert: Check Projects section.
    print("Checking Projects section...")
    projects_section = page.locator("#projects")
    projects_section.scroll_into_view_if_needed()
    expect(page.get_by_text("Selected Engineering Work")).to_be_visible()
    expect(page.get_by_role("heading", name="Vantage Automotive SaaS")).to_be_visible()
    expect(page.get_by_role("heading", name="Nexus Fintech Platform")).to_be_visible()

    # 6. Assert: Check Contact section.
    print("Checking Contact section...")
    contact_section = page.locator("#contact")
    contact_section.scroll_into_view_if_needed()
    expect(page.get_by_text("Open to Frontend Engineering Roles")).to_be_visible()
    expect(page.get_by_text("zahidhussain16042001@gmail.com")).to_be_visible()

    # 7. Screenshot: Capture the entire page for visual verification.
    print("Taking screenshot...")
    page.screenshot(path="verification/app_full_page.png", full_page=True)
    print("Screenshot saved to verification/app_full_page.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()
        try:
            test_app_content(page)
            print("Verification successful!")
        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/failure.png")
            raise
        finally:
            browser.close()
