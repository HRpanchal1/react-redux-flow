import React, { useEffect } from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import axios from 'axios';
import { Incnumber , Decnumber } from './action';
import { useSelector , useDispatch } from 'react-redux';




export default function Home() {
    const mystate = useSelector((state) => state.Changenumber)
   const dispatch =  useDispatch()


    // useEffect(()=>{
    //     // axios.get('https://jsonplaceholder.typicode.com/users').then((resp)=>{
    //     //     console.log(resp.data);
    //     // })
    //     fetch('https://jsonplaceholder.typicode.com/users',{
    //         // method : "POST"
    //     })
    // })
    return (
        <>
            <Navbar />
            {/* <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel> */}

            <button onClick={() => dispatch(Incnumber())}>+</button>
            <h1>{mystate}</h1>
            <button onClick={() => dispatch(Decnumber())}>-</button>


            <h1>with axios</h1>
        </>
    );
}