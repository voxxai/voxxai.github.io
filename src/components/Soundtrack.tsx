"use client";

import { useState } from "react";
import Image from "next/image";

const sounds = [
  { id: "uptempo", label: "Hardcore & uptempo", title: "GPF.", kicker: "My first choice.", description: "Hardcore, frenchcore and uptempo are what I listen to most. GPF is my favourite. Krowdexx, Yoshiko and Deadly Guns are in the rotation too.", note: "Favourite artist / GPF", image: "/gpf-live.webp", alt: "GPF on stage in a pink outfit in front of a festival crowd", caption: "GPF / HARDCORE & UPTEMPO" },
  { id: "u2", label: "U2", title: "U2", kicker: "Next in the rotation.", description: "After hardcore and uptempo, it's U2. A favourite I keep coming back to, with their own place in my music collection and stream playlists.", note: "Rock / U2", image: "/u2-live.webp", alt: "U2 performing on stage under blue lights", caption: "U2 / NEXT IN THE ROTATION" },
] as const;

export function Soundtrack() {
  const [selected, setSelected] = useState(0);
  const sound = sounds[selected];
  return <div className="soundtrack-layout" data-sound={sound.id}>
    <div className="sound-photo" key={sound.id}>
      <Image src={sound.image} alt={sound.alt} fill sizes="100vw" />
    </div>
    <div className="soundtrack-copy">
      <p className="chapter-kicker">05 / The soundtrack</p>
      <div className="sound-picker" role="group" aria-label="Choose a music style">
        {sounds.map((item, index) => <button key={item.id} type="button" aria-pressed={index === selected}
          aria-controls="sound-story" onClick={() => setSelected(index)}>{item.label}</button>)}
      </div>
      <div id="sound-story" aria-live="polite" aria-atomic="true">
        <p className="sound-kicker">{sound.kicker}</p>
        <h2>{sound.title}</h2>
        <p className="chapter-description">{sound.description}</p>
        <p className="scene-note">{sound.note}</p>
      </div>
    </div>
    <div className="sound-photo-caption" aria-hidden="true">
      <span>{sound.caption}</span>
      <div className="sound-bars" key={sound.id}>{Array.from({length: 18}, (_,i)=><i key={i} style={{"--bar": `${20 + (i * 37 % 75)}%`, "--delay": `${i * 18}ms`} as React.CSSProperties} />)}</div>
    </div>
  </div>;
}
