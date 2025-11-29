import { test, expect } from '@playwright/test';

test('PC', async ({ page }) => {
  await page.goto('https://realestate.yahoo.co.jp/');
  await page.locator('[id="__GlobalNavMenu"]').getByRole('link', { name: '新築マンション' }).click();
  await expect(page.locator('#rgt_bnr')).toMatchAriaSnapshot(`
    - link "モデルルームセレクション":
      - /url: /new/mansion/modelroomselection/
      - img "モデルルームセレクション"
    `);
  await expect(page.locator('[id="_contract_campaign_all_bnr"]')).toMatchAriaSnapshot(`
    - link "新築マンションご成約＋契約書アップロード＋アンケート回答で5万円相当のPayPayポイントもらえる！":
      - /url: /new/mansion/campaign/contract/?sc_in=top_cbx
      - img "新築マンションご成約＋契約書アップロード＋アンケート回答で5万円相当のPayPayポイントもらえる！"
    `);
  await page.getByRole('link', { name: '新築マンションご成約＋契約書アップロード＋アンケート回答で' }).click();
  await expect(page.locator('#yjContentsBody')).toMatchAriaSnapshot(`
    - paragraph:
      - img "新築マンション・分譲マンションを探すならYahoo!不動産！がおトク！"
    `);
  await expect(page.locator('[id="_step1Area"]')).toMatchAriaSnapshot(`
    - heading "STEP 1 資料請求または見学予約（エントリー）" [level=3]:
      - text: ""
      - emphasis: "1"
      - text: ""
    `);
});