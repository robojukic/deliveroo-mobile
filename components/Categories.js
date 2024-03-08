import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { client } from '../sanity'

const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        client.fetch(`
        *[_type=="category"]
        `).then((data)=>{
            setCategories(data)
        })
    },[])
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:15,paddingTop:10}}>
        {categories.map((item)=>(
            <CategoryCard
            key={item._id}
            imgUrl={item.image} 
            title={item.name}/>
        ))}
    </ScrollView>
  )
}

export default Categories