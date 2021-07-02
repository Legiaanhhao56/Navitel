import React, { useEffect, useState } from 'react';
import styles from './mainpage.Module.css';
import Logo from '../components/Pictures/Logo';
import DatabasePicture from '../components/Pictures/Database';
import LocationPicture from '../components/Pictures/Location';
import MapPicture from '../components/Pictures/Map';
import SearchPicture from '../components/Pictures/Search';
import RoadMapPicture from '../components/Pictures/Roadmap';
import WorkPicture from '../components/Pictures/Work';
import LightBulb from '../components/Pictures/LightBulb';
import Laura from '../components/Pictures/Laura';
import Shahab from '../components/Pictures/Shahab';
import Aleksandrs from '../components/Pictures/Aleksandrs';
import MenAvatar from '../components/Pictures/MenAvatar';
import LadyAvatar from '../components/Pictures/LadyAvatar';

import Dollars from '../components/StatisticPictures/Dollars';
import FiftyPercent from '../components/StatisticPictures/FifthyPercent';
import HundredPercent from '../components/StatisticPictures/HundredPercent';
import NinetyPercent from '../components/StatisticPictures/NinetyPercent';
import ShoppingList from '../components/StatisticPictures/ShoppingList';
import ThreeSixTimes from '../components/StatisticPictures/ThreeSixTimes';
import ThreeTimeDay from '../components/StatisticPictures/ThreeTimeDay';
import TwentyNine from '../components/StatisticPictures/TwentyNine';
import { Button, Collapse} from 'react-bootstrap';

import Aos from "aos";
import "aos/dist/aos.css";


