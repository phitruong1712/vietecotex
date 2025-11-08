'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<null | 'ok' | 'error' | 'sending'>(
    null
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const payload = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );
    try {
      const r = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const j = await r.json();
      if (r.ok) setStatus('ok');
      else throw new Error(j?.error || 'Failed');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 max-w-2xl grid grid-cols-1 gap-4"
    >
      <input
        className="border rounded-lg px-4 py-2"
        name="name"
        required
        placeholder="Your name *"
        aria-label="Your name"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="border rounded-lg px-4 py-2"
          name="email"
          type="email"
          required
          placeholder="Email *"
          aria-label="Email address"
        />
        <input
          className="border rounded-lg px-4 py-2"
          name="phone"
          type="tel"
          placeholder="Phone / WhatsApp"
          aria-label="Phone number"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="border rounded-lg px-4 py-2"
          name="company"
          placeholder="Company"
          aria-label="Company name"
        />
        <input
          className="border rounded-lg px-4 py-2"
          name="country"
          placeholder="Country"
          aria-label="Country"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <select
          className="border rounded-lg px-4 py-2"
          name="productLine"
          aria-label="Product line"
          required
        >
          <option value="">Select Product Line *</option>
          <option value="Microfiber Leather">
            Microfiber Leather (PU/PVC) - 80%
          </option>
          <option value="Furniture Fabrics">
            Furniture Fabrics - 20%
          </option>
          <option value="Both">Both</option>
          <option value="Curtains/Rugs">Curtains / Rugs</option>
        </select>
        <select
          className="border rounded-lg px-4 py-2"
          name="application"
          aria-label="Application"
          required
        >
          <option value="">Select Application *</option>
          <option value="Car Seats">Car Seats (Automotive)</option>
          <option value="Sofa">Sofa (Furniture)</option>
          <option value="Shoes">Shoes (Footwear)</option>
          <option value="Bags">Bags (Fashion)</option>
          <option value="Construction Tender">Construction Tender (Hotels/Resorts/Apartments)</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <select
          className="border rounded-lg px-4 py-2"
          name="customerType"
          aria-label="Customer type"
        >
          <option value="">Customer Type</option>
          <option value="Manufacturer">Manufacturer</option>
          <option value="Distributor/Reseller">Distributor / Reseller</option>
          <option value="Agency Partner">Agency Partner</option>
          <option value="Construction/Tender">Construction / Tender</option>
          <option value="Online Store">Online Store (Amazon/Shopify)</option>
          <option value="Other">Other</option>
        </select>
        <select
          className="border rounded-lg px-4 py-2"
          name="manufacturingLocation"
          aria-label="Preferred manufacturing location"
        >
          <option value="">Preferred Manufacturing Location</option>
          <option value="China">China (Cost Competitive)</option>
          <option value="Vietnam">Vietnam (Enhanced Compliance)</option>
          <option value="Either">Either / Flexible</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="border rounded-lg px-4 py-2"
          name="moq"
          placeholder="Target MOQ / trial qty"
          aria-label="Minimum order quantity"
        />
        <input
          className="border rounded-lg px-4 py-2"
          name="specs"
          placeholder="Thickness / width / backing"
          aria-label="Specifications"
        />
      </div>
      <textarea
        className="border rounded-lg px-4 py-2"
        rows={5}
        name="message"
        placeholder="Notes, colors, standards needed (REACH, TB117, BS5852, OEKO-TEX®)…"
        aria-label="Additional message"
      ></textarea>
      <button
        className="btn btn-primary mt-2"
        type="submit"
        disabled={status === 'sending'}
        aria-label="Submit request"
      >
        {status === 'sending' ? 'Sending…' : 'Send Request'}
      </button>
      {status === 'ok' && (
        <p className="text-green-700" role="status">
          Thanks! We received your request.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600" role="alert">
          Something went wrong. Please email contact@vietecotex.com.
        </p>
      )}
    </form>
  );
}

