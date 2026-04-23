import { useHeadingFonts } from '../context/HeadingFontContext';

export default function HeadingFontPanel({ isLight }) {
  const fonts = useHeadingFonts();
  if (!fonts) return null;

  const selectCls = isLight
    ? 'mt-0.5 w-full px-2 py-1.5 text-xs border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30'
    : 'mt-0.5 w-full px-2 py-1.5 text-xs border border-white/10 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent/30';
  const labelCls = isLight
    ? 'text-[10px] font-semibold text-gray-500 uppercase tracking-wider'
    : 'text-[10px] font-semibold text-zinc-500 uppercase tracking-wider';
  const colTitleCls = isLight
    ? 'text-[11px] font-bold uppercase tracking-wider text-gray-400 pb-1.5 border-b border-gray-200 mb-3'
    : 'text-[11px] font-bold uppercase tracking-wider text-zinc-500 pb-1.5 border-b border-white/10 mb-3';
  const dividerCls = isLight ? 'border-t border-gray-200 pt-3 mt-3' : 'border-t border-white/10 pt-3 mt-3';

  const Field = ({ label, valueKey, setKey }) => (
    <label className="block min-w-0">
      <span className={labelCls}>{label}</span>
      <select
        className={selectCls}
        value={fonts[valueKey]}
        onChange={(e) => fonts[setKey](e.target.value)}
      >
        {fonts.choices.map((c) => (
          <option key={c.id} value={c.id}>{c.label}</option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="grid grid-cols-3 gap-x-5">

      {/* Column 1 — Hero */}
      <div>
        <p className={colTitleCls}>Hero</p>
        <div className="space-y-2.5">
          <Field label="Title"    valueKey="heroTitle"    setKey="setHeroTitle" />
          <Field label="Subtitle" valueKey="heroSubtitle" setKey="setHeroSubtitle" />
        </div>
      </div>

      {/* Column 2 — Global (Nav, Footer, CTA) */}
      <div>
        <p className={colTitleCls}>Global</p>
        <div className="space-y-2.5">
          <Field label="Nav"            valueKey="nav"    setKey="setNav" />
          <Field label="Footer"         valueKey="footer" setKey="setFooter" />
          <div className={dividerCls}>
            <Field label="CTA Buttons" valueKey="cta" setKey="setCta" />
          </div>
        </div>
      </div>

      {/* Column 3 — Body */}
      <div>
        <p className={colTitleCls}>Body</p>
        <div className="space-y-2.5">
          <Field label="Body Text"     valueKey="body" setKey="setBody" />
          <Field label="Section Title" valueKey="h1"   setKey="setH1" />
          <Field label="Sub-heading"   valueKey="h2"   setKey="setH2" />
          <Field label="Card Title"    valueKey="h3"   setKey="setH3" />
        </div>
      </div>

    </div>
  );
}
