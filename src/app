import { useState, useEffect, useRef } from "react";

// ── Unsplash image keywords per product ──────────────────────────────────────
const UNSPLASH_BASE = "https://source.unsplash.com/featured/600x750/?";

const PRODUCTS = [
  { id: 1,  title: "Vintage Leather Jacket",  price: 85,  seller: "@ahmed_fits",    sellerAvatar: "A", category: "jackets",    gender: "male",   size: "L",  condition: "Like New", imgQ: "leather+jacket+vintage+fashion",  brand: "Levi's",        likes: 24 },
  { id: 2,  title: "Y2K Cargo Pants",         price: 55,  seller: "@sara_vintage",  sellerAvatar: "S", category: "pants",      gender: "female", size: "M",  condition: "Good",     imgQ: "cargo+pants+y2k+fashion",         brand: "Dickies",       likes: 18 },
  { id: 3,  title: "Floral Midi Dress",        price: 45,  seller: "@noor_thrift",   sellerAvatar: "N", category: "dresses",    gender: "female", size: "S",  condition: "Like New", imgQ: "floral+midi+dress+vintage",       brand: "Free People",   likes: 56 },
  { id: 4,  title: "Oversized Hoodie",         price: 38,  seller: "@ahmed_fits",    sellerAvatar: "A", category: "hoodies",    gender: "male",   size: "XL", condition: "Good",     imgQ: "oversized+hoodie+streetwear",     brand: "Champion",      likes: 31 },
  { id: 5,  title: "Cowboy Boots",             price: 120, seller: "@retro_closet",  sellerAvatar: "R", category: "shoes",      gender: "female", size: "38", condition: "Like New", imgQ: "cowboy+boots+leather+brown",      brand: "Vintage",       likes: 67 },
  { id: 6,  title: "Flannel Shirt",            price: 32,  seller: "@grunge_fits",   sellerAvatar: "G", category: "tops",       gender: "male",   size: "L",  condition: "Good",     imgQ: "flannel+shirt+grunge+plaid",      brand: "Columbia",      likes: 12 },
  { id: 7,  title: "Satin Midi Skirt",         price: 65,  seller: "@noor_thrift",   sellerAvatar: "N", category: "skirts",     gender: "female", size: "M",  condition: "Like New", imgQ: "satin+skirt+olive+fashion",       brand: "Zara",          likes: 89 },
  { id: 8,  title: "90s Tracksuit",            price: 90,  seller: "@sport_vintage", sellerAvatar: "V", category: "sportswear", gender: "male",   size: "M",  condition: "Good",     imgQ: "vintage+tracksuit+90s+adidas",    brand: "Adidas",        likes: 44 },
  { id: 9,  title: "Beige Long Coat",          price: 150, seller: "@retro_closet",  sellerAvatar: "R", category: "jackets",    gender: "female", size: "S",  condition: "Like New", imgQ: "beige+coat+long+fashion+woman",   brand: "Massimo Dutti", likes: 103 },
  { id: 10, title: "Dr. Martens 1460",         price: 110, seller: "@punk_closet",   sellerAvatar: "P", category: "shoes",      gender: "female", size: "37", condition: "Good",     imgQ: "dr+martens+boots+black",          brand: "Dr. Martens",   likes: 77 },
  { id: 11, title: "Knit Polo Sweater",        price: 55,  seller: "@ahmed_fits",    sellerAvatar: "A", category: "tops",       gender: "male",   size: "XL", condition: "Like New", imgQ: "knit+polo+sweater+cream+preppy",  brand: "Ralph Lauren",  likes: 29 },
  { id: 12, title: "Denim Mini Skirt",         price: 40,  seller: "@sara_vintage",  sellerAvatar: "S", category: "skirts",     gender: "female", size: "XS", condition: "Good",     imgQ: "denim+mini+skirt+fashion+blue",   brand: "Levi's",        likes: 51 },
];

