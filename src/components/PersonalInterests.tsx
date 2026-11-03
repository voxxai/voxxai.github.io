"use client";

import { useState } from "react";

const interests = [
  {
    id: "music", label: "Music", aside: "Quite a range.",
    heading: "U2, live blues, then uptempo.",
    paragraphs: [
      "U2 is a favourite. So is Joe Bonamassa, especially live. His collaborations with Beth Hart belong in that list too.",
      "Then there's hardcore, frenchcore and uptempo. Krowdexx, GPF, Yoshiko and Deadly Guns. It depends on the day, and I don't really try to make those tastes match.",
    ],
    tags: ["U2", "Joe Bonamassa", "Krowdexx", "Hardcore / uptempo"],
    note: "The live version usually wins.",
  },
  {
    id: "games", label: "Games", aside: "Usually another grind.",
    heading: "Warframe, CoD, Minecraft.",
    paragraphs: [
      "I play across PC and consoles. Warframe is one of my regular games; Uriel is my go-to. Call of Duty and Minecraft get plenty of time too.",
      "I also stream on Twitch as Voxxai. Gaming and building things overlap a bit: the bots running on my Pi are part of my own stream setup.",
    ],
    tags: ["Warframe", "Call of Duty", "Minecraft", "Twitch"],
    note: "Uriel main.",
  },
  {
    id: "anime", label: "Anime & the OC", aside: "About that portrait.",
    heading: "Jinx is the favourite.",
    paragraphs: [
      "Jinx from League of Legends is my favourite character. Anime is also a big part of what I watch.",
      "The blond character on this site is Vox, my own OC. He's the face I use for Voxxai, across my portfolio and stream branding.",
    ],
    tags: ["Jinx", "Vox / original character"],
    note: "Same person behind the code and the stream.",
  },
  {
    id: "pi", label: "The Raspberry Pi", aside: "Small box, actual jobs.",
    heading: "My bots live here.",
    paragraphs: [
      "There's a Raspberry Pi 5 at home running my Discord and Twitch bots. I use Docker and Linux to keep those projects running outside my main PC.",
      "I like projects I can actually use. LifeQuest, my bots and this site all give me something of my own to build, change and maintain.",
    ],
    tags: ["Raspberry Pi 5", "Docker", "Linux", "Discord / Twitch"],
    note: "The home setup gets its own projects.",
  },
] as const;

export function PersonalInterests() {
  const [selected, setSelected] = useState(0);
  const interest = interests[selected];
  return (
    <section className="personal-section section-frame" aria-labelledby="personal-title">
      <div className="personal-heading">
        <div><p className="eyebrow">Outside work</p><h2 id="personal-title">Away from work.</h2></div>
        <p>A few things I can keep talking about.</p>
      </div>
      <div className="personal-layout">
        <div className="interest-picker" role="group" aria-label="Choose an interest">
          {interests.map((item, index) => (
            <button key={item.id} type="button" aria-pressed={selected === index}
              aria-controls="personal-story" onClick={() => setSelected(index)}>
              <span className="interest-number" aria-hidden="true">0{index + 1}</span>
              <span><strong>{item.label}</strong><small>{item.aside}</small></span>
              <span className="interest-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="personal-story" id="personal-story" aria-live="polite" aria-atomic="true">
          <div key={interest.id} className="interest-content">
            <span className="interest-label">{interest.label}</span>
            <h3>{interest.heading}</h3>
            {interest.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul className="interest-tags" aria-label={`${interest.label} favourites and details`}>
              {interest.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <p className="interest-footnote">{interest.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
