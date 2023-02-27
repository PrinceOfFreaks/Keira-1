import React, { useEffect, useState, } from 'react'
import axiosInstance from '../../axios/axiosInceptors'

import './Gallery.css'

const Icons = [
    { label: "icon", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "Special", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FSpecial.png&w=64&q=75" },
    { label: "CLOTHING", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FClothing.png&w=64&q=75" },
    { label: "SPECIES", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FOffhand.png&w=64&q=75" },
    { label: "Hair", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FHair.png&w=64&q=75" },
    { label: "Head", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "Face", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FHeadgear.png&w=64&q=75" },
    { label: "WEAPON", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "EYES", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "MOUTH", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "EAR", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
    { label: "BACKGROUND", icon: "https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2F0%2FType.png&w=64&q=75" },
]
const Filter = ({ TabsData,setTabs,activeTabIndex,setdata,setlength ,page,selectfilter,setfilter,setendpoint,SearchValue,setSearchFilter}) => {


    const keys=Object.keys(TabsData || {});
   
    const selecTabHandler=(target,key)=>{
        
        if(target.checked){
            console.log(target.checked)
            setfilter(prev=> {
                if(prev[key]?.findIndex(item=>item===target?.value)===-1){
                    {console.log(target.value)}
                    return {                
                        ...prev,
                        [key]:[...prev[key],target.value]
                       }
                }else{
                    return {                
                        ...prev
                    }
                }
            })
        }else{
            const updatestate=selectfilter[key]?.filter(item=>item !==target.value);
            setfilter(prev=> ({
                ...prev,
                [key]:updatestate, 
            })) 
        }
        
    }

    useEffect(()=>{
        const filterhandler=()=>{
            let flagExist=false            
            for (const key in selectfilter) {
                if(selectfilter[key].length>0){
                    flagExist=true
                    break;
                }           
            }
   
            if(flagExist){
                        if(activeTabIndex===0){
                            axiosInstance
                            .post('/searchFilter-avatars',{
                                    ...selectfilter
                            })
                            .then((response)=>{
                                setdata(response?.data)
                                setlength(response?.data?.length)
                                setendpoint({
                                    user:'avatar',
                                    searchApi:'/searchFilter-avatars'
                                })
                            })
                        }else{
                            axiosInstance
                            .post('/searchFilter-cars',{
                                ...selectfilter
                            })
                            .then((response)=>{
                                setendpoint({
                                    user:'cars',
                                    searchApi:'/searchFilter-cars'
                                })
                                setdata(response?.data)
                                setlength(response?.data?.length)
                                return;
                            })
                        }                                
            }else{
                    if(activeTabIndex===0){

                            axiosInstance
                            .get(`/get-avatars/?page=${page}`)
                            .then((response)=>{
                                setendpoint({
                                    user:'avatars',
                                    searchApi:'/get-avatars'
                                })
                                setlength(response?.data?.length)
                                setdata(response?.data);
                            })
                    }else{
                            axiosInstance
                            .get(`/get-cars/?page=${page}`)
                            .then((response)=>{
                                setendpoint({
                                    user:'cars',
                                    searchApi:'/get-cars'
                                })
                                setdata(response?.data)
                                setlength(response?.data?.length)
                            })
                    }
            }
        }
        // filterhandler();
        const myTimeout=setTimeout(filterhandler,500);

        return ()=>{
            clearTimeout(myTimeout)
        }
    },[selectfilter])


    
    const searchFilter=(value,key)=>{
        setSearchFilter(value)
        const lowerkey=key.toLowerCase();
        const uppercase=lowerkey.toUpperCase();

        if(activeTabIndex===0){
            axiosInstance
            .post(`/search-FilterAvatars?${lowerkey}=${value}&key=${key}`)
            .then((response)=>{
                const {Background,Skin,Eyes,Mouth,Head,Clothing,Weapon,Species}=response.data
                setTabs(prvestate=>({
                    ...prvestate,
                    Background:Background || TabsData.BACKGROUND,
                    Skin:Skin || TabsData.Skin,
                    Mouth:Mouth || TabsData.Mouth,
                    Eyes:Eyes || TabsData.Eyes,
                    Head:Head || TabsData.Head,
                    Clothing:Clothing || TabsData.Clothing,
                    Weapon:Weapon || TabsData.Weapon,
                    Species:Species || TabsData.Species
                }))
            })               
        }else{
            axiosInstance
            .post(`/search-FilterCars?${lowerkey}=${value}`)
            .then((response)=>{
                const {Background,HOOD,NEONGLOW,DOOR,COLOR,RIMS,REAREXHAUST,SIDEEXHAUST,HEADLIGHTS,BUMPER,ROOF,BODY}=response?.data
                setTabs((prvestate) => ({
                  ...prvestate,
                  Background: Background || TabsData.Background,
                  HOOD: HOOD || TabsData.HOOD,
                  NEONGLOW: NEONGLOW || TabsData.NEONGLOW,
                  DOOR: DOOR || TabsData.DOOR,
                  COLOR: COLOR || TabsData.COLOR,
                  RIMS: RIMS || TabsData.RIMS,
                  REAREXHAUST: REAREXHAUST || TabsData.REAREXHAUST,
                  SIDEEXHAUST: SIDEEXHAUST || TabsData.SIDEEXHAUST,
                  HEADLIGHTS: HEADLIGHTS || TabsData.HEADLIGHTS,
                  BUMPER: BUMPER || TabsData.BUMPER,
                  ROOF: ROOF || TabsData.ROOF,
                  BODY: BODY || TabsData.BODY,
                }));
            })

        }
     }

     const searchBy=(e)=>{
        const search=e.target.value;
        console.log(search)
        if(activeTabIndex===0){
            axiosInstance
            .post(`/search-avatars/?search=${search}`)
            .then((response)=>{
                setendpoint({
                    user:'avatars',
                    searchApi:'/search-avatars'
                })
                setlength(response?.data?.length)
                setdata(response?.data);
            })
        }else{
            axiosInstance
            .post(`/search-cars/?search=${search}`)
            .then((response)=>{
                setendpoint({
                    user:'cars',
                    searchApi:'/search-cars'
                })
                setlength(response?.data?.length)
                setdata(response?.data);
            })
        }
     }

    return (
        <>
            <div className='flex flex-col lg:w-1/4  md:min-w-[240px] lg:min-w-[280px]'>
                <div className=' lg:block relative z-10 flex  justify-between h-12  border-b border-opacity-10 border-white'>
                    <h1 className='text-xl uppercase font-extrabold tracking-tight goldentext'>Filter</h1>
                </div>
                <div className='overflow-y-auto pb-3  lg:px-0 pt-3 lg:max-h-[calc(100vh-6.5rem)] tabs-main'>
                    <form className='flex  w-full pb-2 lg:pb-3 focus:border-red-300 focus-within:border-b-black border-b relative border-opacity-10  items-center border-white'>
                        <img alt="" src="https://www.azuki.com/_next/image?url=%2Ffiltericons%2FWhite%2FSearch.png&w=64&q=75"   className="lg:w-7 lg:h-7 h-5 w-5  mr-2 "></img>
                        <input placeholder="Sort by serial..." id="searchbyid" type="text" className="h-full text-[12px] lg:text-sm w-full z-10 focus:outline-none active:outline-none border-0 border-none bg-transparent text-white" onChange={searchBy}/>
                    </form>
                    {keys?.map((item) => (
                            <details className="border-b border-opacity-10  py-0 border-white opacity-100">
                                <summary className="w-full py-2 lg:py-3 flex items-center justify-between text-sm hover:opacity-80  after:content-plus">
                                    <span className="font-600 flex items-center relative text-[11px] lg:text-xs uppercase ">
                                        <img alt="" src={Icons.find(icon=>icon.label===item)?.icon}  className="lg:w-7 lg:h-7 h-5 w-5 mr-2" />
                                        {item}
                                    </span>
                                </summary>
                                
                                <div className="pt-0 pb-4 lg:max-h-80 galleryscroll lg:overflow-y-auto pr-2">
                                    <input class="w-full bg-transparent duration-300 text-sm p-2 mb-2 lg:w-search border focus:outline-none   border-opacity-20 focus:border-opacity-40" placeholder="Search..." type="text"  onChange={(e)=>{searchFilter(e.target.value,item)}}/>
                                    <div className="space-y-0">
                                    {TabsData[item]?.map((SubTabs)=>(
                                        <div className="flex px-2 items-center galleryinput">
                                        
                                                <>
                                                    <input id="filter-Type-0" name="Type[]" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" value={SubTabs} onChange={(e)=>selecTabHandler(e.target,item)} />
                                                    <label for="filter-Type-0" class="ml-2 uppercase font-mono text-xs pt-2 pb-1.5 opacity-80 w-full cursor-pointer h-full"> {SubTabs} 
                                                    </label>
                                                </>                                                                 
                                        </div>
                                      ))} 
                                    </div>
                                </div>
                            </details>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Filter