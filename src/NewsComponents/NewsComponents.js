import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apikey from "../config"
import NewsCard from './NewsCard'
import { useContext } from 'react'
import { CategoryContext } from '../Context/Context'
import "./NewsCard.css"




const NewsComponents = () => {

    const {category} = useContext(CategoryContext)
   
   const[newsdata,setnewsdata] = useState([])
   const[totalresult, settotalresult] = useState()
   const [loadMore, setLoadMore] = useState(20);
   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apikey}&pageSize=${loadMore}`
   const getnewsdata = async()=>{
       const res = await axios.get(url)
       const data = await res.data
       console.log(data)
       console.log(data.articles)
       setnewsdata(data.articles)
       
       settotalresult(data.totalResults);

    }

    useEffect(()=>{
         getnewsdata()
    },[category, loadMore,setLoadMore, totalresult])

  return (
    <div>
        <NewsCard newsData={newsdata} />
        
        {loadMore <= totalresult && (
           
          <>
          
            <hr />
            <div className='loadmore_div'>
            <button className='loadmore' onClick={()=> setLoadMore(loadMore + 20)}>load more</button>
            </div>

           
          </>
        )}
    </div>
  )
}

export default NewsComponents