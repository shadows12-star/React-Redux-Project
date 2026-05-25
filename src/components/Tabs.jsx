import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../Redux/Features/searchslice'

const tabs = [
  { label: 'Photos', icon: '🖼️' },
  { label: 'Videos', icon: '🎬' },
  { label: 'Gifs',   icon: '✨' },
] 

const Tabs = () => {
  const [active, setActive] = React.useState('Photos')  // ✅ track active tab
  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-center gap-3 mt-8 flex-wrap px-4'>
      {tabs.map(({ label, icon }) => (
        <button
          key={label}
          onClick={() => {
            setActive(label)
            dispatch(setActiveTab(label))
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm border transition-all duration-200
            ${active === label
              ? 'bg-white text-purple-600 border-white shadow-md scale-105'
              : 'bg-white/20 text-white border-white/25 hover:bg-white/30'
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