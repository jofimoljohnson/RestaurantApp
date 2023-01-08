import React from 'react'
import {useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard';
import {Row,Col} from 'react-bootstrap'
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'
function Home() {

  const dispatch= useDispatch()
  const data= useSelector(state => state.restaurantList)
const {restaurant}=data



useEffect(()=>{

  dispatch(listRestaurants())
},[])

console.log(restaurant);
  return (
    <Row>
      {restaurant ?
      (restaurant.map(restaurant=>(
        <Col sm={12} md={8} lg={6} xl={3}>
          <RestaurantCard item={restaurant}/>
        </Col>
      ))):null}
     
    </Row>
  )
}

export default Home

