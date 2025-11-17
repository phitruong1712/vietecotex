# Guide: Adding Product Images for Structured Data

## 📍 Current Location

**`logo.png` is located at:**
```
public/logo.png
```

In Next.js, files in the `public/` folder are automatically served from your website root. So:
- `public/logo.png` → accessible at `https://vietecotex.com/logo.png`
- `public/images/product.jpg` → accessible at `https://vietecotex.com/images/product.jpg`

---

## 🖼️ How to Add Product Images

### Option 1: Add Images to Your Project (Recommended)

**Step 1: Create a folder for product images**
```bash
mkdir -p public/images/products
```

**Step 2: Add your product images**
Place your product images in this folder:
- `public/images/products/microfiber-leather.jpg`
- `public/images/products/furniture-textiles.jpg`

**Step 3: Update the structured data in `app/layout.tsx`**

Find these lines (around line 217 and 289):
```typescript
image: [
  'https://vietecotex.com/logo.png', // TODO: Replace with actual product image URL
],
```

Replace with:
```typescript
image: [
  'https://vietecotex.com/images/products/microfiber-leather.jpg',
  'https://vietecotex.com/images/products/microfiber-leather-detail.jpg', // Optional: add more images
],
```

**For Furniture Textiles (around line 289):**
```typescript
image: [
  'https://vietecotex.com/images/products/furniture-textiles.jpg',
],
```

---

### Option 2: Use External Image Hosting (Alternative)

If you prefer to host images elsewhere (e.g., CDN, cloud storage):

**Examples:**
- AWS S3: `https://your-bucket.s3.amazonaws.com/products/leather.jpg`
- Cloudinary: `https://res.cloudinary.com/your-cloud/image/upload/products/leather.jpg`
- Imgur/other: `https://i.imgur.com/your-image.jpg`

Then update the `image` array with the full URL:
```typescript
image: [
  'https://your-cdn.com/products/microfiber-leather.jpg',
],
```

---

## 📐 Image Requirements

For best results in Google Search Console:

- **Minimum size**: 1200x1200 pixels
- **Recommended**: 1200x1200 to 2000x2000 pixels
- **Format**: JPG or PNG
- **File size**: Under 2MB per image (optimize for web)
- **Aspect ratio**: Square (1:1) is preferred, but not required

---

## 🎯 Quick Steps to Add Images Now

1. **Prepare your product images**
   - Take/select high-quality photos of your microfiber leather and furniture textiles
   - Resize to at least 1200x1200px
   - Optimize for web (compress if needed)

2. **Add to project**
   ```bash
   # Create folder (if it doesn't exist)
   mkdir -p public/images/products
   
   # Copy your images to this folder
   # Example:
   # cp ~/Downloads/microfiber-leather.jpg public/images/products/
   # cp ~/Downloads/furniture-textiles.jpg public/images/products/
   ```

3. **Update `app/layout.tsx`**
   - Open `app/layout.tsx`
   - Find line ~217 (Eco Microfiber Leather)
   - Replace `'https://vietecotex.com/logo.png'` with your image URL
   - Find line ~289 (Furniture Textiles)
   - Replace `'https://vietecotex.com/logo.png'` with your image URL

4. **Test locally** (optional)
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000/images/products/your-image.jpg` to verify

5. **Commit and push**
   ```bash
   git add public/images/products/ app/layout.tsx
   git commit -m "feat(seo): add product images for structured data"
   git push origin main
   ```

---

## 📝 Example: Complete Update

**Before:**
```typescript
image: [
  'https://vietecotex.com/logo.png', // TODO: Replace with actual product image URL
],
```

**After (if images are in public folder):**
```typescript
image: [
  'https://vietecotex.com/images/products/microfiber-leather.jpg',
  'https://vietecotex.com/images/products/microfiber-leather-closeup.jpg',
],
```

**After (if using external hosting):**
```typescript
image: [
  'https://cdn.vietecotex.com/products/microfiber-leather.jpg',
],
```

---

## ✅ Verification

After deploying:

1. **Check image is accessible:**
   - Visit: `https://vietecotex.com/images/products/your-image.jpg`
   - Should load without errors

2. **Check structured data:**
   - Use Google's Rich Results Test: https://search.google.com/test/rich-results
   - Enter: `https://vietecotex.com`
   - Check that images appear in the Product schema

3. **Request re-indexing in Google Search Console**

---

## 💡 Tips

- **Multiple images**: You can add multiple images to the array for better representation
- **Keep logo.png**: Don't delete `logo.png` - it's still used elsewhere (favicon, OG images, etc.)
- **Naming**: Use descriptive, SEO-friendly filenames (e.g., `microfiber-leather-automotive.jpg`)
- **Optimization**: Compress images before adding to reduce load time (use tools like TinyPNG or ImageOptim)

---

## 🚀 Quick Start (If You Don't Have Images Yet)

If you don't have product images ready yet:

1. **Keep using logo.png temporarily** - it's valid for now
2. **Add images later** when you have them
3. **Update the structured data** when images are ready

The current setup with `logo.png` will work fine for Google Search Console validation. You can update it anytime.


