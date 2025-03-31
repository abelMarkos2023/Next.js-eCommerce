import React from 'react'

const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-orange-500"></div>
    </div>
)
}

export default loading