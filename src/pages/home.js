import React, { useState, useEffect } from "react";
// import Spinner from "react-bootstrap/Spinner";
import Header from "../component/header";
import Accordion from "react-bootstrap/Accordion";
import Banner from "../component/bannerCarousel";
import cargoImg from "../assets/images/box/cargo.webp";
import truckImg from "../assets/images/box/truck.webp";
import gifImg from "../assets/images/box/gif.webp";
import fxfGif from "../assets/images/box/f3.webp";
import gifImg3 from "../assets/images/box/de.webp";
import gif90 from "../assets/images/box/90.webp";
import palletGif from "../assets/images/box/f9.webp";
import rollWorker from "../assets/images/box/work.webp";
import rollWorker2 from "../assets/images/box/work2.webp";
import spect from "../assets/images/box/spect.webp";
import load from "../assets/images/box/load.webp";
import move from "../assets/images/box/move.webp";
import sent from "../assets/images/box/sent.webp";
import roll29 from "../assets/images/box/roll (29).webp";
import roll16 from "../assets/images/box/roll (16).webp";
import roll3 from "../assets/images/box/roll (3).webp";
import buyGif from "../assets/images/box/out.webp";
import primeGif from "../assets/images/box/prime.webp";
import Navbar from "../component/navBar";
import logo1 from "../assets/images/logo/logo48.png";
import BannerTimer from "../component/bannerTimer";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "../config/axios";

