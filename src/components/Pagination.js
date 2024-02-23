import React from 'react'

const Pagination = ({totalPosts,postPerPage}) => {
    let pages = [];

    for(var i=1; i<= Math.ceil(totalPosts/postPerPage) ; i++)
    {
        pages.push(i)
    }
  return (
    <div>
        {
            pages.map((page,index)=>{
                return <button key = {index}>{page}</button>
            })
        }
    </div>
  )
}

export default Pagination