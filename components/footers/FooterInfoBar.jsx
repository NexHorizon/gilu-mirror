import React from "react";

const items = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 6l3.09 6.26L26 13.27l-5 4.87L22.18 26 16 21.77 9.82 26 11 18.14l-5-4.87 6.91-1.01L16 6z" stroke="#222" strokeWidth="1.5" fill="none"/></svg>
    ),
    title: "Vybíráme jen to nejlepší",
    desc: "Precizně zpracované, z kvalitních materiálů, s neobvyklým designem."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z" stroke="#222" strokeWidth="1.5"/><path d="M16 10v6l4 2" stroke="#222" strokeWidth="1.5"/></svg>
    ),
    title: "Vracíme peníze",
    desc: "Garance vrácení peněz do 14 dnů za nepoužité zboží. Nevztahuje se na zakázkovou výrobu."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 29s-9-6.5-9-13.5A6.5 6.5 0 0116 9a6.5 6.5 0 019 6.5C25 22.5 16 29 16 29z" stroke="#222" strokeWidth="1.5" fill="none"/></svg>
    ),
    title: "Jen originály a ruční práce",
    desc: "Každý kus je originál který si hned zamilujete. Veškerý nábytek je výsledkem precizní ruční práce. A za to vám ručíme."
  }
];

export default function FooterInfoBar() {
  return (
    <div className="footer-info-bar" style={{background:'#faf9f7', borderTop:'1px solid #eee', borderBottom:'1px solid #eee', padding:'32px 0'}}>
      <div className="container">
        <div className="footer-info-row" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',gap:'24px 0'}}>
          {items.map((item, i) => (
            <div key={i} className="footer-info-item" style={{flex:'1 1 22%', minWidth:220, textAlign:'center', padding:'0 12px'}}>
              <div style={{marginBottom:12}}>{item.icon}</div>
              <div style={{fontWeight:600, fontSize:18, marginBottom:6}}>{item.title}</div>
              <div style={{color:'#666', fontSize:15, lineHeight:1.5}}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 