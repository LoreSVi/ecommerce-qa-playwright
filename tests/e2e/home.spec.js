import { test, expect } from "@playwright/test";

test("la pantalla principal carga y muestra botones Ver detalle", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: /ver detalle/i }).first(),
  ).toBeVisible();
});

test("al hacer click en Ver detalle se navega a la vista de producto", async ({
  page,
}) => {
  await page.goto("/");
  const detalle = page.getByRole("button", { name: /ver detalle/i }).first();
  await expect(detalle).toBeVisible();
  await detalle.click();
  await expect(page).toHaveURL(/\/itemDetail\//);
  await expect(page.getByText(/stock disponible|categoría:/i)).toBeVisible();
});
