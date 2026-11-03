"use client";

import { useState } from "react";

const sounds = [
  { id: "u2", label: "U2", title: "U2", kicker: "One of the constants.", description: "U2 is a favourite I keep coming back to. They have their own place in my music collection and in my stream playlists.", note: "Rock / U2", mark: "U2" },
  { id: "blues", label: "Live blues", title: "Bonamassa.", kicker: "Preferably live.", description: "Joe Bonamassa, especially live. His collaborations with Beth Hart belong here too. If there's a live version, that's usually the one I pick.", note: "Blues / Joe Bonamassa / Beth Hart", mark: "LIVE" },
  { id: "uptempo", label: "Hardcore & uptempo", title: "Turn it up.", kicker: "The other end of the collection.", description: "Hardcore, frenchcore and uptempo. Krowdexx, GPF, Yoshiko and Deadly Guns. Quite a jump from U2, but all of it feels like me.", note: "Hardcore / frenchcore / uptempo", mark: "BPM+" },
] as const;

export function Soundtrack() {
  const [selected, setSelected] = useState(0);
  const sound = sounds[selected];
  return <div className="soundtrack-layout" data-sound={sound.id}>
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
    <div className="sound-art" key={sound.id} aria-hidden="true">
      <div className="record-grooves" />
      <div className="sound-poster"><span>VOXXAI / THE ROTATION</span><strong>{sound.mark}</strong><div className="sound-bars">{Array.from({length: 18}, (_,i)=><i key={i} style={{"--bar": `${20 + (i * 37 % 75)}%`, "--delay": `${i * 18}ms`} as React.CSSProperties} />)}</div><span>ROCK. BLUES. MUCH LOUDER.</span></div>
    </div>
  </div>;
}