// Stable Unsplash image per product using picsum with a seed
const IMG = (q, id) => `https://picsum.photos/seed/${q.replace(/\+/g,"-")}-${id}/600/750`;

const USERS_DB = [
  { id: 1, username: "demo", password: "demo123", name: "Ahmed", handle: "@ahmed_fits", avatar: "A", bio: "Vintage lover 🧥 Cairo based" },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "jackets", label: "Jackets" },
  { id: "tops", label: "Tops" },
  { id: "pants", label: "Trousers" },
  { id: "dresses", label: "Dresses" },
  { id: "skirts", label: "Skirts" },
  { id: "shoes", label: "Shoes" },
  { id: "hoodies", label: "Hoodies" },
  { id: "sportswear", label: "Sportswear" },
];

// ── CSS ───────────────────────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --white:#ffffff;--off:#fafaf9;--bg:#f4f2ee;
  --border:#e8e4dc;--border2:#d8d4cc;
  --text:#1a1a18;--muted:#8a8880;--muted2:#b8b4ac;
  --red:#ff4040;--red2:#cc2020;--green:#2d8a4e;
  --tag-bg:#f0ede8;
}

body{font-family:'DM Sans',sans-serif;background:var(--white);color:var(--text);direction:ltr;-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:5px}
::-webkit-scrollbar-track{background:var(--off)}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:3px}

