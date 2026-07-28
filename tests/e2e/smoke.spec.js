import { test, expect } from "@playwright/test";

test("smoke: flujo completo de compra desde home hasta checkout", async ({
  page,
}) => {
  await page.goto("http://localhost:5173", { waitUntil: "load" });

  const productCardLink = page.locator('a:has-text("Ver detalle")').first();
  await expect(productCardLink).toBeVisible();
  await productCardLink.click();

  await expect(page).toHaveURL(/\/itemDetail\//);
  await expect(page.getByText(/Categoría:/i)).toBeVisible();
  await expect(page.getByText(/Stock disponible:/i)).toBeVisible();

  const productName = (await page.locator("h2").textContent())?.trim();
  const productPrice = (
    await page.locator(".product-detail-price").textContent()
  )?.trim();

  const addToCartButton = page.getByRole("button", {
    name: /agregar al carrito/i,
  });
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();

  await expect(page.getByText(/Producto agregado exitosamente/i)).toBeVisible();
  await page.getByRole("button", { name: /ir al carrito/i }).click();

  await expect(page).toHaveURL(/\/carrito$/);
  await expect(
    page.getByRole("heading", { name: /Resumen del pedido/i }),
  ).toBeVisible();

  if (productName) {
    await expect(page.getByText(productName)).toBeVisible();
  }
  if (productPrice) {
    await expect(page.getByText(productPrice)).toBeVisible();
  }

  await expect(page.getByText(/Cantidad: 1/i)).toBeVisible();
  await expect(page.getByText(/Subtotal:/i)).toBeVisible();
  await expect(page.getByText(/Total de unidades:/i)).toBeVisible();
  await expect(page.getByText(/Precio total:/i)).toBeVisible();

  await page.getByRole("button", { name: /finalizar compra/i }).click();
  await expect(page).toHaveURL(/\/checkout$/);
});
