import React, { useState } from 'react'
import priceP from "../assets/img/icons/custom/price_p.svg"
import starticon from '../assets/img/icons/custom/star_icon.png';
import sonsuz from "../assets/img/icons/custom/open_p.png";
import plus from "../assets/img/icons/custom/plus.svg";
import darkcircle from "../assets/img/icons/custom/darkcircle.svg";
import {Link} from "react-router-dom";
import CreateCollectibleMultiplePopup from '../Components/Popup/CreateCollectibleMultiplePopup';
import { Select } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";
import MultiCollectibleDetails from './MultiCollectibleDetails';
import AdvanceCollectionSetting from './AdvanceCollectionSetting';
const { Option } = Select;


SwiperCore.use([Keyboard, Pagination, Navigation]);

const CreateCollectibleMulti = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);
    const [filesize, setfilesize] = useState("");

    const profileImage = React.useRef(null);
    const profileUploader = React.useRef(null);

    const handleprofilepicUploadr = e => {  
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = profileImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
                if (!file) {
                    setfilesize('Please select Valid Image.' );
                    return false;
                  }
                
            };
            reader.readAsDataURL(file);
        }
    };

    const price_one = ['ETH', 'BTC', 'USDC', 'Starlight', 'ASH', 'ATRI', 'FIRST'];
    
    const multi_call = [
        {myimg: starticon, title: 'STARLIGHT', dass: 'SLX'},
        {myimg: darkcircle, dass: '---'},
        {myimg: darkcircle, dass: '---'},
        {myimg: darkcircle, dass: '---'},
        {myimg: darkcircle, dass: '---'}
    ];

    const [showDetail,setShowDetail] = useState(false);
    const handleToggle = () => setShowDetail(!showDetail);

    return (
        <>

            {
                singleCollectionPopup && <CreateCollectibleMultiplePopup setSingleCollectionPopup={setSingleCollectionPopup} />
            }

            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="create-single-section-container multi">
                <div className="container">
                    <div className="row">
                        
                     <div className="col-sm-12">
                            <Link className="d-flex align-items-center" to="/create">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z" fill="#141414" />
                                </svg>
                                <h6 className="ml-3 mb-0">Back</h6>
                            </Link>
                        </div>

                        <div className="col-sm-12 mt-4 mb-4">
                            <h2>Create multiple collectable</h2>
                        </div>

                        <div className="col-sm-12 col-md-7">
                            <b className="mt-5">Upload File</b>

                            <div>
                                <div className="upload-file-container">
                                    <div className="color-gray">
                                        PNG, GIF, WEBP, MP4 OR MP3. MAX 100MB
                                    </div>
                                    <p style={{color: "red"}}>{filesize}</p>
                                    <input
                                                type="file"
                                                accept="image/*,video/mp4,video/x-m4v,video/*,image/x-png,image/gif,image/jpeg"
                                                onChange={handleprofilepicUploadr}
                                                ref={profileUploader}
                                                id="profilephoto"
                                                style={{
                                                    display: "none"
                                                }}
                                            />
                                    <button className="btn-primary  w-50 mt-4" onClick={() => profileUploader.current.click()}>Choose file</button>
                                </div>
                            </div>

                            <div className="mt-5 marketplace">
                                <div className="d-flex justify-content-between">
                                    <b><h5>Put on marketplace</h5></b>
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                        <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                    </div>
                                </div>

                                <div className="color-gray marketplace-content">Enter price to allow user instantly purchase your NFT</div>

                                <div className="d-flex justify-content-between mt-3">
                                    <div className="putOnMarketplace border-radius btn-primary-outline-responsive col-sm-12 col-md-5"><img src={priceP} width="32" alt="" /><b> Fixed <br/> Price</b></div>
                                    <div className="putOnMarketplace border-radius border-gray col-sm-12 col-md-5"><img src={sonsuz} width="40" alt="" /> <b>Open for <br/> bids</b></div>
                                </div>

                                <div className="mt-5">
                                    <h5><b>Price</b></h5>

                                    <div className="prize-single-collectible d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="color-gray">
                                                Enter price for one piece
                                            </span>
                                            <span className="color-gray">
                                                <div className="d-flex border">
                                                    <input placeholder="0" style={{ maxWidth: "50px" }} />
                                                    <Select className="section-select-filter ml-0" defaultValue="ETH">
                                                    {
                                                        price_one.map( (x,y) => 
                                                        <option key={y}>{x}</option> )
                                                    }
                                                    </Select>
                                                </div>
                                            </span>
                                        </div>
                                        <div>
                                            <div className="mt-4 text-right"><b><span className="color-gray">Service fee </span> <span>2.5%</span></b></div>
                                            <div className="mt-2 text-right"><b><span className="color-gray">You will receive </span> <span>0 ETH</span></b></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prize-single-collectible d-flex flex-column">
                                    <div className="d-flex justify-content-between mt-3">
                                        <b><h5>Unlock once Purchased</h5></b>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                            <label className="custom-control-label" htmlFor="customSwitch2"></label>
                                        </div>
                                    </div>
                                    <div className="color-gray">Content will be unlocked after successful transaction</div>
                                    {/* <div>
                                        <p className="color-gray mt-3 mb-0">Digital key, code to redeem or link to a file.</p>
                                    </div> */}
                                </div>

                            </div>
                        </div>



                        <div className="col-sm-12 col-md-5 pl-5 brand-new-nfp">
                            <b>Preview</b>
                            <div className="border-gray upload-box text-center border-radius mt-4 color-gray d-flex justify-content-center align-items-center p-5">
                               <label>Upload file to preview your brand new NFT</label>

                                                 <img
                                                    src=""
                                                    ref={profileImage}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        position: "absolute",
                                                        insetInlineStart: "auto",
                                                        borderRadius: "10px"
                                                    }}
                                                />
                            </div>
                        </div>



                        <div className="position-relative col-sm-12">
                            <div className="d-flex justify-content-between mt-5 mb-4">
                                <b><h5>Choose collection</h5></b>
                            </div>

                            <div className="d-flex choose-collection">
                                <div className="putOnMarketplace border-gray border-radius btn-primary-outline-responsive" onClick={() => { setSingleCollectionPopup(true); document.body.style.overflow = "hidden"; }}>
                                    <img src={plus} width="40" alt="" />
                                    <b> Create</b>
                                    <div><small className="color-gray">ERC-721</small></div>
                                </div>

                                <Swiper className="slider"  slidesPerView={4.3} navigation={true}>
                                                
                                {
                                        multi_call.map((sing, s) =>    
                                            <SwiperSlide key={s}>
                                                <div className="putOnMarketplace ml-3 border-radius btn-primary-outline-responsive">
                                                    <img src={sing.myimg} width="40" alt="" />
                                                     <div className='starslide'>{sing.title}</div>
                                                    <div><small className="color-gray">{sing.dass}</small></div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                }
                                
                                </Swiper>
                            </div>
                        </div>

                            
                        <MultiCollectibleDetails />
                        
                       
                        {showDetail && <AdvanceCollectionSetting />}
                    </div>



                    <div className="mt-5">
                        <button className="btn-primary-outline w-100" onClick={handleToggle}>{showDetail ? "Hide advanced settings" : "Show advanced settings"}</button>
                    </div>

                    <div className="mt-4">
                        <button className="btn-ping  w-100">Create Item</button>
                    </div>

                    <div className="mt-4 color-gray text-center">
                        <span>Unsaved Changes </span>
                        <span className="tooltp" data-title="Attach file or add title to save your changes.">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.66602 9.99984C1.66602 14.6023 5.39685 18.3332 9.99935 18.3332C14.6018 18.3332 18.3327 14.6023 18.3327 9.99984C18.3327 5.39734 14.6018 1.6665 9.99935 1.6665C5.39685 1.6665 1.66602 5.39734 1.66602 9.99984ZM16.6657 9.99988C16.6657 13.6818 13.6809 16.6665 9.99902 16.6665C6.31712 16.6665 3.33236 13.6818 3.33236 9.99988C3.33236 6.31798 6.31712 3.33321 9.99902 3.33321C13.6809 3.33321 16.6657 6.31798 16.6657 9.99988ZM10.8324 12.4999V14.1665H9.16569V12.4999H10.8324ZM10.8327 11.6665V11.129C12.2024 10.7207 13.0746 9.38034 12.8932 7.96267C12.7118 6.54499 11.53 5.46749 10.1017 5.41735C8.6733 5.36721 7.41891 6.3592 7.13851 7.76066L8.77351 8.08816C8.90257 7.44247 9.51039 7.00762 10.1632 7.09395C10.8159 7.18029 11.2898 7.75821 11.2466 8.41525C11.2033 9.07229 10.6578 9.58312 9.99934 9.58316C9.53911 9.58316 9.16601 9.95626 9.16601 10.4165V11.6665H10.8327Z" fill="#979797" />
                            </svg>
                        </span>
                    </div>

                </div>
            </motion.section>

        </>
    )
}

export default CreateCollectibleMulti
