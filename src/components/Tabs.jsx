import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../Redux/Features/searchslice'

const tabs = [
  { label: 'Photos', icon: '🖼️' },
  { label: 'Videos', icon: '🎬' },
  { label: 'Gifs', icon: '✨' },
]

const Tabs = () => {
  const [active, setActive] = React.useState('Photos')
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap px-4">
      {tabs.map(({ label, icon }) => (
        <button
          key={label}
          onClick={() => {
            setActive(label)
            dispatch(setActiveTab(label))
          }}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${active === label
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
              : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
            }`}
        >
          <span>{icon}</span>
          {label}
        </button>
      ))}
    </div>
  )
}

export default Tabs