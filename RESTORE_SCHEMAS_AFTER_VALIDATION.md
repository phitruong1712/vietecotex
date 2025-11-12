# Restore Safe Schemas After GSC Validation Passes

## ⚠️ IMPORTANT: Wait for Validation to Pass First!

**DO NOT apply these changes until Google Search Console validation has PASSED.**

Once you see "Validation passed" or "No issues found" in GSC, then you can safely restore these schemas.

---

## Changes to Apply After Validation Passes

### 1. Restore Organization and WebSite Schemas in `app/layout.tsx`

**Location:** After the Google Fonts link, before `</head>`

**Add this code:**
```tsx
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Viet Ecotex',
              alternateName: 'Viet EcoTex',
              url: 'https://vietecotex.com',
              logo: 'https://vietecotex.com/logo.png',
              email: 'contact@vietecotex.com',
              telephone: '+84 976 344 224',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'VN',
              },
              sameAs: [],
              description:
                'Vietnam-based supplier of eco microfiber leather and sustainable furniture fabrics. Premium alternative to Chinese manufacturing for automotive, fashion, and interior design industries.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Viet Ecotex',
              url: 'https://vietecotex.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://vietecotex.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
```

**Replace this section in `app/layout.tsx`:**
```tsx
        {/* TEMPORARILY REMOVED ALL STRUCTURED DATA TO CLEAR GOOGLE'S CACHE */}
        {/* This forces Google to re-crawl pages without any Product schemas */}
        {/* Will re-add Organization and WebSite schemas after Google validates */}
        {/* Explicitly prevent product snippet detection */}
        <meta name="google" content="notranslate" />
        <meta name="robots" content="index, follow, noimageindex" />
```

**With:**
```tsx
        {/* Organization and WebSite schemas - SAFE to add (not Product schemas) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Viet Ecotex',
              alternateName: 'Viet EcoTex',
              url: 'https://vietecotex.com',
              logo: 'https://vietecotex.com/logo.png',
              email: 'contact@vietecotex.com',
              telephone: '+84 976 344 224',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'VN',
              },
              sameAs: [],
              description:
                'Vietnam-based supplier of eco microfiber leather and sustainable furniture fabrics. Premium alternative to Chinese manufacturing for automotive, fashion, and interior design industries.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Viet Ecotex',
              url: 'https://vietecotex.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://vietecotex.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
```

### 2. Restore FAQPage Schema in `app/faux-leather/page.tsx`

**Location:** Inside the `FauxLeatherPage` function, before the `return` statement

**Add this code before `return (`:**
```tsx
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is faux leather the same as microfiber leather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Faux leather is a broad term for non-animal leather alternatives (PU, PVC, microfiber). Microfiber leather is a premium type engineered with ultra-fine fibers for better feel and durability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is microfiber leather vegan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Microfiber leather is animal-free and is often chosen as a vegan leather option.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is microfiber leather used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Automotive interiors, furniture upholstery, and fashion accessories where consistent appearance, light weight, and durability are important.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you supply samples and color cards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Contact Viet Ecotex for swatches, technical data, MOQ, and lead time. We serve 1500+ customers worldwide with small MOQs and custom solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between PU leather and microfiber leather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PU leather is a basic synthetic leather made from polyurethane. Microfiber leather is a premium engineered material with ultra-fine fibers that creates a more natural leather-like feel, better durability, and superior consistency.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is microfiber leather suitable for automotive applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Microfiber leather is widely used in automotive interiors for seats, door panels, dashboards, and steering wheels due to its durability, consistent appearance, and premium feel. 70-80% of our customers use our materials for automotive applications.',
        },
      },
    ],
  };
```

**And add the script tag in the return statement:**
```tsx
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <section className="container-xl py-10 md:py-20">
```

**And close with `</>` at the end:**
```tsx
      </section>
    </>
  );
```

---

## ✅ What We're NOT Adding Back

- ❌ **NO Product schemas** - Never add these back
- ❌ **NO Manufacturer schemas** - Never add these back
- ❌ **NO Offer schemas** - Never add these back
- ❌ **NO WebPage schemas on individual pages** - Not needed

## ✅ What We ARE Adding Back (Safe)

- ✅ **Organization schema** - Identifies your business (safe)
- ✅ **WebSite schema** - Identifies your website (safe)
- ✅ **FAQPage schema** - Only on faux-leather page (safe)

---

## Steps to Apply After Validation Passes

1. **Confirm validation passed** in Google Search Console
2. **Apply the changes** above to `app/layout.tsx` and `app/faux-leather/page.tsx`
3. **Test locally** to ensure no build errors
4. **Commit and push** to main branch
5. **Monitor GSC** for 24-48 hours to ensure no new errors appear

---

## Why These Schemas Are Safe

- **Organization**: Identifies your business, not products
- **WebSite**: Identifies your website, not products
- **FAQPage**: Provides FAQ structured data, not product data

**None of these schemas contain Product, Offer, or price information, so they won't trigger GSC validation errors.**

