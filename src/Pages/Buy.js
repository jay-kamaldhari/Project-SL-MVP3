import React, { useState } from 'react'
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import userTick from "../assets/img/custom/userTick.png";
import AlienMonster from "../assets/img/icons/custom/alien-monster.svg";
import RainbowIcon from "../assets/img/icons/custom/rainbow.svg";
import FinishedCollectiblePopup from '../Components/Popup/PlaceABidPopup';
import PlaceABidFollowPopup from '../Components/Popup/PlaceABidFollowPopup';
import ErrorPopup from '../Components/Popup/ErrorPopup';
import ShareThisNFTPopup from '../Components/Popup/ShareThisNFTPopup';
import WhatIswETHPopup from '../Components/Popup/WhatIswETHPopup';
import FullScreenImage from '../Components/Popup/FullScreenImage';
import ReportPopup from '../Components/Popup/ReportPopup';
import CheckOut from '../Components/Popup/CheckOut';

import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import Buytab from '../Components/Tabs/Buytab';
import ArtworkWeek from './ArtworkWeek';
import FilterProperties from '../Components/FilterProperties';
import FilterCategory from '../Components/FilterCategory';
import BuyHistory from '../Components/BuyCopmponent/BuyHistory';
import BuyAuction from '../Components/BuyCopmponent/BuyAuction';

const Buy = () => {
    const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);
    const [singlePopup, setSinglePopup] = useState(false);
    const [errorPopups, setErrorPopup] = useState(false);
    const [sharePopup, setsharePopup] = useState(false);
    const [reportPopup, setReportPopup] = useState(false);
    const [helpPopup, sethelpPopup] = useState(false);
    const [CheckOutPopup, setCheckOutPopup] = useState(false);
    
    let [openImage, setOpenImage] = useState(false)

    const menu = (
        <Menu>
            <Menu.Item onClick={() => setSingleCollectionPopup(true)}>
                New bid
            </Menu.Item>
            <Menu.Item onClick={() => setCheckOutPopup(true)} >
                Purchase now
            </Menu.Item>
            <div className="mt-3 mb-3 border-bottom w-100"></div>
            <Menu.Item>
                View on opensea
            </Menu.Item>
            <Menu.Item>
                Refresh Metadata
            </Menu.Item>
            <Menu.Item onClick={() => setsharePopup(true)}>
                Share
            </Menu.Item>
            <Menu.Item onClick={() => setReportPopup(true)}>
                Report
            </Menu.Item>
        </Menu>
    );

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const properties = [
        {pr_name: 'Eyes', pr_subname: 'Empty'},
        {pr_name: 'Ears', pr_subname: 'Empty'},
        {pr_name: 'Mouth', pr_subname: 'Peircing'},
        {pr_name: 'Body', pr_subname: 'Green'},
        {pr_name: 'Neck', pr_subname: 'Empty'},
        {pr_name: 'Head', pr_subname: 'Black Wreath'}
    ];

    const category = [
        {cat_img: RainbowIcon, cat_title: 'Art'},
        {cat_img: AlienMonster, cat_title: 'Metaverse'}
    ]


    return (
        <>
            {
                openImage && <FullScreenImage setOpenImage={setOpenImage} />
            }
            {
                singleCollectionPopup && <FinishedCollectiblePopup setSinglePopup={setSinglePopup}  sethelpPopup={sethelpPopup} setSingleCollectionPopup={setSingleCollectionPopup} />
            }
            {
                singlePopup && <PlaceABidFollowPopup setSinglePopup={setSinglePopup} setErrorPopup={setErrorPopup} setCheckOutPopup={setCheckOutPopup}/>
            }
            {
                errorPopups && <ErrorPopup setErrorPopup={setErrorPopup} />
            }
            {
                sharePopup && <ShareThisNFTPopup setsharePopup={setsharePopup} />
            }
            {
                reportPopup && <ReportPopup setReportPopup={setReportPopup} />
            }
            {
                helpPopup && <WhatIswETHPopup  sethelpPopup={sethelpPopup} />
            }
            {
                CheckOutPopup && <CheckOut  setCheckOutPopup={setCheckOutPopup} setSinglePopup={setSinglePopup} />
            }



            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="buy-art-work-week">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src={artWorkWeekOne} className="border-radius" width="100%" alt="" onClick={() => {setOpenImage(true); document.body.style.overflow = "hidden";}} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="buy-art-work-week-card border-radius">
                                
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3><b>Artwork of the week</b></h3>
                                    <div className="d-flex">
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ml-2" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>
                                </div>


                        {/*      /////////     Artwork week components    /////////   */}
                               <ArtworkWeek />

                                
                                <div className="mt-5">

                        {/*      /////////     Buytab components    /////////   */}
                                <Buytab />

                                    <div className="tab-content artwork-tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade  show active" id="pills-Details" role="tabpanel" aria-labelledby="pills-details-tab">
                                            <div className="details-tab-block mb-2">
                                                <b className="text-secondary d-block mb-2">Owner</b>
                                                <div className="w-100 d-flex justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                        <div className="ml-4">
                                                            <div><b>Mad Scientist</b></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-tab-block mb-2">
                                                <b className="text-secondary d-block mb-2">Properties</b>
                                                <ul className="owner-details-list">
                                                    {
                                                      properties.map((pr_data, pr_) =>  
                                                           <li key={pr_}><a href="#0">{pr_data.pr_name}<span>{pr_data.pr_subname}</span></a></li>
                                                         )
                                                    }
                                        
                                                </ul>
                                            </div>
                                            <div className="details-tab-block">
                                                <b className="text-secondary d-block mb-2">Category</b>
                                                <ul className="category-btn-list">

                                                    {
                                                        category.map((categ, cat_k) =>
                                                             <li key={cat_k}><a href="#0"><span><img src={categ.cat_img}/></span>{categ.cat_title}</a></li>
                                                        )
                                                    }

                                                </ul>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={userTick} width="36" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listed 1 edition for</span> <b> 0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b> <span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>

                                                <button onClick={() => setCheckOutPopup(true)} className="new-buy btn-ping">Buy</button>
                                            </div>

                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={userTick} width="36" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listed 1 edition for</span> <b> 0.024 ETH</b></div>
                                                        <div><span className="color-gray">1 edition </span><b>not for sale</b></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><b>0.0002 ETH </b><span className="color-gray">by </span><b>tanelen tivan </b><span className="color-gray">for 10 editions</span></div>
                                                        <div><span className="color-gray">26/072021, 16:28</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        


                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                              <BuyHistory />

                                            
                                        </div>
                                    </div>

                                    <div className="tab-pane-bottom-solid"></div>
                                </div>

                            {/*  //////////       Buy Auction Data         ////////  */}
                            <BuyAuction />
                                

                                <div className="row d-flex justify-content-center mt-5 action-btn buy-highest-bid-block-btn">
                                    <div className="col-sm-12 col-lg-8 d-flex">
                                        <button className="btn-ping  w-100" onClick={() => setCheckOutPopup(true)}>
                                            Buy for 1.25 ETH
                                        </button>

                                        <button className="btn-primary-outline ml-3 w-100" onClick={() => setSingleCollectionPopup(true)}>
                                            Place a Bid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Buy
