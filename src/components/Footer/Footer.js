import React, { useState } from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsDiscord } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

import { footerLogo, category } from "../../images/images";
import styles from "./styles.module.css";

const Footer = () => {
  const socialMedias = [
    { icon: <BsInstagram className={styles.socialIcon} />, to: "#" },
    { icon: <BsFacebook className={styles.socialIcon} />, to: "#" },
    { icon: <BsTwitter className={styles.socialIcon} />, to: "#" },
    { icon: <GrLinkedinOption className={styles.socialIcon} />, to: "#" },
    { icon: <BsDiscord className={styles.socialIcon} />, to: "#" },
  ];
  const footerItems = [
    {
      heading: "Company",
      items: [
        { name: "About", to: "#" },
        { name: "Careers", to: "#" },
        { name: "Affiliates", to: "#" },
        { name: "Press", to: "#" },
        { name: "Investors", to: "#" },
        { name: "Legal & Privacy", to: "#" },
      ],
    },
    {
      heading: "Features",
      items: [
        { name: "Buy & Sell Crypto", to: "#" },
        { name: "Wallet", to: "#" },
        { name: "Card", to: "#" },
        { name: "Dashboard", to: "#" },
        { name: "Trading", to: "#" },
        { name: "Portfolio", to: "#" },
      ],
    },
    {
      heading: "Developers",
      items: [
        { name: "Cloud", to: "#" },
        { name: "Wallet SDK", to: "#" },
        { name: "Query & Transact", to: "#" },
        { name: "Commerce", to: "#" },
        { name: "Exchange & Pro", to: "#" },
        { name: "API Access", to: "#" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { name: "Blog", to: "#" },
        { name: "Help & Support", to: "#" },
        { name: "Customer Stories", to: "#" },
        { name: "FAQ", to: "#" },
      ],
    },
  ];

  return (
    <>
      <section className={styles.footerContainer}>
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.logoAndSocials}>
              <div className={styles.logoContainer}>
                <img src={footerLogo} alt="#" className={styles.logo} />
                <p className={styles.logoText}>ArtPanda</p>
              </div>
              <div className={styles.languageContainer}>
                <span className={styles.language}>English</span>
                <img src={category} alt="#" className={styles.icon} />
              </div>
              <div className={styles.socialContainer}>
                <div className={styles.socials}>
                  {socialMedias.map((el, i) => (
                    <a
                      href={el.to}
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.social}
                    >
                      {el.icon}
                    </a>
                  ))}
                </div>
              </div>
              <p className={styles.copyRight}>Copyright 2023 © ArtPanda</p>
            </div>
            <div className={styles.footerItems}>
              {footerItems.map((el, i) => (
                <div className={styles.footerItem} key={i}>
                  <h5 className={styles.heading}>{el.heading}</h5>
                  {el.items.map((el, i) => (
                    <a
                      href={el.to}
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.text}
                    >
                      {el.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
