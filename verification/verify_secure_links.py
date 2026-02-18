from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173")

    # Wait for the page to load
    page.wait_for_load_state("networkidle")

    # --- Verify Hero Section Links ---
    print("Verifying Hero section...")
    hero_section = page.locator("#home")
    github_link_hero = hero_section.get_by_label("GitHub Profile")

    href = github_link_hero.get_attribute("href")
    target = github_link_hero.get_attribute("target")
    rel = github_link_hero.get_attribute("rel")

    print(f"Hero GitHub: href={href}, target={target}, rel={rel}")
    assert href == "https://github.com"
    assert target == "_blank"
    assert "noopener" in rel and "noreferrer" in rel

    # Screenshot Hero
    hero_section.screenshot(path="verification/hero_links.png")


    # --- Verify Projects Section Links ---
    print("Verifying Projects section...")
    projects_section = page.locator("#projects")
    # First project GitHub link
    first_project = projects_section.locator("article").first
    github_link_project = first_project.get_by_role("link", name="Code")

    href_proj = github_link_project.get_attribute("href")
    target_proj = github_link_project.get_attribute("target")
    rel_proj = github_link_project.get_attribute("rel")

    print(f"Project GitHub: href={href_proj}, target={target_proj}, rel={rel_proj}")
    # Note: href is "#" in the mock data, so safeHref will be "#".
    # But wait, SecureLink logic: isSafeUrl("#") is true. So it stays "#".
    assert href_proj == "#"
    assert target_proj == "_blank"
    assert "noopener" in rel_proj and "noreferrer" in rel_proj

    # Screenshot Projects
    projects_section.screenshot(path="verification/projects_links.png")


    # --- Verify Contact Section Links ---
    print("Verifying Contact section...")
    contact_section = page.locator("#contact")
    contact_section.scroll_into_view_if_needed()

    # GitHub link in Contact
    github_link_contact = contact_section.get_by_role("link", name="GitHub")

    href_contact = github_link_contact.get_attribute("href")
    target_contact = github_link_contact.get_attribute("target")
    rel_contact = github_link_contact.get_attribute("rel")

    print(f"Contact GitHub: href={href_contact}, target={target_contact}, rel={rel_contact}")
    assert href_contact == "https://github.com"
    assert target_contact == "_blank"
    assert "noopener" in rel_contact and "noreferrer" in rel_contact

    # Screenshot Contact
    contact_section.screenshot(path="verification/contact_links.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
