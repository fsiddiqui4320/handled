'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FadeIn from '@/components/ui/FadeIn'

interface FormValues { email: string }

export default function CTA() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log('CTA form:', data)
    setSubmitted(true)
  }

  return (
    <section className="relative bg-handled-950 py-20 px-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(77,175,124,0.05)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-content flex justify-center">
        <FadeIn direction="none">
          <div className="w-full max-w-[480px] text-center">
            <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-4">Work with us</p>
            <h2 className="font-serif text-[28px] font-bold text-white mb-3 leading-tight">
              Tell us which operation is slowing you down.
            </h2>
            <p className="text-sm text-white/40 mb-8">
              We&apos;ll map out how Handled works inside your existing setup. No commitment, no pitch deck.
            </p>

            {submitted ? (
              <p className="text-handled-300 text-[15px]">We&apos;ll reach out within one business day.</p>
            ) : (
              <>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2 w-full max-w-[400px] mx-auto">
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    type="email"
                    placeholder="Work email"
                    className="flex-1 w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-handled-300"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-handled-300 text-handled-950 rounded-md px-4 py-2 text-sm font-medium hover:bg-handled-200 transition-colors whitespace-nowrap"
                  >
                    Schedule 20 min
                  </button>
                </form>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-2">Please enter a valid email address.</p>
                )}
                <p className="text-[10px] text-stone-500 mt-4">
                  No sales call. We map your workflow and show you what Handled would actually do.
                </p>
              </>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