/* ── NAV ── */
.nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1.5px solid var(--border);height:60px;display:flex;align-items:center;padding:0 1.5rem;gap:1rem}
.nav-logo{font-family:'DM Serif Display',serif;font-size:1.5rem;font-weight:400;color:var(--red);letter-spacing:-1px;cursor:pointer;flex-shrink:0}
.nav-search{flex:1;max-width:500px;position:relative}
.nav-search input{width:100%;background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:9px 16px 9px 38px;font-family:'DM Sans',sans-serif;font-size:.875rem;color:var(--text);outline:none;transition:border-color .15s}
.nav-search input:focus{border-color:var(--text)}
.nav-search input::placeholder{color:var(--muted)}
.nav-search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:.9rem}
.nav-actions{display:flex;gap:.6rem;align-items:center;margin-left:auto}
.nav-btn{padding:8px 18px;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:.85rem;font-weight:500;cursor:pointer;transition:all .15s;border:1.5px solid var(--border);background:none;color:var(--text)}
.nav-btn:hover{background:var(--bg)}
.nav-btn.red{background:var(--red);color:#fff;border-color:var(--red)}
.nav-btn.red:hover{background:var(--red2)}
.user-pill{display:flex;align-items:center;gap:8px;padding:6px 14px;border:1.5px solid var(--border);border-radius:30px;cursor:pointer;font-size:.85rem;transition:background .15s}
.user-pill:hover{background:var(--bg)}
.avatar{width:28px;height:28px;border-radius:50%;background:var(--text);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0}
.avatar.red-bg{background:var(--red)}

/* ── HERO ── */
.hero{background:var(--text);color:#fff;padding:4.5rem 2.5rem;display:flex;align-items:center;justify-content:space-between;overflow:hidden;position:relative;gap:2rem}
.hero::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(-45deg,transparent,transparent 40px,rgba(255,255,255,.025) 40px,rgba(255,255,255,.025) 41px)}
.hero-left{position:relative;z-index:1;max-width:520px}
.hero-eyebrow{display:inline-block;background:var(--red);color:#fff;font-size:.7rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:4px 12px;border-radius:4px;margin-bottom:1.2rem;animation:fadeUp .5s ease both}
.hero-title{font-family:'DM Serif Display',serif;font-size:clamp(2.5rem,5vw,4rem);line-height:1.1;font-weight:400;margin-bottom:1rem;animation:fadeUp .5s .1s ease both}
.hero-title em{color:var(--red);font-style:italic}
.hero-sub{font-size:1rem;color:rgba(255,255,255,.6);line-height:1.7;margin-bottom:2rem;max-width:400px;animation:fadeUp .5s .2s ease both}
.hero-btns{display:flex;gap:.8rem;animation:fadeUp .5s .3s ease both}
.hero-btn{padding:12px 28px;border-radius:8px;border:none;font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:600;cursor:pointer;transition:all .2s}
.hero-btn.primary{background:var(--red);color:#fff}
.hero-btn.primary:hover{background:var(--red2);transform:translateY(-2px)}
.hero-btn.ghost{background:rgba(255,255,255,.08);color:#fff;border:1.5px solid rgba(255,255,255,.2)}
.hero-btn.ghost:hover{background:rgba(255,255,255,.14)}
.hero-right{position:relative;z-index:1;display:flex;gap:1rem;flex-shrink:0;animation:fadeUp .5s .15s ease both}
.hero-card{width:150px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:12px;overflow:hidden;backdrop-filter:blur(10px)}
.hero-card-img{height:140px;overflow:hidden;position:relative}
.hero-card-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
.hero-card:hover .hero-card-img img{transform:scale(1.05)}
.hero-card-body{padding:10px}
.hero-card-price{font-weight:700;font-size:.9rem}
.hero-card-name{font-size:.72rem;color:rgba(255,255,255,.5);margin-top:2px}

/* ── FILTER BAR ── */
.filter-bar{border-bottom:1.5px solid var(--border);background:var(--white);position:sticky;top:60px;z-index:40}
.filter-inner{max-width:1300px;margin:0 auto;padding:0 1.5rem;display:flex;align-items:center;gap:0;overflow-x:auto}
.filter-inner::-webkit-scrollbar{display:none}
.filter-tab{padding:14px 20px;font-size:.875rem;font-weight:500;border:none;background:none;cursor:pointer;color:var(--muted);transition:all .15s;white-space:nowrap;border-bottom:2.5px solid transparent;margin-bottom:-1.5px}
.filter-tab:hover{color:var(--text)}
.filter-tab.active{color:var(--text);border-bottom-color:var(--text);font-weight:600}

/* ── SEC FILTERS ── */
.sec-filters{max-width:1300px;margin:0 auto;padding:1rem 1.5rem;display:flex;gap:.75rem;flex-wrap:wrap;align-items:center}
.filter-chip{display:flex;align-items:center;gap:6px;padding:7px 14px;border:1.5px solid var(--border);border-radius:30px;background:none;font-family:'DM Sans',sans-serif;font-size:.8rem;font-weight:500;cursor:pointer;transition:all .15s;color:var(--text)}
.filter-chip:hover{border-color:var(--text)}
.filter-chip.active{background:var(--text);color:#fff;border-color:var(--text)}
.filter-chip select{background:none;border:none;outline:none;font-family:'DM Sans',sans-serif;font-size:.8rem;cursor:pointer;color:inherit}
.result-info{margin-left:auto;font-size:.8rem;color:var(--muted)}

/* ── GRID ── */
.grid-wrap{max-width:1300px;margin:0 auto;padding:0 1.5rem 4rem}
.product-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:1px;background:var(--border);border:1px solid var(--border);border-radius:12px;overflow:hidden}

/* ── PRODUCT CARD ── */
.p-card{background:var(--white);cursor:pointer;transition:background .15s;position:relative;overflow:hidden}
.p-card:hover{background:var(--off)}
.p-img{aspect-ratio:3/4;overflow:hidden;position:relative;background:var(--bg)}
.p-img img{width:100%;height:100%;object-fit:cover;transition:transform .45s cubic-bezier(.25,.46,.45,.94)}
.p-card:hover .p-img img{transform:scale(1.06)}
.p-img-skeleton{position:absolute;inset:0;background:linear-gradient(90deg,var(--bg) 25%,var(--border) 50%,var(--bg) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.gender-dot{position:absolute;top:10px;left:10px;z-index:2;width:8px;height:8px;border-radius:50%}
.dot-male{background:#5b8def}.dot-female{background:#ef5b9d}
.like-wrap{position:absolute;top:10px;right:10px;z-index:2;opacity:0;transition:opacity .2s;transform:translateY(-4px);transition:opacity .2s,transform .2s}
.p-card:hover .like-wrap{opacity:1;transform:translateY(0)}
.like-btn{background:#fff;border:none;cursor:pointer;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 2px 10px rgba(0,0,0,.15);transition:transform .15s}
.like-btn:hover{transform:scale(1.15)}
.like-btn.liked{color:var(--red)}
.p-body{padding:10px 12px 14px}
.p-seller{font-size:.72rem;color:var(--muted);margin-bottom:3px}
.p-title{font-size:.875rem;font-weight:500;color:var(--text);margin-bottom:6px;line-height:1.3}
.p-meta{display:flex;align-items:center;justify-content:space-between}
.p-price{font-size:1rem;font-weight:700;color:var(--text)}
.p-size{font-size:.72rem;background:var(--tag-bg);padding:3px 8px;border-radius:4px;color:var(--muted);font-weight:500}
.p-cond{font-size:.7rem;font-weight:600;color:var(--green);margin-top:4px}
.p-likes{font-size:.7rem;color:var(--muted);margin-top:2px}

/* ── CARD ENTER ANIMATION ── */
@keyframes cardIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.card-animate{animation:cardIn .4s ease both}

/* ── EMPTY ── */
.empty{text-align:center;padding:6rem 2rem;color:var(--muted)}
.empty-big{font-size:3rem;margin-bottom:1rem}

/* ── OVERLAY / MODAL ── */
.overlay{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(6px);animation:fadeIn .2s ease}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.modal{background:var(--white);border-radius:16px;padding:2.5rem;width:100%;max-width:400px;position:relative;box-shadow:0 24px 64px rgba(0,0,0,.2);animation:slideUp .25s ease}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.modal-x{position:absolute;top:1.2rem;right:1.2rem;background:var(--bg);border:none;cursor:pointer;width:32px;height:32px;border-radius:50%;font-size:.9rem;color:var(--muted);display:flex;align-items:center;justify-content:center;transition:background .15s}
.modal-x:hover{background:var(--border)}
.m-logo{font-family:'DM Serif Display',serif;font-size:2rem;color:var(--red);text-align:center;margin-bottom:.25rem}
.m-sub{text-align:center;font-size:.875rem;color:var(--muted);margin-bottom:2rem}
.hint{background:#fff8f0;border:1px solid #ffd9b3;border-radius:8px;padding:10px 14px;font-size:.78rem;color:#b36000;text-align:center;margin-bottom:1.5rem}
.field{margin-bottom:1rem}
.field label{display:block;font-size:.78rem;font-weight:600;color:var(--muted);margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px}
.field input{width:100%;border:1.5px solid var(--border);border-radius:8px;padding:11px 14px;font-family:'DM Sans',sans-serif;font-size:.9rem;outline:none;transition:border-color .15s;color:var(--text)}
.field input:focus{border-color:var(--text)}
.field input::placeholder{color:var(--muted2)}
.err{font-size:.78rem;color:var(--red);margin-top:6px}
.submit-btn{width:100%;padding:13px;background:var(--text);color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:600;margin-top:.5rem;transition:background .2s}
.submit-btn:hover{background:#333}
.switch-mode{text-align:center;margin-top:1rem;font-size:.82rem;color:var(--muted)}
.switch-mode button{background:none;border:none;color:var(--red);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:.82rem;font-weight:600}

/* ── DETAIL MODAL ── */
.detail-modal{background:var(--white);border-radius:16px;width:100%;max-width:680px;position:relative;box-shadow:0 24px 64px rgba(0,0,0,.2);overflow:hidden;max-height:90vh;overflow-y:auto;animation:slideUp .25s ease}
.d-img{height:340px;overflow:hidden;position:relative;background:var(--bg)}
.d-img img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
.d-img:hover img{transform:scale(1.03)}
.d-img-sk{position:absolute;inset:0;background:linear-gradient(90deg,var(--bg) 25%,var(--border) 50%,var(--bg) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
.d-body{padding:1.5rem 2rem 2rem}
.d-seller{display:flex;align-items:center;gap:10px;margin-bottom:1rem}
.d-sname{font-size:.85rem;font-weight:600}
.d-shandle{font-size:.75rem;color:var(--muted)}
.d-title{font-family:'DM Serif Display',serif;font-size:1.6rem;margin-bottom:.5rem}
.d-price{font-size:1.8rem;font-weight:700;margin-bottom:1rem}
.d-tags{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem}
.d-tag{padding:5px 12px;border-radius:6px;background:var(--tag-bg);font-size:.8rem;color:var(--muted);font-weight:500}
.d-tag.green{background:#eef7f1;color:var(--green)}
.buy-btn{width:100%;padding:14px;background:var(--red);color:#fff;border:none;border-radius:10px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:1rem;font-weight:700;transition:all .2s}
.buy-btn:hover{background:var(--red2);transform:translateY(-1px)}

/* ── TOAST ── */
.toast{position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);background:var(--text);color:#fff;padding:10px 24px;border-radius:30px;font-size:.875rem;font-weight:500;z-index:200;white-space:nowrap;box-shadow:0 8px 24px rgba(0,0,0,.2);animation:fadeUp .25s ease}
@keyframes fadeUp{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}

/* ── FOOTER ── */
.footer{border-top:1.5px solid var(--border);padding:2rem 1.5rem;text-align:center;color:var(--muted);font-size:.8rem;margin-top:2rem}
.footer-logo{font-family:'DM Serif Display',serif;font-size:1.5rem;color:var(--red);margin-bottom:.5rem}

@media(max-width:640px){
  .hero-right{display:none}
  .hero{padding:2.5rem 1.5rem}
  .hero-title{font-size:2rem}
  .product-grid{grid-template-columns:repeat(2,1fr)}
  .detail-modal{border-radius:12px 12px 0 0;position:fixed;bottom:0;left:0;right:0;max-height:85vh;margin:0}
  .overlay{align-items:flex-end;padding:0}
}
`;

// ── Image component with skeleton ─────────────────────────────────────────────
function ProductImage({ id, query, alt, className, style }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const src = `https://picsum.photos/seed/${id}/600/800`;
  const fallback = `https://picsum.photos/seed/${id + 100}/600/800`;
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      {!loaded && !errored && <div className={className === "d-img-inner" ? "d-img-sk" : "p-img-skeleton"} />}
      <img
        src={errored ? fallback : src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        onError={() => { if (!errored) setErrored(true); else setLoaded(true); }}
      />
    </div>
  );
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function Toast({ msg, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 2500); return () => clearTimeout(t); }, []);
  return <div className="toast">{msg}</div>;
}

// ── Auth Modal ────────────────────────────────────────────────────────────────
function AuthModal({ onClose, onLogin }) {
  const [mode, setMode] = useState("login");
  const [f, setF] = useState({ username: "", password: "", name: "" });
  const [err, setErr] = useState("");

  const submit = () => {
    setErr("");
    if (mode === "login") {
      const u = USERS_DB.find(x => x.username === f.username && x.password === f.password);
      if (u) { onLogin(u); onClose(); }
      else setErr("Wrong username or password");
    } else {
      if (!f.name || !f.username || !f.password) { setErr("Please fill all fields"); return; }
      if (USERS_DB.find(x => x.username === f.username)) { setErr("Username taken, try another"); return; }
      const u = { id: Date.now(), username: f.username, password: f.password, name: f.name, handle: `@${f.username}`, avatar: f.name[0].toUpperCase(), bio: "New to RE,LIBS 👋" };
      USERS_DB.push(u);
      onLogin(u); onClose();
    }
  };

  return (
    <div className="overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-x" onClick={onClose}>✕</button>
        <div className="m-logo">RE,LIBS</div>
        <p className="m-sub">{mode === "login" ? "Sign in to your account" : "Join RE,LIBS for free"}</p>
        {mode === "login" && <div className="hint">🔑 Try: demo / demo123</div>}
        {mode === "register" && (
          <div className="field">
            <label>Full Name</label>
            <input placeholder="Your name" value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
          </div>
        )}
        <div className="field">
          <label>Username</label>
          <input placeholder="username" value={f.username} onChange={e => setF({ ...f, username: e.target.value })} />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" value={f.password} onChange={e => setF({ ...f, password: e.target.value })} />
          {err && <div className="err">{err}</div>}
        </div>
        <button className="submit-btn" onClick={submit}>{mode === "login" ? "Log in" : "Sign up"}</button>
        <div className="switch-mode">
          {mode === "login"
            ? <span>No account? <button onClick={() => { setMode("register"); setErr(""); }}>Sign up</button></span>
            : <span>Have an account? <button onClick={() => { setMode("login"); setErr(""); }}>Log in</button></span>
          }
        </div>
      </div>
    </div>
  );
}

// ── Detail Modal ──────────────────────────────────────────────────────────────
function DetailModal({ product: p, onClose, onBuy, loggedIn }) {
  return (
    <div className="overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="detail-modal">
        <button className="modal-x" onClick={onClose} style={{ zIndex: 10 }}>✕</button>
        <div className="d-img">
          <ProductImage id={p.id * 7 + 3} query={p.imgQ} alt={p.title} />
        </div>
        <div className="d-body">
          <div className="d-seller">
            <div className="avatar red-bg">{p.sellerAvatar}</div>
            <div>
              <div className="d-sname">{p.seller.replace("@", "")}</div>
              <div className="d-shandle">{p.seller}</div>
            </div>
          </div>
          <h2 className="d-title">{p.title}</h2>
          <div className="d-price">SAR {p.price}</div>
          <div className="d-tags">
            <span className="d-tag green">{p.condition}</span>
            <span className="d-tag">Size {p.size}</span>
            <span className="d-tag">{p.brand}</span>
            <span className="d-tag">{p.gender === "male" ? "Menswear" : "Womenswear"}</span>
          </div>
          <button className="buy-btn" onClick={() => onBuy(p)}>
            {loggedIn ? `Buy Now · SAR ${p.price}` : "Sign in to Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ p, index, onSelect, onLike, liked }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`p-card${visible ? " card-animate" : ""}`}
      style={{ animationDelay: `${(index % 4) * 60}ms` }}
      onClick={() => onSelect(p)}
    >
      <div className="p-img">
        <ProductImage id={p.id * 13 + 1} query={p.imgQ} alt={p.title} />
        <div className={`gender-dot ${p.gender === "male" ? "dot-male" : "dot-female"}`} />
        <div className="like-wrap">
          <button
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={e => { e.stopPropagation(); onLike(p.id); }}
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="p-body">
        <div className="p-seller">{p.seller}</div>
        <div className="p-title">{p.title}</div>
        <div className="p-meta">
          <span className="p-price">SAR {p.price}</span>
          <span className="p-size">{p.size}</span>
        </div>
        <div className="p-cond">{p.condition}</div>
        <div className="p-likes">{p.likes + (liked ? 1 : 0)} likes</div>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("all");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState("all");
  const [toast, setToast] = useState("");
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);

  const filtered = PRODUCTS.filter(p => {
    const q = search.toLowerCase();
    const ms = !q || p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.seller.toLowerCase().includes(q);
    const mg = gender === "all" || p.gender === gender;
    const mc = category === "all" || p.category === category;
    const mp = maxPrice === "all" || p.price <= +maxPrice;
    return ms && mg && mc && mp;
  }).sort((a, b) => sortBy === "price-asc" ? a.price - b.price : sortBy === "price-desc" ? b.price - a.price : 0);

  const handleBuy = (p) => {
    if (!user) { setSelected(null); setShowAuth(true); return; }
    setCart(prev => [...prev, p]);
    setSelected(null);
    setToast(`Added "${p.title}" to bag! 🛍️`);
  };

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">RE,LIBS</div>
        <div className="nav-search">
          <span className="nav-search-icon">🔍</span>
          <input
            placeholder="Search for items or shops"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="nav-actions">
          {user ? (
            <>
              <div className="user-pill">
                <div className="avatar red-bg">{user.avatar}</div>
                <span>{user.handle}</span>
              </div>
              {cart.length > 0 && (
                <button className="nav-btn" onClick={() => setToast(`${cart.length} item${cart.length > 1 ? "s" : ""} in your bag 🛍️`)}>
                  Bag ({cart.length})
                </button>
              )}
              <button className="nav-btn" onClick={() => { setUser(null); setCart([]); }}>Log out</button>
            </>
          ) : (
            <>
              <button className="nav-btn" onClick={() => setShowAuth(true)}>Log in</button>
              <button className="nav-btn red" onClick={() => setShowAuth(true)}>Sign up</button>
            </>
          )}
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">✦ Second Hand · First Love</div>
          <h1 className="hero-title">Buy & sell<br /><em>unique</em> fashion</h1>
          <p className="hero-sub">Discover pre-loved vintage pieces, rare streetwear finds, and sustainable fashion from sellers across the region.</p>
          <div className="hero-btns">
            <button className="hero-btn primary" onClick={() => document.querySelector(".filter-bar").scrollIntoView({ behavior: "smooth" })}>
              Start shopping
            </button>
            <button className="hero-btn ghost" onClick={() => setShowAuth(true)}>
              Sell your clothes
            </button>
          </div>
        </div>
        <div className="hero-right">
          {PRODUCTS.slice(0, 2).map((p, i) => (
            <div key={p.id} className="hero-card" style={{ marginTop: i === 1 ? 28 : 0 }}>
              <div className="hero-card-img">
                <ProductImage id={p.id * 13 + 1} query={p.imgQ} alt={p.title} />
              </div>
              <div className="hero-card-body">
                <div className="hero-card-price">SAR {p.price}</div>
                <div className="hero-card-name">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="filter-bar">
        <div className="filter-inner">
          {CATEGORIES.map(c => (
            <button key={c.id} className={`filter-tab ${category === c.id ? "active" : ""}`} onClick={() => setCategory(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* FILTERS */}
      <div className="sec-filters">
        {[["all", "All"], ["male", "Menswear"], ["female", "Womenswear"]].map(([v, l]) => (
          <button key={v} className={`filter-chip ${gender === v ? "active" : ""}`} onClick={() => setGender(v)}>{l}</button>
        ))}
        <div className="filter-chip">
          <select value={maxPrice} onChange={e => setMaxPrice(e.target.value)}>
            <option value="all">Price: Any</option>
            <option value="40">Under SAR 40</option>
            <option value="70">Under SAR 70</option>
            <option value="100">Under SAR 100</option>
            <option value="120">Under SAR 120</option>
          </select>
        </div>
        <div className="filter-chip">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="default">Sort: Relevance</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <span className="result-info">{filtered.length} items</span>
      </div>

      {/* GRID */}
      <div className="grid-wrap">
        {filtered.length === 0 ? (
          <div className="empty">
            <div className="empty-big">🔍</div>
            <p>No results — try different filters</p>
          </div>
        ) : (
          <div className="product-grid">
            {filtered.map((p, i) => (
              <ProductCard
                key={p.id}
                p={p}
                index={i}
                onSelect={setSelected}
                onLike={id => setLiked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])}
                liked={liked.includes(p.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">RE,LIBS</div>
        <p>© 2025 RE,LIBS · Pre-loved fashion · Made with ♥</p>
      </footer>

      {/* MODALS */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={setUser} />}
      {selected && <DetailModal product={selected} onClose={() => setSelected(null)} onBuy={handleBuy} loggedIn={!!user} />}
      {toast && <Toast msg={toast} onDone={() => setToast("")} />}
    </>
  );
}
