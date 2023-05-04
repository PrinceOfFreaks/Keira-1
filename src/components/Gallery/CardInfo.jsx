import React,{useState, useEffect} from 'react'
import Modal from '../Modal'

const CardInfo = ({ onHide, data=[] }) => {
  console.log(data)
  const [backgroundColor, setBackgroundColor] = useState(null);
  const imageUrl = data?.image
  useEffect(() => {
    const x=100
    const y=100
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const data = imageData.data;
      const index = (x + y * imageData.width) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];
      console.log(`Pixel at (${x}, ${y}): rgba(${r}, ${g}, ${b}, ${a})`);
    
    
      setBackgroundColor(`rgb(${r}, ${g}, ${b})`);
    };
  }, [imageUrl]);
  return (
    
    <>
      <Modal onClose={onHide}>
        <div style={{  background: backgroundColor ? backgroundColor : "rgb(187, 189, 183)" }} className="shadow-me gap-x-2 md:gap-x-10 duration-300 relative rounded-lg overflow-hidden grid sm:grid-cols-12 grid-cols-1  mx-auto">
          <button class="absolute z-50 block top-4 right-4 text-black" onClick={onHide}>
            <svg class="fill-current w-6 h-6" viewBow="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z">
              </path>
            </svg>
          </button>
          <div className="md:col-span-6 sm:col-span-5 col-span-6 square grid grid-cols-1 relative">
          {/* "https://azk.imgix.net/images/14617e4c-1b3f-4c6e-8953-9a9bac14fc84.png?w=1024" */}
            <img src={data?.image} className="lg:w-full overlay-item mx-auto square h-[100%] w-[300px] sm:width-[100%]" />
          </div>

          <div className="h-full relative col-span-6 sm:col-span-7 md:col-span-6 md:pr-10 md:pl-0 px-6 md:py-0 sm:py-6 pb-6 pt-1 flex-col w-full flex justify-center text-black">

            <div className=" border-opacity-10 flex flex space-between items-end border-opacity-10 w-full border-bb border-black">
              <div className="sm:mt-10 mt-4 w-full ">
                <div className="overflow-hidden text-left px-4 pt-3 bg-black  bg-opacity-10 pb-2 rounded w-full border-opacity-0 border-white duration-300">
                  <div className="flex items-center h-full translate-x-0">
                    <div className=" cursor-default w-6 h-6 grid grid-cols-1 group  z-100">
                      <svg class="opacity-100 duration-300 fill-current overlay-item w-full h-full " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.275 22.5h2.337l1.686-5.65h4.466v-2.1H15.92l1.716-5.796h4.436v-2.1h-3.815L19.853 1.5h-2.366l-1.598 5.354h-4.82L12.664 1.5H10.3L8.702 6.854H4.236v2.1H8.08L6.365 14.75H1.93v2.1h3.815L4.088 22.5h2.337l1.686-5.65h4.82l-1.656 5.65Zm-2.543-7.75 1.715-5.796h4.821l-1.715 5.797H8.732Z" fill-rule="nonzero"></path></svg>

                    </div>

                    <div className="pl-3">
                      <h1 class="uppercase text-[0.65rem] font-400 text-black opacity-50">Jungle freaks</h1>
                      <h1 class="w-full uppercase text-xl -mt-1 font-semibold text-black">{data?.name} <span class="opacity-20 text-[0.9rem]">//</span></h1>

                    </div>

                    <div className="flex ml-auto space-x-2 text-black">
                      <a target="_blank" href="https://looksrare.org/collections/0xed5af388653567af2f388e6224dc7c4b3241c544/1116" title="View on LooksRare" class="hover:opacity-80 hover:text-black duration-200 text-black" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="fill-current undefined"><g clip-path="url(#clip0_956_48077)"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 27.0251C19.0527 27.0251 15.8514 23.8262 15.8514 19.8765C15.8514 15.9268 19.0527 12.7278 23 12.7278C26.9473 12.7278 30.1487 15.9268 30.1487 19.8765C30.1487 23.8262 26.9473 27.0251 23 27.0251ZM19.8919 19.8765C19.8919 21.5937 21.2843 22.9846 23 22.9846C24.7157 22.9846 26.1081 21.5937 26.1081 19.8765C26.1081 18.1592 24.7157 16.7684 23 16.7684C21.2843 16.7684 19.8919 18.1592 19.8919 19.8765Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.8859L13.6757 6.20081H32.3243L46 19.8859L23 42.8765L0 19.8859ZM33.5676 14.9034C27.7554 9.06723 18.2446 9.06726 12.4324 14.9035L7.45946 19.8765L12.4324 24.8495C18.2446 30.6857 27.7554 30.6857 33.5676 24.8495L38.5405 19.8765L33.5676 14.9034Z"></path></g><defs><clipPath id="clip0_956_48077"><rect width="48" height="48" fill="white" transform="translate(0 0.538696)"></rect></clipPath></defs></svg></a>
                      <a target="_blank" href="https://opensea.io/assets/0xed5af388653567af2f388e6224dc7c4b3241c544/1116" title="View on OpenSea" class="hover:opacity-80 hover:text-black duration-200 text-black" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg" class="fill-current undefined" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.0642 24.479C44.0642 35.6621 34.8294 44.729 23.4392 44.729C12.049 44.729 2.81421 35.6621 2.81421 24.479C2.81421 13.2959 12.049 4.229 23.4392 4.229C34.8318 4.229 44.0642 13.2959 44.0642 24.479ZM12.9893 25.1596L13.0784 25.0223L18.4437 16.7815C18.5221 16.6608 18.7065 16.6733 18.7658 16.8044C19.6622 18.7767 20.4356 21.2296 20.0733 22.7567C19.9186 23.385 19.4948 24.2359 19.018 25.0223C18.9565 25.1368 18.8887 25.2491 18.8167 25.3573C18.7828 25.4072 18.7256 25.4364 18.6641 25.4364H13.1461C12.9978 25.4364 12.911 25.2783 12.9893 25.1596ZM36.9051 27.9952V26.6907C36.9051 26.57 36.7864 26.4826 36.6699 26.5159L30.3954 28.2969C30.3616 28.3052 30.3319 28.3239 30.3086 28.3489C29.6364 29.0778 29.0651 29.567 28.914 29.6965L28.9036 29.7054C28.5137 30.0299 28.0306 30.2067 27.522 30.2067H25.2504V27.9328H27.0559C27.1025 27.9328 27.147 27.9161 27.1809 27.887L27.414 27.6768C27.5136 27.5874 27.6322 27.4792 27.7742 27.3398C27.7861 27.3281 27.7982 27.3163 27.8105 27.3043C27.8852 27.2312 27.965 27.1531 28.0433 27.0673C28.1366 26.9778 28.2277 26.878 28.3124 26.7802C28.4544 26.6304 28.59 26.4743 28.732 26.31C28.8337 26.2018 28.927 26.079 29.0181 25.9563C29.1198 25.8398 29.2194 25.7087 29.3126 25.5839C29.3472 25.5341 29.3839 25.4837 29.4214 25.4323C29.4576 25.3827 29.4945 25.3322 29.5309 25.2801C29.5987 25.1802 29.6665 25.0741 29.7237 24.9743C29.9017 24.7038 30.0522 24.4146 30.1793 24.1254C30.2376 24.0018 30.2841 23.8716 30.3294 23.7451C30.3352 23.7289 30.3409 23.7129 30.3467 23.6969C30.3976 23.5491 30.4399 23.4098 30.4717 23.262C30.548 22.9146 30.565 22.5692 30.531 22.2239C30.5226 22.1157 30.5141 22.0096 30.4887 21.9097V21.8931C30.4802 21.8223 30.4633 21.7433 30.4399 21.6705C30.3637 21.3334 30.245 20.9964 30.0945 20.6656C30.0437 20.5428 29.9843 20.418 29.9271 20.3036C29.7915 20.056 29.6495 19.8084 29.4885 19.5692C29.4561 19.5186 29.4204 19.4673 29.3847 19.4161C29.3573 19.3768 29.3299 19.3376 29.3041 19.2987C29.202 19.1441 29.0873 18.9951 28.9759 18.8505C28.9509 18.818 28.926 18.7857 28.9015 18.7536C28.8358 18.6689 28.7639 18.5842 28.6915 18.4989C28.6518 18.4522 28.6121 18.4054 28.5731 18.3583C28.4629 18.2272 28.3548 18.1024 28.2446 17.9797C27.8505 17.5428 27.4373 17.1474 27.0686 16.8104C27.0008 16.7438 26.9266 16.6773 26.8503 16.6127C26.5642 16.3569 26.3036 16.1343 26.0853 15.9615C26.0196 15.9119 25.9606 15.863 25.9057 15.8174C25.8687 15.7867 25.8334 15.7575 25.7993 15.7306C25.732 15.6815 25.6738 15.6379 25.6252 15.6015C25.5956 15.5794 25.5695 15.5599 25.5471 15.5434C25.5302 15.5309 25.5111 15.5226 25.492 15.5163L25.2504 15.4498V13.4858C25.2504 13.1654 25.119 12.8783 24.9093 12.6681C24.6995 12.458 24.4071 12.329 24.085 12.329C23.4408 12.329 22.9195 12.8471 22.9195 13.4858V14.809L22.7987 14.7757L22.4703 14.6841L22.1715 14.603L22.1687 14.6022C22.1687 14.6022 22.1655 14.6009 22.163 14.6009H22.1566L19.8893 13.9976C19.7897 13.9705 19.7049 14.0766 19.7558 14.1661L20.1182 14.8235C20.1388 14.8741 20.1649 14.9247 20.1917 14.9768C20.209 15.0103 20.2266 15.0444 20.2432 15.0794C20.3025 15.196 20.3619 15.3187 20.4191 15.4414C20.4699 15.5496 20.5208 15.6557 20.5801 15.7722C20.6051 15.8271 20.6306 15.8827 20.6564 15.939C20.7511 16.1454 20.8506 16.3624 20.9488 16.5961L20.9497 16.5981C21.0341 16.7951 21.1186 16.9921 21.1925 17.1974C21.3959 17.7154 21.5888 18.2688 21.7562 18.8368C21.7978 18.9638 21.8311 19.0867 21.8648 19.2112C21.8791 19.2642 21.8935 19.3175 21.9087 19.3715L21.932 19.4714C21.9999 19.7356 22.0592 19.9977 22.1016 20.262C22.1355 20.443 22.1672 20.6156 22.1842 20.7904C22.2096 20.988 22.2351 21.1857 22.2435 21.3833C22.2605 21.5644 22.269 21.7537 22.269 21.9347C22.269 22.3965 22.2266 22.8418 22.127 23.262C22.1208 23.2845 22.1146 23.3073 22.1083 23.3302C22.0804 23.4326 22.0514 23.5387 22.0168 23.6407C21.9854 23.7501 21.9447 23.8596 21.9025 23.9732C21.8877 24.013 21.8727 24.0532 21.8579 24.0942L21.8505 24.1136C21.8191 24.1969 21.787 24.2817 21.7477 24.3647C21.5379 24.8598 21.2772 25.353 21.0082 25.8148C20.614 26.4993 20.2178 27.1006 19.9401 27.4875C19.9233 27.5124 19.9068 27.5361 19.8909 27.5589C19.8709 27.5875 19.8519 27.6148 19.8342 27.6415C19.7473 27.7622 19.8363 27.9328 19.9868 27.9328H22.9195V30.2067H19.9529C19.1561 30.2067 18.4187 29.7636 18.0627 29.0542C17.8783 28.6984 17.8063 28.3073 17.8487 27.9244C17.8593 27.81 17.7724 27.7018 17.6537 27.7018H11.6611C11.5594 27.7018 11.4767 27.783 11.4767 27.8828V28.0035C11.4767 31.7567 14.5642 34.7984 18.3742 34.7984H29.124C31.1391 34.7984 32.2833 32.9955 33.4079 31.2235C33.7214 30.7296 34.0334 30.238 34.3623 29.7886C34.9535 28.9814 36.3753 28.3406 36.7907 28.1658C36.8585 28.1367 36.9051 28.0701 36.9051 27.9952Z"></path></svg></a>
                    </div>


                  </div>

                </div>
              </div>
            </div>

            <div className="grid h-full grid-cols-1">
              <div className="overlay-item flex flex-col z-100 justify-between">
                <ul className="pt-2 mt-6 md:grid-cols-2 gap-3 md:grid lg:w-auto flex scrollbar-simple  overflow-x-auto">
                  {console.log(data?.attributes)}
                  {typeof data?.attributes ==='object' && Object.keys(data?.attributes).map((item) => {
                    {console.log(item)}
                    return(
                    <li className=" text-xs items-center p-2 lg:p-3 flex rounded  border-black shrink-0 w-[75%] md:w-full" style={{ backgroundColor: "rgba(0,0,0,.05)" }}>
                      <img src="https://www.azuki.com/_next/image?url=%2Ffiltericons%2FBlack%2F0%2FType.png&w=64&q=75" className="w-8 pr-2 text-transparent" />
                      <div>
                        <p class="flex items-center uppercase opacity-60  text-[10px]  mr-auto inline-block"><span class="pt-px">{item}</span></p>
                        <p class="ml-auto -mt-[3px] ext-[13.5px] font-bold uppercase">{data?.attributes[item]}</p>
                      </div>
                    </li>
                    )
                    })}




                </ul>
                <div className="mt-auto flex w-full rounded bg-opacity-10 mb-4 py-2">
                  <a class="cursor-pointer px-2 py-2 bg-opacity-10 bg-white h-full w-ful rounded flex flex-row items-center hover:bg-opacity-30 transition duration-100 fast-fade-in" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-6 h-6 mx-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                    <div>
                      <p class="uppercase text-[12px] xs:text-[14px] font-normal font-mono pr-2">0x5e850e5a673dc4c9c...11c8008</p>
                      <p class="uppercase  text-[10px] font-semi-bold -mt-1 opacity-50 text-black">Held since Jul. 2022</p>
                    </div></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </>
  )
}

export default CardInfo