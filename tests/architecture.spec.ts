import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {
  capabilities,
  engineSteps,
  opportunities,
  outcomes,
  phases,
  pathway,
  teamExamples,
} from '../src/data';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('the revised hero and both original images load without runtime errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('One company.');
  await expect(page.locator('.hero-description')).toContainText('entirely new ventures');
  for (const image of await page.locator('main img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (node) =>
            (node as HTMLImageElement).complete && (node as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  expect(errors).toEqual([]);
});

test('every capability exposes its complete expanded content', async ({ page }) => {
  for (const capability of capabilities) {
    const trigger = page.getByRole('button', { name: `Explore ${capability.label}`, exact: true });
    await trigger.click();
    const panel = page.getByRole('dialog');
    await expect(panel.getByRole('heading', { name: capability.label, exact: true })).toBeVisible();
    await expect(panel.locator('.detail-items li')).toHaveCount(capability.items.length);
    for (const item of capability.items)
      await expect(panel.locator('.detail-items')).toContainText(item);
    await page.keyboard.press('Escape');
    await expect(panel).not.toBeVisible();
    await expect(trigger).toBeFocused();
  }
});

test('all nine opportunity sources and five possible outcomes are explorable', async ({ page }) => {
  for (const opportunity of opportunities) {
    await page.locator('.opportunity-chip').filter({ hasText: opportunity.label }).click();
    await expect(page.getByRole('dialog')).toContainText(opportunity.description);
    await page.keyboard.press('Escape');
  }
  await expect(page.locator('.outcome-card')).toHaveCount(5);
  for (const outcome of outcomes) {
    await page.getByRole('button', { name: `Explore ${outcome.label}`, exact: true }).click();
    await expect(page.getByRole('dialog')).toContainText(outcome.description);
    await page.keyboard.press('Escape');
  }
  await page.getByRole('button', { name: 'For clients', exact: true }).click();
  await expect(page.locator('.outcome-card')).toHaveCount(2);
  await page.getByRole('button', { name: 'Built by DSLabs', exact: true }).click();
  await expect(page.locator('.outcome-card')).toHaveCount(4);
  await page.getByRole('button', { name: 'All possibilities', exact: true }).click();
  await expect(page.locator('.outcome-card')).toHaveCount(5);
});

test('capability combinations highlight a useful mix without hiding the toolkit', async ({
  page,
}) => {
  for (const [label, id] of [
    ['Build a product', 'software'],
    ['Grow a business', 'business'],
    ['Make something physical', 'physical-team'],
  ]) {
    const example = teamExamples.find((item) => item.id === id)!;
    await page.getByRole('button', { name: label, exact: true }).click();
    await expect(page.locator('.capability-item')).toHaveCount(9);
    await expect(page.locator('.capability-item.combination-active')).toHaveCount(
      example.capabilities.length,
    );
    await expect(page.locator('.core-panel')).toContainText(example.description);
  }
  await page.getByRole('button', { name: 'The whole toolkit', exact: true }).click();
  await expect(page.locator('.capability-item.combination-active')).toHaveCount(0);
  await page
    .getByRole('button', { name: 'Explore DSLabs, the parent company', exact: true })
    .click();
  await expect(page.getByRole('dialog')).toContainText('parent company');
});

test('all creation phases, fourteen engine steps, and service-to-venture stages connect', async ({
  page,
}) => {
  await expect(page.locator('.full-engine > button')).toHaveCount(engineSteps.length);
  for (const phase of phases) {
    await page
      .locator('.phase-tabs')
      .getByRole('button', { name: new RegExp(phase.shortLabel.replace('&', '&')) })
      .click();
    await expect(page.locator('.phase-preview h3')).toHaveText(phase.label);
    await page.getByRole('button', { name: 'Explore this stage', exact: true }).click();
    await expect(page.getByRole('dialog')).toContainText(phase.description);
    await page.keyboard.press('Escape');
  }
  await expect(page.getByRole('button', { name: 'Next stage', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: 'Previous stage', exact: true }).click();
  await expect(page.locator('.phase-preview h3')).toHaveText('Operate & improve');
  await page.locator('.full-engine').getByRole('button', { name: 'Research', exact: true }).click();
  await expect(page.locator('.phase-preview h3')).toHaveText('Discover');
  await expect(page.getByRole('button', { name: 'Previous stage', exact: true })).toBeDisabled();
  for (const step of pathway) {
    await page.locator('.pathway-step').filter({ hasText: step.label }).click();
    await expect(page.getByRole('dialog')).toContainText(step.description);
    await page.keyboard.press('Escape');
  }
});

test('teams stay illustrative and adapt their connected capabilities', async ({ page }) => {
  for (const example of teamExamples) {
    await page
      .locator('.team-options')
      .getByRole('button', { name: example.label, exact: true })
      .click();
    await expect(page.locator('.team-detail')).toContainText(example.description);
    await expect(page.locator('.team-capabilities button')).toHaveCount(
      example.capabilities.length,
    );
  }
  await page.locator('.team-capabilities button').first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await page
    .getByRole('button', { name: 'Plus the right external specialists', exact: true })
    .click();
  await expect(page.getByRole('dialog')).toContainText('Manufacturers');
});

test('keyboard details trap focus, support connected exploration, and restore focus', async ({
  page,
}) => {
  const trigger = page.getByRole('button', { name: 'Explore Technology', exact: true });
  await trigger.focus();
  await page.keyboard.press('Enter');
  await expect(
    page.getByRole('dialog').getByRole('heading', { name: 'Technology', exact: true }),
  ).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  expect(await page.evaluate(() => !!document.activeElement?.closest('dialog'))).toBe(true);
  await page
    .getByRole('dialog')
    .getByRole('button', { name: 'AI & automation', exact: true })
    .click();
  await expect(page.getByRole('dialog')).toContainText('Understand the manual process first');
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => !!document.activeElement?.closest('dialog'))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
});

test('navigation works and mobile menu closes after choosing a destination', async ({
  page,
}, testInfo) => {
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'What we bring', exact: true })
      .click();
    await expect(
      page.getByRole('button', { name: 'Open navigation', exact: true }),
    ).toHaveAttribute('aria-expanded', 'false');
  } else
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'What we bring', exact: true })
      .click();
  await expect(page).toHaveURL(/#capabilities$/);
  await page.getByRole('link', { name: 'Back to top', exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(5);
});

test('responsive layout, reduced motion, and accessibility', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  const summarize = (audit: Awaited<ReturnType<AxeBuilder['analyze']>>) =>
    audit.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({ target: n.target, reason: n.any.map((a) => a.message) })),
    }));
  for (const image of await page.locator('main img').all()) {
    await image.scrollIntoViewIfNeeded();
    await image.evaluate((node) => (node as HTMLImageElement).decode());
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-overview.png`,
    fullPage: true,
  });
  expect(
    summarize(await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()),
  ).toEqual([]);
  await page.getByRole('button', { name: 'Explore Technology', exact: true }).click();
  await page.screenshot({ path: `test-results/${testInfo.project.name}-details.png` });
  expect(
    summarize(await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()),
  ).toEqual([]);
});
