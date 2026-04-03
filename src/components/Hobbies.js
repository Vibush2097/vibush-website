import React from "react";
import "./layout.css";
import cricketTrophy from "../assets/images/cricket_trophy.jpeg";

function IconGaming() {
  return (
    <svg
      className="hobby-icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 15c-1.657 0-3-1.343-3-3 0-1.657 1.343-3 3-3h10c1.657 0 3 1.343 3 3 0 1.657-1.343 3-3 3H7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 12h.01M9.7 12h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 10.4l-2 2 1.6.6 1.2 1.2.7 1.6 2.1-2.1c.6-.6.6-1.6 0-2.2l-1-1c-.6-.6-1.6-.6-2.2 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconReading() {
  return (
    <svg
      className="hobby-icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4.5 19.5c0-1.2 1-2.2 2.2-2.2H20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.7 17.3V6.2c0-1 .8-1.8 1.8-1.8H20v13.1H6.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.3h7M9 11h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMusic() {
  return (
    <svg
      className="hobby-icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 15V6.6c0-.6.4-1.1 1-1.2l7.5-1.4c.7-.1 1.5.4 1.5 1.2V14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M20.3 14.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconSports() {
  return (
    <svg
      className="hobby-icon"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8.5 18.5c2.8-2.8 6.2-6.2 9-9 1-.9 2.4-.9 3.3 0 .9.9.9 2.4 0 3.3-2.8 2.8-6.2 6.2-9 9-2.2 2.2-5.8 1.7-7.4-.9 1.3-1.3 2.5-2.5 3.1-2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3.3 9.2c1.2-1.2 2.6-1.8 4-1.8 2.1 0 3.9 1 5 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.2 20.2c.7-1.8 1.6-3.2 2.9-4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hobbies() {
  const hobbies = [
    {
      title: "Gaming",
      Icon: IconGaming,
      images: [
        {
          src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1783560/d789fb34321e003b6dc064ae7f3a525e70458e0d/header.jpg?t=1773930950",
          alt: "The Last Caretaker Game Cover"
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEIOKO0F-fVxGw1aZJMr-gr1vnCXdvrFewu-qw2SJNw_bL68jzIYYDCdnoYQDX3C99ZeNOA&s=10",
          alt: "Red Dead Redemption 2 Game Cover"
        }
      ]
    },
    {
      title: "Reading",
      Icon: IconReading,
      images: [
        {
          src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTf-oh0oF0xzXXq17SoeIOhQ86yh0dYfx4PljBmDXyt0k2-sInA",
          alt: "Piranesi Book Cover"
        },
        {
          src: "https://images.penguinrandomhouse.com/cover/9780593135228",
          alt: "Project Hail Mary Book Cover"
        }
      ]
    },
    {
      title: "Listening to Music",
      Icon: IconMusic,
      images: [
        {
          src: "https://band-logos.com/wp-content/uploads/2024/09/linkin-park-band-logo-symbol.png",
          alt: "Linkin Park Logo"
        },
        {
          src: "https://www.ajournalofmusicalthings.com/wp-content/uploads/2023/05/Coldplay-Logo.png",
          alt: "Coldplay Logo"
        }
      ]
    },
    {
      title: "Playing cricket & pickleball",
      Icon: IconSports,
      images: [
        {
          src: "https://cdn.shopify.com/s/files/1/0152/5763/2822/files/ProS1Ball-1005.jpg?v=1703189354",
          alt: "Pickleball Ball"
        },
        {
          src: cricketTrophy,
          alt: "Cricket trophy thumbnail"
        }
      ]
    }
  ];

  return (
    <section id="hobbies" className="section section-hobbies" data-animate="section">
      <div className="container">
        <h2>Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map(({ title, Icon, images }, idx) => (
            <div key={title} className="hobby-card" data-animate="card">
              <Icon />
              <h3 className="hobby-title">
                {idx === 3 ? (
                  <>
                    Playing <span className="hobby-strong">cricket</span> &{" "}
                    <span className="hobby-strong">pickleball</span>
                  </>
                ) : (
                  title
                )}
              </h3>
              {images?.length ? (
                <div className="hobby-images">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      className="hobby-thumb"
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

