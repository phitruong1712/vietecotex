# Product Images Folder

## 📍 Location
This folder: `public/images/products/`

## 🌐 How It Works
Files placed here will be accessible at:
- `public/images/products/microfiber-leather.jpg` → `https://vietecotex.com/images/products/microfiber-leather.jpg`

## 📝 What to Add
Add your product images here with descriptive names:

**Recommended filenames:**
- `microfiber-leather.jpg` (main product image)
- `microfiber-leather-detail.jpg` (optional: close-up detail)
- `furniture-textiles.jpg` (main product image)
- `furniture-textiles-detail.jpg` (optional: close-up detail)

## 📐 Image Requirements
- **Size**: At least 1200x1200 pixels
- **Format**: JPG or PNG
- **File size**: Under 2MB (optimize for web)

## ✅ After Adding Images
1. Update `app/layout.tsx` (lines ~217 and ~289)
2. Replace `'https://vietecotex.com/logo.png'` with your new image URLs
3. Commit and push to deploy

## 💡 Quick Example
If you add `microfiber-leather.jpg` here, reference it as:
```typescript
'https://vietecotex.com/images/products/microfiber-leather.jpg'
```





