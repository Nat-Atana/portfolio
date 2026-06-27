import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const caseStudies = [
  ['Customer Support Copilot', '/case-studies/customer-support-copilot/'],
  ['AI Accounting Platform', '/case-studies/ai-accounting-platform/'],
  ['Workforce Scheduling System', '/case-studies/workforce-scheduling-system/'],
];

test.describe('portfolio routes', () => {
  test('home renders the primary sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: /intelligent systems/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /systems with/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /read customer support copilot case study/i })).toBeVisible();
  });

  for (const [title, path] of caseStudies) {
    test(`${title} case study renders directly`, async ({ page }) => {
      await page.goto(path);

      await expect(page.getByRole('heading', { name: title })).toBeVisible();
      await expect(page.getByRole('link', { name: /back to selected work/i })).toBeVisible();
      await expect(page.getByRole('heading', { name: /architecture/i })).toBeVisible();
    });
  }

  test('case-study back returns to the selected project card', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /read ai accounting platform case study/i }).click();
    await expect(page.getByRole('heading', { name: 'AI Accounting Platform' })).toBeVisible();

    await page.getByRole('link', { name: /back to selected work/i }).click();
    await expect(page).toHaveURL(/#work$/);
    await expect(page.getByRole('heading', { name: 'AI Accounting Platform' })).toBeInViewport();
  });

  test('has no serious automated accessibility violations on the home page', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
    const severeViolations = results.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact));

    expect(severeViolations).toEqual([]);
  });

  test('mobile viewport does not create horizontal page overflow', async ({ page }) => {
    await page.goto('/');

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