export default function MainPage() {

        const [open, setOpen] = useState(false);

        useEffect(() => {
            Aos.init({duration: 2000});
        }, [])

        return (
            <div className={styles["Container"]}>
                <header className={styles["Header"]}>
                    <div className={styles["Content"]}>
                        <div className={styles["LeftSideContainer"]}>
                            <div className={styles["Logo"]}>
                                <Logo/>
                            </div>
                            <div className={styles["TextContent"]}>
                                <h1 className={styles["Title"]}>You are losing sales every day!</h1>
                                <h1 className={styles["TitleBelow"]}>Why? - because shoppers can't find a product</h1>
                                <h1 className={styles["TitleBelowMedia"]}>Why? </h1>
                                <h1 className={styles["TitleBelowMedia2"]}>Because shoppers can't find a product</h1>
                            </div>
                            <div className={styles["TextContent2"]}>
                                <p className={styles["Paragraph"]}>Solution <i className={styles["FleshArrow"]}></i><i className={styles["FleshArrow"]}></i> Search tool for shoppers. Roadmap to the product, personalised discounts, as well as many more health and life-style features</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Did you know section */}
                <section className={styles["DidYouKnow"]}>
                    <div className={styles["HwwContainer"]}><h1 className={styles["TitleDidyouKnow"]}>Did you know?</h1></div>
                        <div className={styles["DidyouKnowBoxContainer"]}>
                            <div class="row" data-aos="fade-left">
                                <div class="col-sm">
                                    <div className={styles["DidyouKnowLeftBox"]}>
                                        <div className={styles["Circle"]}><ShoppingList/></div>
                                        <div className={styles["Shopping"]}><p className={styles["StatisticP"]}>8/10 use shopping lists</p></div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className={styles["DidyouKnowRightBox"]}>
                                        <div><Dollars/></div>
                                        <div className={styles["Shopping"]}><p className={styles["StatisticP"]}>Everyone uses their loyalty card to get discounts/bonus points</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["DidYouKnowMiddle"]}>
                                <div class="row" data-aos="fade-right">
                                    <div class="col-sm">
                                        <div className={styles["DidyouKnowLeftMiddleBox"]}>
                                            <div><NinetyPercent/></div>
                                            <div className={styles["Ninety"]}><p className={styles["StatisticP"]}>of shoppers use the shopping remote or self-checkout</p></div>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className={styles["DidyouKnowRightMiddleBox"]}>
                                            <div><FiftyPercent/></div>
                                            <div><p className={styles["StatisticP"]}>of the time hall workers do not know where the specific product is, shoppers say</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" data-aos="fade-left">
                                <div class="col-sm">
                                    <div className={styles["DidyouKnowLeftLastBox"]}>
                                        <div><ThreeTimeDay/></div>
                                        <div className={styles["DownStat"]}><p className={styles["StatisticP"]}>shoppers ask for help in order to find a product (per hall worker)</p></div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className={styles["DidyouKnowRightLastBox"]}>
                                        <div><TwentyNine/></div>
                                        <div className={styles["DownStat"]}><p className={styles["StatisticP"]}>on average is spent in a grocery store per visit</p></div>
                                    </div>
                                </div>
                            </div>
                            {/* last statistics */}
                            <div className={styles["DidYouKnowLast"]}>
                                <div class="row" data-aos="fade-right">
                                    <div class="col-sm">
                                        <div className={styles["DidyouKnowLeftLast"]}>
                                            <div><HundredPercent/></div>
                                            <div className={styles["DownStat"]}><p className={styles["StatisticP"]}>of shoppers have experienced not finding an item in a store</p></div>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className={styles["DidyouKnowRightLast"]}>
                                            <div><ThreeSixTimes/></div>
                                            <div className={styles["DownStat"]}><p className={styles["StatisticP"]}>on average people go to the grocery store</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                {/* section how it works */}
                {/* <div className={styles["DirectionArrow1"]}><LeftArrow/></div>
                <div className={styles["DirectionArrow2"]}><LeftArrow/></div>
                <div className={styles["DirectionArrow3"]}><LeftArrow/></div> */}

                <section className={styles["HowItWorks"]}>
                    <div><h1 className={styles["HowText"]}>How it works?</h1></div>
                    <div className={styles["BoxContainer"]}>
                        <div class="row">
                            <div class="col-sm">
                                <div className={styles["BoxLeft"]}>
                                    <div className={styles["BoxLeftcontent"]}>
                                        <div className={styles["DatabaseBox"]}>
                                            <div className={styles["Iconblue"]}><DatabasePicture/></div>
                                        </div>
                                        <p className={styles["P"]}>1. Access to planogram data / database</p>
                                    </div> 
                                </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["BoxMiddle"]}>
                                    <div className={styles["BoxLeftcontent"]}>
                                        <div className={styles["IconLoacation"]}><LocationPicture/></div>
                                        <p className={styles["Pm"]}>2. Map of the store</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["BoxRight"]}>
                                    <div className={styles["BoxLeftcontent"]}>
                                        <div className={styles["Iconblue"]}><MapPicture/></div>
                                        <p className={styles["P"]} >3. We work our magic and you get a visual map of the store</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={styles["Arrow"]}>
                            <Arrow/>
                        </div> */}

                        <div className={styles["BottomContainer"]}>
                            <div class="row">
                                <div class="col-sm">
                                        <div className={styles["BoxLeft"]}>
                                            <div className={styles["BoxLeftcontent"]}>
                                                <div className={styles["DatabaseBox"]}>
                                                   <div className={styles["Iconblue"]}><SearchPicture/></div>
                                                </div>
                                                <p className={styles["P"]}>4. Search tool for shoppers</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div className={styles["BoxLeft"]}>
                                            <div className={styles["BoxLeftcontent"]}>
                                                <div className={styles["Iconblue"]}><RoadMapPicture/></div>
                                                <p className={styles["P"]}>5. Roadmap to a specific product</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* About us section */}
                 <section className={styles["AboutUS"]}>
                    <div className={styles["HowTextContainer"]}>
                        <h1 className={styles["HowText"]}>About Us</h1>
                    </div>
                    <div className={styles["AboutUSContainer"]}>
                            <div class="row">
                                <div class="col-sm">
                                    <div className={styles["AboutUsLeftContent"]}>
                                            <div className={styles["ImgContLaura"]}>
                                                <Laura/>
                                            </div>
                                            <div className={styles["Cont"]}>
                                                <h3 className={styles["Name"]}>Laura Tillo</h3>
                                                <p>Co-Founder &#38; CEO</p>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className={styles["AboutUsCenterContent"]}>
                                        <div className={styles["ImgAleksandrs"]}>
                                            <Aleksandrs/>
                                        </div>
                                        <div className={styles["AleksandrsText"]}>
                                            <h3 className={styles["Name"]}>Aleksandrs Rebriks</h3>
                                            <p>Co-Founder &#38; CTF</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div className={styles["AboutUsRightContent"]}>
                                        <div className={styles["ShahabBox"]}>
                                            <Shahab/>
                                        </div>
                                        <div className={styles["ShahabText"]}>
                                            <h3 className={styles["Name"]}>Shahab Anbarjafari</h3>
                                            <p>Co-Founder (Angel Investor)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className={styles["ContentAboutUS"]}>
                        <div className={styles["HowTextContainer"]}>
                            <h2 className={styles["HowTextNavi"]}>How NAVITeeL came to life?</h2>
                        </div>
                        <div className={styles["ButtonAboutus"]}>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-text"
                                aria-expanded={open}
                            >+
                            </Button>
                        </div>
                        
                        <Collapse in={open}>
                            <div id="collapse-text">
                                <div className={styles["ContText"]}>
                                    <div className={styles["ParaText"]}>
                                        <p className={styles["ParaImage"]}><b>During the spring lock-down in Estonia I found</b> myself in a construction store looking for roof nails and to my surprise (or not actually) I asked from 3 different hall workers where the product should be but still ended up searching for 30 min. And the best part was that the nails were on the back of the shelf of the cashier who also <b>was the first person I asked. I believe everyone</b> has had this happen to them whether in a grocery or a construction store - so why not make a tool to help out?</p>
                                    </div> 
                                </div>
                            </div>
                        </Collapse>
                    </div>    
                </section>
                
                {/* Section testimonials */}
                <section className={styles["Testimonials"]}>
                    <div className={styles["HowTextContainer"]}>
                        <h1 className={styles["HowText"]}>Testimonials</h1>
                    </div>
                    <div className={styles["TestimonialContent"]}>
                        <div class="row">
                            <div class="col-sm">
                                <div className={styles["BlockquoteContainer"]}>
                                    <figure className={styles["Snippet"]}>
                                        <blockquote className={styles["BlockNoteText"]}>Every store has it's product placement so when you think logically that a specific product should be 'there' you <b>still end up circling around the store</b> and asking help from the hall workers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</blockquote>
                                        <div className={styles["Author"]}>
                                            <LadyAvatar/>
                                            <h5 className={styles["H5BlockNote"]}>Interviewee 1, female, 25</h5>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["BlockquoteContainer"]}>
                                        <figure className={styles["Snippet"]}>
                                            <blockquote className={styles["BlockNoteText"]}>I navigate in the store by logic or by looking at the signs that are hanging from the ceiling. <b>Sometimes I give up and won't buy the item</b>. But if my head doesn't find it, my legs will. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</blockquote>
                                            <div className={styles["Author"]}>
                                                <LadyAvatar/>
                                                <h5 className={styles["H5BlockNote"]}>Interviewee 2, female, 44</h5>
                                            </div>
                                        </figure>
                                    </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["BlockquoteContainer"]}>
                                        <figure className={styles["Snippet"]}>
                                            <blockquote className={styles["BlockNoteText"]}><b>If I can't find the product I ask the hall worker if I even see them</b>. 50/50 chance they know. Or they direct me to someone else. Sometimes I give up and won't buy the item at all &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</blockquote>
                                            <div className={styles["Author"]}>
                                                <LadyAvatar/>
                                                <h5 className={styles["H5BlockNote"]}>Interviewee 3, female, 24</h5>
                                            </div>
                                        </figure>
                                    </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["BlockquoteContainer"]}>
                                        <figure className={styles["Snippet"]}>
                                            <blockquote className={styles["BlockNoteText"]}>When I can't find the item I search for it about 1-2 min and then ask for help. In general hall workers know where the product is, but <b>in the construction store they don't know a thing</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</blockquote>
                                            <div className={styles["Author"]}>
                                                <MenAvatar/>
                                                <h5 className={styles["H5BlockNote"]}>Interviewee 4, male, 33</h5>
                                            </div>
                                        </figure>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How we work */}
                <section className={styles["HowWeWork"]}>
                    <div className={styles["HwwContainer"]}>
                        <h1 className={styles["HowText"]}>How we work?</h1>
                    </div>
                    <div className={styles["BoxContainerWork"]}>
                        <div class="row">
                            <div class="col-sm">
                                <div className={styles["WorkPicture"]} data-aos="fade-right">
                                    <WorkPicture/>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["RightContentHowWeWork"]}>
                                    <div className={styles["Why"]} data-aos="fade-left">
                                        <div className={styles["IconContainer"]}><LightBulb/></div>
                                        <div className={styles["WhyText"]}>
                                            <h3 className={styles["H3"]}>Why?</h3>
                                            <p className={styles["P1"]}>We believe in saving time on everyday tasks</p>
                                        </div>
                                    </div>

                                    <div className={styles["How"]} data-aos="fade-left">
                                        <div className={styles["IconContainerRed"]}><LightBulb/></div>
                                        <div className={styles["HowWorkText"]}>
                                            <h3 className={styles["H3red"]}>How?</h3>
                                            <p className={styles["P1"]}>Merging tasks together</p>
                                            <p className={styles["P1"]}>User-friendly experience</p>
                                            <p className={styles["P1"]}>Integrating with health apps</p>
                                        </div>
                                    </div>

                                    <div className={styles["What"]} data-aos="fade-left">
                                        <div className={styles["IconContainer"]}><LightBulb/></div>
                                        <div className={styles["WhatText"]}>
                                            <h3 className={styles["H3"]}>What?</h3>
                                            <p className={styles["P1"]}>NAVITeeL - an in-door navigation</p>
                                            <p className={styles["P1"]}>shopping application that helps to save time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact section */}
                <section className={styles["Contact"]}>
                    <div className={styles["ContactContainer"]}>
                        <div class="row">
                            <div class="col-sm">
                                <div className={styles["ContactLeftContent"]}>
                                    <h2 className={styles["ContactText"]}>Contact</h2>
                                    <p className={styles["ContactPara"]}>Out of the box ideas, constructive feedback and good wishes are always welcomed!</p>
                                    <p className={styles["ContactPara"]}>Also if our way of working fits with yours, let's talk!</p>
                                    <div className={styles["Info"]}><a className={styles["InfoText"]} href="mailto:info@naviteel.com">info@naviteel.com</a></div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div className={styles["ContactRightContent"]}>
                                    <div className={styles["Form"]}>
                                        <form className={styles["Formm"]}>
                                            <p className={styles["FullName"]}>
                                                <input className={styles["NameInput"]} name="name" type="text" placeholder="Full name" required/>
                                            </p>
                                            <p className={styles["Email"]}>
                                                <input className={styles["EmailUnput"]} name="email" type="text" placeholder="Email" required/>
                                            </p>

                                            <p className={styles["TextArea"]}>
                                                <textarea className={styles["TextAreaInput"]} name="text" placeholder="Message"></textarea>
                                            </p>

                                            <button className={styles["Submit"]}>submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <footer className={styles["Footer"]}>
                    <p className={styles["Copyright"]}>&#169; 2021 Naviteel, All rights reserved</p>
                </footer>
            </div>
        )
    }
