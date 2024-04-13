
import { Avatar } from '@mui/material'
import React from 'react'

const StoryCircle = () => {
  return (
    <div>
      <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            src="https://pm1.narvii.com/6513/995f6fc8820b24b6c952aa63bab87527bb8f8702_hq.jpg"
          >
            
          </Avatar>
          <p>Jush</p>
        </div>
    </div>
  )
}

export default StoryCircle
