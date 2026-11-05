import { useState } from 'react';
import { origin } from '../data/content.js';

// Hover (or tap / keyboard-focus) the school ID and a disguise gets doodled on:
// sunglasses, a handlebar moustache and a scribbled beard.
// Coordinates match the 584×379 image in /public/about/.
export default function IdCard() {
  const [on, setOn] = useState(false);

  return (
    <button
      type="button"
      className={on ? 'id-card is-on' : 'id-card'}
      onClick={() => setOn(!on)}
      aria-pressed={on}
      aria-label={on ? 'Remove the doodled disguise' : 'Doodle a disguise on the photo'}
    >
      <picture>
        <source srcSet={origin.webp} type="image/webp" />
        <img src={origin.png} alt={origin.alt} width="584" height="379" />
      </picture>

      <svg className="doodle" viewBox="0 0 584 379" aria-hidden="true">
        {/* beard */}
        <path
          className="d d-beard"
          pathLength="1"
          d="M206.6 171.9 L194.4 172.6 L205.3 180.5 L191.0 180.7 L200.5 190.6 L190.6 186.5 L197.4 199.9 L185.4 191.8 L190.9 208.7 L180.1 198.8 L184.2 212.6 L175.2 202.6 L175.6 217.4 L169.5 205.4 L168.8 223.2 L162.7 208.6 L159.4 224.7 L155.3 209.3 L152.4 222.6 L147.9 206.5 L144.3 221.9 L143.0 204.9 L134.9 218.4 L136.1 202.6 L127.6 215.1 L131.5 199.4 L121.6 209.1 L126.6 191.8 L115.7 201.4 L123.1 186.8 L110.4 190.5 L119.6 180.0 L105.4 180.5 L117.3 173.7 L102.4 172.6"
        />
        {/* soul patch */}
        <path className="d d-patch" pathLength="1" d="M151 193 L156 203 L160 193 L155 200" />

        {/* moustache: handlebar with curled tips */}
        <path
          className="d d-stache"
          pathLength="1"
          d="M155 174 C 146 170, 136 176, 130 181 C 124 185, 117 181, 120 173 C 122 168, 127 169, 127 173
             M155 174 C 164 170, 174 177, 180 182 C 186 186, 193 182, 190 174 C 188 169, 183 170, 183 174"
        />

        {/* sunglasses */}
        <path
          className="lens"
          d="M105 118 C 118 115, 140 115, 151 119 C 152 132, 146 147, 128 147 C 111 147, 104 134, 105 118 Z
             M160 120 C 172 116, 195 117, 206 122 C 206 136, 199 150, 182 149 C 166 148, 159 136, 160 120 Z"
        />
        <path
          className="d d-frame"
          pathLength="1"
          d="M105 118 C 118 115, 140 115, 151 119 C 152 132, 146 147, 128 147 C 111 147, 104 134, 105 118
             M151 121 C 154 117, 158 117, 160 121
             M160 120 C 172 116, 195 117, 206 122 C 206 136, 199 150, 182 149 C 166 148, 159 136, 160 120
             M105 120 L 92 117 M206 123 L 221 121"
        />
        <path className="glint" d="M113 124 L 122 122 M168 126 L 176 124" />
      </svg>

      <span className="id-hint" aria-hidden="true">{on ? 'Tap to undo' : 'Hover or tap me'}</span>
    </button>
  );
}