function OffCanvasExample({ show, setShow }) {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={true}
        scroll={false}
        className="addtohome-popup"
        placement="bottom"
        style={{
          height: "150px",
        }}
      >
        <Offcanvas.Header closeButton>
          <div className="app-info">
            <img src={logo1} className="img-fluid" alt="" />
            <div className="content">
              <h3>Multikart App</h3>
              <div>www.multikart-app.com</div>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="">
            <button className="btn btn-solid install-app" onClick={handleClose}>
              Add to home screen
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const resData = await axios.get("/get_products");
      const res = resData.data;
      setData(res);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />
      <OffCanvasExample show={show} setShow={setShow} />

      <div className="divider"></div>
      <Banner />
      <BannerTimer />
      {/* <div className="divider"></div> */}
      <div className="container">
        <img src={cargoImg} className="img-fluid w-100 h-auto mb-3" />
        <p className="p-text-bold my-2">
          Heavyweight: Overexpansion! Amazon's warehouse is severely
          overcrowded, and to cancel multiple warehouse rentals, Amazon needs to
          sell a large number of warehouse pallets
        </p>
        <img src={truckImg} className="img-fluid my-3" />
        <p className="">
          2023 recent hot sellers bursting at the seams! From Amazon Prime
          warehouse box
        </p>
        <p className="p-text-bold  my-2 ">
          All the products in our box are randomly selected, which is the charm
          of surprise. If you like surprise, our box is your best choice, you
          may have the chance to get a big surprise. But if you are risk averse
          and have too much expectation, this game may not suitable for you. We
          create surprises, but we are not a messenger of dreams.
        </p>
        <img src={gifImg} alt="" className="w-100 h-auto" />
        <p className="p-text">
          <br />
          📦 Amazon offers fun and challenging mystery box games in various
          formats
          <br />
          📦Try out our lucky mystery box picks and you'll receive more than
          10-80+ random styles of items you might get your wish, and you might
          win a rare hidden one.&nbsp;
          <br />
          📦Every mystery box is different. Each load contains a range of online
          and in-store returns/clearance items (large and small). You only pay a
          percentage of the original cost of each item.
          <br />
          📦Test your luck with our large electronics packages mystery
          boxes.&nbsp;
        </p>

        <img src={palletGif} alt="" className="w-100 h-auto" />
        <h2 className="my-3">What is Amazon customer return?</h2>
        <p>
          People across the U.S. are now buying more products online than in
          physical stores.Online commerce has grown year by year-it is estimated
          that it has grown from 396.7 billion U.S. dollars in 2016 to an
          astonishing U.S. $884 billion by the end of 2022. This shift to online
          purchases has greatly benefited companies such as Amz, but there is
          also a downside to retailers: the number of customer returns continues
          to increase
        </p>
        <img src={fxfGif} alt="" className="w-100 h-auto" />
        <i className="text-bold">
          Amazon solves the problem of returns through bulk wholesale sales,
          usually to top clearing companies such as economic-luck. Because they
          pay low prices for wholesale returns purchased in bulk from Amz. This
          is why when buying Amazon return trays, the best place to purchase
          them is a top clearing agency.
        </i>
        <img src={gifImg3} alt="" className="w-100 h-auto mt-3" />
        <h3 className="my-3">What's in these pallets?</h3>
        <p>
          About the item (palette) size: The item (palette) size is optional. In
          general, a full pallet is more likely to win better things. There can
          be high value items such as electronics, toys, household items,
          appliances, cleaning products, sporting goods, tools, gardening
          accessories, fitness equipment and anything else you need... Even the
          price of a single item is over $1990.
        </p>
        <img src={gif90} alt="" className="w-100 h-auto mb-3 " />
        <img src={roll29} alt="" className="w-100 h-auto mb-3" />
        <img src={roll3} alt="" className="w-100 h-auto mb-3" />
        <h3 className="my-3">Are Amazon Pallet Available Anytime ?</h3>
        <p>
          We only spend half a month every year to clean these pallets at a very
          low price. This is also the cheapest time for Amazon pallets in the
          year. After this period of time, the price will increase.
          <br />
          Just like Black Friday, only this time of the year is the lowest price
          of the year. Because our pallets are not only cost-effective and have
          investment value, they are also very popular with customers.
          <br />
          <br />
          If you miss it, you will have to wait another year.
          <br />
          <br />
          If you need them, please place an order for purchase.
        </p>
        <img src={buyGif} alt="" className="h-auto w-100 mb-3" />
        <strong className="my-3">
          Due to the uncertain nature of the mystery box (which makes it a lot
          of fun), we can't say exactly what's in it, but we can give you some
          indication:at least one mystery box containing at least 2 or 30+
          products. You will receive at least 2 of the items below.
        </strong>
        <p className="my-3">
          🎁iPhone 14 or 14 Promax 1pcs
          <br />
          🎁Oculus Rift S Pc-powered Vr Gaming Headset 1pcs
          <br />
          🎁Nitro 5 Gaming Laptop 1pcs
          <br />
          🎁New Horizons Edition – Switch 1pcs
          <br />
          🎁Apple Bluetooth Headset 1pcs
          <br />
          🎁Mini Hd Video Recorder
          <br />
          🎁4 in 1 Wireless Bluetooth Selfie Stick
          <br />
          🎁Console with Wireless Controller and 4k Ultra Hd Blu-ray 1pcs
          <br />
          🎁Apple Watch Series 6<br />
          🎁Playstation Portable 3000 Core Pack System&nbsp;1pcs
          <br />
          🎁Vh240a 23.8-inch Full Hd 1080p Ips Led Monitor&nbsp;1pcs
          <br />
          🎁Beats Solo3 Wireless On-ear Headphones
          <br />
          🎁Portable 16 Bit Retro Pxp3 Slim Station Video Games Player
          <br />
          🎁Advanced All-in-one Virtual Reality Headset 1pcs
          <br />
          🎁Glowing Led Magnetic 3 in 1 USB Charging Cable
          <br />
          🎁400 in 1 Classic Gamer Device
          <br />
          🎁iPhone 12
          <br />
          🎁1080p Hd Microscope Camera for Android, Mac &amp; Pc
          <br />
          🎁Sony Cyber-shot Dsc-h300 20.1 Mp Digital Camera
          <br />
          🎁Aspire 5 Slim Laptop 1pcs
          <br />
          🎁Or All of the Above
          <br />
          🎁Canon EOS RP
          <br />
          🎁Sony ZV-1 Digital Camera
          <br />
          🎁Canon EOS M200
          <br />
          🎁Canon EOS Rebel T7 DSLR Camera
          <br />
          🎁Sony Alpha 7 IV
          <br />
          🎁Kodak AZ421 PIXPRO Astro 16MP
          <br />
          🎁Canon PowerShot G7X Mark III
          <br />
          🎁Nikon Coolpix B500 Digital Camera🎁L.R. Baggs Paradi Para Acoustic
          DI Box with 5 Band EQ (value $465)
          <br />
          🎁OTOTEC 17 keys Kalimba African Mahogany Acacia Thumb Finger Piano
          Solid Wood(value $89)
          <br />
          🎁Steel Tongue Drum 8 Notes 6 Inches Percussion Instrument (value
          $426)
          <br />
          🎁SA-76 Portable Keyboard (value $369)
          <br />
          🎁 Hurdy-Gurdy Model (value $173)
          <br />
          🎁Electric Guitar Beginner Starter Kit with Amplifier (value $499)
          <br />
          🎁Mouth organ(value $99.99)
          <br />
          🎁5-Piece Full Size Drum Set (value $539)
          <br />
          🎁Electronic Keyboard Piano Set (value $635)
          <br />
          🎁ABALONE Capos (value $69.99)
          <br />
          🎁Ukulele (value $69.99)
          <br />
          🎁MOREYES Guitar Tuner Clip-on Chromatic Digital Tuner for Acoustic
          Guitars, Bass, Ukulele C/D, Violin with LCD Screen(value $69.99)
          <br />
          🎁Xvive U2 Wireless System for Electric Guitars – Black(value $128)
          <br />
          🎁AKRacing Core Series EX Gaming Chair(value $379)
          <br />
          🎁RESPAWN 110 Racing Style Gaming Chair(value $246)
          <br />
          🎁Logitech MX Vertical Wireless Mouse – Advanced Ergonomic Design
          Reduces Muscle Strain (value $178)
          <br />
          🎁VERTAGEAR VG-SL5000_RD S-Line 5000 Gaming Chair(value $284)
          <br />
          🎁Razer Ornata Chroma Gaming Keyboard: Hybrid Mechanical Key Switches
          (value $168)
          <br />
          🎁Corsair K100 RGB Mechanical Gaming Keyboard – Cherry MX Speed RGB
          Silver Keyswitches (value $238)
          <br />
          🎁 HyperX Cloud Flight – Wireless Gaming Headset (value $169)
          <br />
          🎁Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming
          Headset(value $129)
          <br />
          🎁Razer Mamba Elite Wired Gaming Mouse(value $89)
        </p>
        <img src={primeGif} alt="" className="h-auto w-100 mb-3" />
        <h3 className="my-3">Amazon Prime How Does It works</h3>
        <p>
          1. We buy lost tech returns pallets in bulk (Unclaimed tech items).
          These pallets usually contain many high-value items: Apple products,
          Gaming products, Drones, etc.
        </p>
        <p>
          2. Next we sort these items and package them into individual boxes.
          Each box contains multiple secret items with high potential value.
        </p>
        <p>
          3. Lastly, we ship the boxes to our customers around the world! The
          higher value of the box, the greater potential for high-value items.
        </p>
        <img src={rollWorker} alt="" className="h-auto w-100 mb-3" />
        <strong className="mb-3">
          ▍Checking packages, and assigning orders
        </strong>
        <img src={rollWorker2} alt="" className="h-auto w-100 mb-3" />
        <strong className="mb-3">▍Liquidation Pallets</strong>
        <img src={spect} alt="" className="h-auto w-100 mb-3" />
        <strong className="mb-3">▍Product Shipped</strong>
        <img src={load} alt="" className="h-auto w-100 mb-3" />
        <strong className="mb-3">▍Sent to customer by transporter</strong>
        <img src={sent} alt="" className="h-auto w-100 mb-3" />
        <p>
          Please note that all orders are packed in ONE package to save on
          shipping costs. If you have ordered two or more Mystery Boxes and
          would like them to be packed separately, please indicate this in your
          message or contact our staff directly.
        </p>
        <p>
          ⏳Limited &nbsp;Time: only sell 2 weeks out of the year.
          <br />
          🎁Limited Edition: A great gift idea t for gifting or spoiling
          yourself!
          <br />
          🔥Limited Stock! 50,000+ have been sold this week!
        </p>
        <img src={roll16} alt="" className="w-100 h-auto mb-3" />

        <div className="faq-section">
          <h1>Frequently Asked Questions (FAQ)</h1>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Why are the mystery boxes different sizes?
              </Accordion.Header>
              <Accordion.Body>
                Mystery Boxes come in three different sizes - small, giant, and
                super giant. The larger the box, the greater the chance that you
                will receive the most valuable products. I wish everyone good
                luck :)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How long will shipping take?</Accordion.Header>
              <Accordion.Body>
                For USA customers delivery will take between 5 to 10 business
                days. For international customers, delivery will take about 7-15
                business days. As soon as your order ships we'll email you a
                tracking number.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>How long will shipping take?</Accordion.Header>
              <Accordion.Body>
                For USA customers delivery will take between 5 to 10 business
                days. For international customers, delivery will take about 7-15
                business days. As soon as your order ships we'll email you a
                tracking number.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What is your return policy?</Accordion.Header>
              <Accordion.Body>
                We offer a 30 day money back guarantee. You are free to try it
                and see if it helps you for 30 days. If it doesn't work you can
                send it back to us for a full refund!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How can I contact you?</Accordion.Header>
              <Accordion.Body>
                We offer a 30 day money back guarantee. You are free to try it
                and see if it helps you for 30 days. If it doesn't work you can
                send it back to us for a full refund!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <img src={move} alt="" className="w-100 h-auto my-3" />

        <map name="california"></map>
      </div>
      <div className="panel-space"></div>
      <Navbar />
    </>
  );
};

export default Home;
