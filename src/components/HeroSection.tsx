import { useState } from 'react'
import LogoBadge from './LogoBadge'

// 1. Sign up at formspree.io and create a form pointed at info@lakemontsolutions.com
// 2. Replace YOUR_FORM_ID below with the ID from your Formspree dashboard (e.g. "xyzabc12")
const FORMSPREE_ID = 'mrevyggv'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  industry: string
  companySize: string
  website: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function HeroSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    website: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="flex flex-col items-center justify-start min-h-screen px-6 py-20">
      <div className="w-full max-w-2xl flex flex-col items-center gap-10 text-center">
        <LogoBadge />

        <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[#1a1a1a]">
          Your company is missing a nervous system.
        </h1>

        <p className="text-[1.05rem] leading-relaxed text-[#4a4540] max-w-md">
          Tell us about your business and we'll identify the AI agents that
          should already be working alongside your team.
        </p>

        {status === 'success' ? (
          <div className="w-full bg-white rounded-2xl shadow-sm border border-[#d8d2c5] px-8 py-14 text-center">
            <p className="text-[1.15rem] font-semibold text-[#1a1a1a]">
              Thanks — we'll be in touch soon.
            </p>
            <p className="mt-2 text-[0.9rem] text-[#4a4540]">
              We received your information and will respond within 1 business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-2xl shadow-sm border border-[#d8d2c5] overflow-hidden text-left"
          >
            <div className="px-6 pt-6 pb-5 space-y-5">
              {/* Contact */}
              <fieldset className="space-y-3">
                <legend className="text-xs font-semibold uppercase tracking-widest text-[#9e9690] pb-1">
                  Contact
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Work Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </fieldset>

              <div className="h-px bg-[#ede8dc]" />

              {/* Company */}
              <fieldset className="space-y-3">
                <legend className="text-xs font-semibold uppercase tracking-widest text-[#9e9690] pb-1">
                  Company
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Field
                    label="Company Name"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Industry"
                    name="industry"
                    type="text"
                    placeholder="e.g. Real Estate, SaaS…"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  />
                  <SelectField
                    label="Company Size"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                  >
                    <option value="">Select…</option>
                    <option value="1-10">1–10 employees</option>
                    <option value="11-50">11–50 employees</option>
                    <option value="51-200">51–200 employees</option>
                    <option value="201-500">201–500 employees</option>
                    <option value="500+">500+ employees</option>
                  </SelectField>
                  <Field
                    label="Website"
                    name="website"
                    type="url"
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </fieldset>

              <div className="h-px bg-[#ede8dc]" />

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-[#4a4540]">
                  How can we help? <span className="text-[#9e9690]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="Describe what your company does and what you're hoping to improve…"
                  className="w-full bg-[#faf9f7] rounded-lg border border-[#d8d2c5] px-4 py-3 text-[0.9rem] text-[#1a1a1a] placeholder:text-[#b0a898] outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                />
              </div>
            </div>

            <div className="h-px bg-[#ede8dc]" />

            <div className="px-6 py-4 flex items-center justify-between">
              {status === 'error' ? (
                <span className="text-xs text-red-500">
                  Something went wrong — please try again or email{' '}
                  <a
                    href="mailto:info@lakemontsolutions.com"
                    className="underline"
                  >
                    info@lakemontsolutions.com
                  </a>
                  .
                </span>
              ) : (
                <span className="text-xs text-[#9e9690]">
                  We'll respond within 1 business day.
                </span>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-shrink-0 bg-[#1a1a1a] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#333] disabled:opacity-50 transition-colors"
              >
                {status === 'submitting' ? 'Sending…' : 'Get in touch'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function Field({ label, name, type, placeholder, value, onChange, required }: FieldProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-[#4a4540]">
        {label}
        {required && <span className="text-[#9e9690]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[#faf9f7] rounded-lg border border-[#d8d2c5] px-4 py-2.5 text-[0.9rem] text-[#1a1a1a] placeholder:text-[#b0a898] outline-none focus:border-[#1a1a1a] transition-colors"
      />
    </div>
  )
}

type SelectFieldProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children: React.ReactNode
}

function SelectField({ label, name, value, onChange, children }: SelectFieldProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-[#4a4540]">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-[#faf9f7] rounded-lg border border-[#d8d2c5] px-4 py-2.5 text-[0.9rem] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors appearance-none cursor-pointer"
      >
        {children}
      </select>
    </div>
  )
}
