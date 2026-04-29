'use client'
import { useEffect, useState } from 'react'

const queueItems = [
  { label: 'CAQH profile verified', status: 'done' },
  { label: 'Availity enrollment submitted', status: 'done' },
  { label: 'Payer portal follow-up', status: 'progress' },
  { label: 'License renewal', status: 'queued' },
]

export default function WorkflowCard() {
  const [checkedCount, setCheckedCount] = useState(2)

  useEffect(() => {
    const interval = setInterval(() => {
      setCheckedCount(prev => (prev >= queueItems.length ? 0 : prev + 1))
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-handled-900/80 border border-handled-700/50 rounded-2xl p-5 shadow-xl w-full max-w-sm mx-auto">
      <p className="text-[10px] tracking-widest uppercase text-handled-300 font-medium mb-4">
        Credentialing queue — live
      </p>

      <div className="space-y-3 mb-5">
        {queueItems.map((item, i) => {
          const isChecked = i < checkedCount
          const isInProgress = i === checkedCount

          let displayLabel = item.label
          if (isInProgress) displayLabel = `${item.label} — in progress`
          else if (!isChecked && i > checkedCount) displayLabel = `${item.label} — queued`

          return (
            <div key={item.label} className="flex items-center gap-3">
              <div className="relative flex-shrink-0 w-5 h-5 flex items-center justify-center">
                {isChecked ? (
                  <div className="w-5 h-5 rounded-full bg-handled-300 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#0e2318" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : isInProgress ? (
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-handled-700" />
                )}
              </div>
              <span className={`text-sm leading-snug ${
                isChecked
                  ? 'text-white/40 line-through'
                  : isInProgress
                  ? 'text-amber-300'
                  : 'text-white/40'
              }`}>
                {displayLabel}
              </span>
            </div>
          )
        })}
      </div>

      <div className="border-t border-handled-700/50 mb-4" />

      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl font-medium text-white">14</p>
          <p className="text-[11px] text-white/40">providers active this week</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium text-handled-300">3 days</p>
          <p className="text-[11px] text-white/40">avg. cycle time</p>
        </div>
      </div>
    </div>
  )
}
