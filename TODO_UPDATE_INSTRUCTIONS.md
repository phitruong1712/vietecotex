# Instructions for Updating Product Structured Data Fields

## Quick Answer
**You can request re-indexing in Google Search Console NOW.** The current data is valid and will pass validation. You can update these TODO fields later for accuracy.

---

## Step-by-Step Instructions for Updating TODO Fields

### File Location
Open: `app/layout.tsx`

### Fields to Update (appears twice - once for each product)

---

### 1. Product Images (Lines 217 & 289)

**Current:**
```typescript
image: [
  'https://vietecotex.com/logo.png', // TODO: Replace with actual product image URL
],
```

**Update to:**
```typescript
image: [
  'https://vietecotex.com/images/microfiber-leather-product.jpg', // Replace with your actual product image URL
  'https://vietecotex.com/images/microfiber-leather-detail.jpg', // Optional: Add multiple images
],
```

**Notes:**
- Use absolute URLs (starting with `https://vietecotex.com/`)
- Images should be at least 1200x1200px for best results
- You can add multiple images in the array
- Make sure images are publicly accessible

---

### 2. Price Validity Date (Lines 236 & 308)

**Current:**
```typescript
priceValidUntil: '2026-12-31', // TODO: Update with actual price validity date
```

**Update to:**
```typescript
priceValidUntil: '2025-12-31', // Update to your actual price validity date (YYYY-MM-DD format)
```

**Notes:**
- Format: `'YYYY-MM-DD'` (e.g., `'2025-12-31'`)
- This should be the date until which your prices are guaranteed
- Update this when prices change

---

### 3. Return Policy Days (Lines 241 & 313)

**Current:**
```typescript
merchantReturnDays: 30, // TODO: Update with actual return policy days
```

**Update to:**
```typescript
merchantReturnDays: 30, // Change to your actual return window (e.g., 14, 30, 60, 90)
```

**Notes:**
- Enter the number of days customers have to return products
- Common values: 14, 30, 60, 90 days
- If you don't accept returns, you may need to adjust the `returnPolicyCategory`

---

### 4. Shipping Costs (Lines 249 & 321)

**Current:**
```typescript
value: '0', // TODO: Update with actual shipping cost or "Contact for shipping quote"
```

**Option A - Fixed Shipping Cost:**
```typescript
value: '25.00', // Replace with your actual shipping cost in USD
```

**Option B - Free Shipping:**
```typescript
value: '0', // Keep as '0' if shipping is free
```

**Option C - Contact for Quote (B2B):**
```typescript
value: '0', // Keep as '0' and note in description that shipping is quoted per order
```

**Notes:**
- Enter as a string with 2 decimal places (e.g., `'25.00'`, `'0.00'`)
- For B2B/manufacturing, keeping `'0'` is fine if you quote shipping separately

---

### 5. Handling Time (Days) (Lines 265-266 & 337-338)

**Current:**
```typescript
minValue: 7, // TODO: Update with actual handling days
maxValue: 14,
```

**Update to:**
```typescript
minValue: 5, // Minimum days to prepare order (e.g., 3, 5, 7)
maxValue: 10, // Maximum days to prepare order (e.g., 7, 10, 14)
```

**Notes:**
- `minValue`: Fastest time to prepare an order
- `maxValue`: Longest time to prepare an order
- These are business days (excluding weekends/holidays)

---

### 6. Transit Time (Days) (Lines 271-272 & 343-344)

**Current:**
```typescript
minValue: 14, // TODO: Update with actual transit days
maxValue: 30,
```

**Update to:**
```typescript
minValue: 14, // Minimum shipping transit days (e.g., 7, 14, 21)
maxValue: 45, // Maximum shipping transit days (e.g., 30, 45, 60)
```

**Notes:**
- `minValue`: Fastest shipping time (e.g., express shipping)
- `maxValue`: Slowest shipping time (e.g., standard international shipping)
- Adjust based on your typical shipping methods and destinations

---

### 7. Order Cutoff Time (Lines 262 & 334)

**Current:**
```typescript
cutoffTime: '14:00', // TODO: Update with actual cutoff time
```

**Update to:**
```typescript
cutoffTime: '17:00', // Update to your actual order cutoff time (24-hour format, HH:MM)
```

**Notes:**
- Format: `'HH:MM'` in 24-hour format (e.g., `'17:00'` = 5:00 PM)
- This is the latest time of day orders can be placed to ship same/next day
- Use your local timezone (Vietnam time)

---

## Quick Reference: All Fields in One Place

When updating, you need to change these values in **TWO places** (once for "Eco Microfiber Leather" and once for "Furniture Textiles"):

1. **Line ~217** (Eco Microfiber Leather) - `image` array
2. **Line ~236** (Eco Microfiber Leather) - `priceValidUntil`
3. **Line ~241** (Eco Microfiber Leather) - `merchantReturnDays`
4. **Line ~249** (Eco Microfiber Leather) - `shippingRate.value`
5. **Line ~262** (Eco Microfiber Leather) - `cutoffTime`
6. **Line ~265-266** (Eco Microfiber Leather) - `handlingTime.minValue` and `maxValue`
7. **Line ~271-272** (Eco Microfiber Leather) - `transitTime.minValue` and `maxValue`

8. **Line ~289** (Furniture Textiles) - `image` array
9. **Line ~308** (Furniture Textiles) - `priceValidUntil`
10. **Line ~313** (Furniture Textiles) - `merchantReturnDays`
11. **Line ~321** (Furniture Textiles) - `shippingRate.value`
12. **Line ~334** (Furniture Textiles) - `cutoffTime`
13. **Line ~337-338** (Furniture Textiles) - `handlingTime.minValue` and `maxValue`
14. **Line ~343-344** (Furniture Textiles) - `transitTime.minValue` and `maxValue`

---

## After Making Changes

1. Save the file
2. Test locally (optional): `npm run dev`
3. Commit and push:
   ```bash
   git add app/layout.tsx
   git commit -m "chore(seo): update product structured data with actual business information"
   git push origin main
   ```
4. Wait for Vercel deployment (1-2 minutes)
5. Request re-indexing in Google Search Console again

---

## Need Help?

If you're unsure about any values:
- **Shipping/Handling/Transit times**: Use your typical estimates
- **Return policy**: Use your actual policy or industry standard (30 days is common)
- **Cutoff time**: Use your actual order processing cutoff
- **Images**: Start with your logo if you don't have product images yet (it's already set)

All fields have reasonable defaults, so you can update them gradually as you gather accurate information.








