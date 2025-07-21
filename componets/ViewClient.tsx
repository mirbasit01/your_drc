'use client'
import { useEffect } from 'react'
import { incrementViews } from '@/app/actions/incrementViews'

const ViewClient = ({ id, currentViews }: { id: string, currentViews: number }) => {
  useEffect(() => {
    incrementViews(id, currentViews)
  }, [id, currentViews])

  return (
    <div className="view-container">
      <p className="view-text">
        <span className="font-black">Views: {currentViews}</span>
      </p>
    </div>
  )
}

export default ViewClient
