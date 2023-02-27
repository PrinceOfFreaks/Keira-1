import React, { useState } from 'react'
import axiosInstance from '../../axios/axiosInceptors';
import CardInfo from './CardInfo';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux'
import { GetData } from '../redux/thunk/getData';

const Cards = ({setlength,activeTabIndex, setdata,data ,endpoint,setendpoint,SearchValue,setSearchFilter, selectfilter,page,setpage}) => {
    const [modal, setModal] = React.useState({status:false, item:null});
    const [singlePost,setsinglePost]=useState();
    const dispatch = useDispatch()

    const modalCloseHandler=()=>{
        setModal({status:false, item:null})
    }

    const postHandler=(id)=>{
        axiosInstance.
        get(`/post/${id}`)
        .then((post)=>{
            setsinglePost(post?.data.post)
        })
    }

    const fetchScroll=()=>{
        console.log('dispatch')
        dispatch(GetData(page+1,setpage,setdata,endpoint,setlength,activeTabIndex))
    }
    return (
        <>
            <InfiniteScroll
                dataLength={page *20  || 0} //This is important field to render the next data
                next={fetchScroll}
                hasMore={true}
                loader={<h4>Loading...</h4>}

                refreshFunction={()=>{}}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                
                >
                        <div className='z-20 grid lg:grid-cols-4  2xl:grid-cols-5 grid-cols-2 lg:gap-x-6 gap-x-4 lg:gap-y-2 gap-y-1 lg:col-span-3'>
                            {data?.avatars &&
                            
                                data?.avatars?.map((item) => (
                                    <>
                                    <div className="group cursor-pointer relative fade-in text-sm lg:-20  duration-300" onClick={()=>{setModal({status:true,item:item}); postHandler(item._id)}}>
                                        <div className='w-full relative fade-in lg:group-hover:scale-[1.01] group-hover:shadow-me duration-300 rounded-xl square aspect-w-1 aspect-h-1 overflow-hidden bg-gray-100 shadow-me'>
                                            <img alt="" sizes="(max-width: 1024px) 100vw, 400px" src={item.image} class=" duration-300 w-full h-full object-center object-cover" />
                                        </div>
                                        <p style={{color:"rgba(255,255,255,0.5)"}}  className=' mt-1  uppercase font-mono tracking-widest text-[10px] text-center'>{activeTabIndex===0 ? 'Azuki' :'Beanz' }</p>
                                        <h3 className="goldentext font-600  pb-2 -mt-1 text-xs tracking-wider text-center uppercase">{item.name}</h3>
                                    </div> 
                                    </>                       
                                ))                
                            }
                            {typeof data?.cars==='object' &&
                                data?.cars?.map((item) => (
                                    <>
                                    <div className="group cursor-pointer relative fade-in text-sm lg:-20  duration-300" onClick={()=>{setModal({status:true,item:item}); postHandler(item._id)}}>
                                        <div className='w-full relative fade-in lg:group-hover:scale-[1.01] group-hover:shadow-me duration-300 rounded-xl square aspect-w-1 aspect-h-1 overflow-hidden bg-gray-100 shadow-me'>
                                            <img alt="" sizes="(max-width: 1024px) 100vw, 400px" src={item.image} class=" duration-300 w-full h-full object-center object-cover" />
                                        </div>
                                        <p style={{color:"rgba(255,255,255,0.5)"}}  className=' mt-1  uppercase font-mono tracking-widest text-[10px] text-center'>{activeTabIndex===0 ? 'Azuki' :'Beanz' }</p>
                                        <h3 className="goldentext font-600  pb-2 -mt-1 text-xs tracking-wider text-center uppercase">{item.name}</h3>
                                    </div> 
                                    </>                       
                                ))     
                            }
                        </div>
            </InfiniteScroll>
            {modal.status && <CardInfo  onHide={modalCloseHandler} data={singlePost}/>}
        </>
    )
}

export default Cards