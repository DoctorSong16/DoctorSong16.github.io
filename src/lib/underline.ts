// The site's underline motif: a thin sage line that grows out from the centre of a word.
// Hover draws it at half strength; the "selected" state (current page, active filter)
// draws it in full. Respects reduced motion. Used by the navbar and the blog's tag filter.
const growUnderline =
  'relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-accent/60 after:transition-[scale,background-color] after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 motion-reduce:after:transition-none';

/** For links: underlined in full when aria-current="page". */
export const currentUnderline = `${growUnderline} aria-[current=page]:after:scale-x-100 aria-[current=page]:after:bg-accent`;

/** For toggle buttons: underlined in full when aria-pressed="true". */
export const pressedUnderline = `${growUnderline} aria-pressed:after:scale-x-100 aria-pressed:after:bg-accent`;
