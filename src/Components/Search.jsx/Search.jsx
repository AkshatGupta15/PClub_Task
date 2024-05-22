import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Search = () => {
    const {term} = useParams()
    const [searchTerm , setSearchTerm] = useState(term);
    useEffect(()=>{
        setSearchTerm(term)
    })
  return (
    <div>Search</div>
  )
}
