import React, { useEffect, useRef, useState } from "react";
import Privacy from "./Privacy";
import About from "./About";
import Terms from "./Terms";
import Disclaimer from "./Disclaimer";
import Contact from "./Contact";
const presets = {
  ssc: { kb: 50, width: 200, height: 230, label: "SSC", sub: "Photo" },
  railway: { kb: 50, width: 200, height: 230, label: "Railway", sub: "RRB" },
  bank: { kb: 50, width: 200, height: 230, label: "Bank", sub: "IBPS" },
  neet: { kb: 80, width: 200, height: 230, label: "NEET", sub: "Photo" },
  sign: { kb: 20, width: 300, height: 100, label: "Signature", sub: "20 KB" }
};

function App() {
  if (window.location.pathname === "/formfit-tools/privacy") {
    return <Privacy />;
  }
  if (window.location.pathname === "/formfit-tools/about") {
    return <About />;
  }
if (window.location.pathname === "/formfit-tools/terms") {
  return <Terms />;
}
if (window.location.pathname === "/formfit-tools/disclaimer") {
  return <Disclaimer />;
}
if (window.location.pathname === "/formfit-tools/contact") {
  return <Contact />;
}
  const inputRef = useRef(null);
  const [mode, setMode] = useState("photo");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  
  const [result, setResult] = useState("");
  const [resultInfo, setResultInfo] = useState(null);
  const [kb, setKb] = useState(50);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(230);
  const [format, setFormat] = useState("image/jpeg");
  const [quality, setQuality] = useState(85);
  const [preset, setPreset] = useState("");
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!file) { setPreview(""); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const selectFile = (f) => {
    if (!f) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(f.type)) {
      alert("Please upload JPG, JPEG, PNG or WEBP image.");
      return;
    }
    setFile(f);
    setResult("");
    setResultInfo(null);
  };

  const applyPreset = (key) => {
    setPreset(key);
    if (!key) return;
    const p = presets[key];
    setKb(p.kb); setWidth(p.width); setHeight(p.height);
    if (key === "sign") setMode("signature");
  };

  const changeMode = (next) => {
    setMode(next);
    setPreset(next === "signature" ? "sign" : "");
    if (next === "signature") {
      setKb(20); setWidth(300); setHeight(100);
    } else {
      setKb(50); setWidth(200); setHeight(230);
    }
  };

  const resetTool = () => {
    setFile(null); setPreview(""); setResult(""); setResultInfo(null);
    setPreset(""); setKb(mode === "signature" ? 20 : 50);
    setWidth(mode === "signature" ? 300 : 200);
    setHeight(mode === "signature" ? 100 : 230);
    setQuality(85);
    if (inputRef.current) inputRef.current.value = "";
  };

  const resizeImage = async () => {
    if (!file) {
      alert("Please upload an image first.");
      return;
    }

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
    await new Promise(resolve => img.onload = resolve);

    const canvas = document.createElement("canvas");
    canvas.width = Number(width);
    canvas.height = Number(height);
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    ctx.drawImage(img, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh);

    const targetBytes = Number(kb) * 1024;
    let dataUrl = canvas.toDataURL(format, Number(quality) / 100);

    if (format === "image/jpeg") {
      let low = 0.05, high = Math.max(0.1, Number(quality) / 100);
      for (let i = 0; i < 22; i++) {
        const q = (low + high) / 2;
        const test = canvas.toDataURL(format, q);
        const bytes = Math.round(test.length * 0.75);
        dataUrl = test;
        if (bytes > targetBytes) high = q;
        else low = q;
      }
    }

    const bytes = Math.round(dataUrl.length * 0.75);
    setResult(dataUrl);
    setResultInfo({ kb: Math.max(1, Math.round(bytes / 1024)), width: canvas.width, height: canvas.height });
    URL.revokeObjectURL(objectUrl);
  };

  const downloadResult = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = `${mode === "signature" ? "signature" : "photo"}-resized.${format === "image/png" ? "png" : "jpg"}`;
    a.click();
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#" className="brand">
            <span className="brand-mark">F</span>
            <span>FormFit <b>Tools</b></span>
          </a>
          <nav className="nav-links">
            <a href="#tool">Photo Resizer</a>
            <a href="#presets">Presets</a>
            <a href="#how">How It Works</a>
          </nav>
          <button className="top-btn" onClick={() => inputRef.current?.click()}>Start Free <span>→</span></button>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="eyebrow">⚡ FAST • FREE • PRIVATE</div>
          <h1>Make Your <span>Photo & Signature</span><br className="desktop" /> Form-Ready in Seconds</h1>
          <p>Resize, compress and prepare images for SSC, Railway, Bank, UPSC, NEET and other online application forms.</p>
          <div className="hero-points">
            <span>✓ Exact KB</span><span>✓ Exact Pixels</span><span>✓ No Signup</span><span>✓ Browser Processing</span>
          </div>
        </section>

        <div className="ad container"><span>ADVERTISEMENT</span><small>Google AdSense</small></div>

        <section className="workspace container" id="tool">
          <div className="workspace-head">
            <div>
              <div className="section-kicker">IMAGE RESIZER</div>
              <h2>Prepare your image</h2>
              <p>Upload your file, set the required size and download the ready-to-use image.</p>
            </div>
            <div className="secure">🔒 Processed in your browser</div>
          </div>

          <div className="mode-tabs">
            <button className={mode === "photo" ? "mode active" : "mode"} onClick={() => changeMode("photo")}>
              <span>📷</span><div><b>Photo Resizer</b><small>Photo / passport image</small></div>
            </button>
            <button className={mode === "signature" ? "mode active" : "mode"} onClick={() => changeMode("signature")}>
              <span>✍️</span><div><b>Signature Resizer</b><small>Signature / sign image</small></div>
            </button>
          </div>

          <input ref={inputRef} hidden type="file" accept="image/jpeg,image/png,image/webp"
            onChange={e => selectFile(e.target.files?.[0])} />

          <div
            className={`upload ${dragging ? "dragging" : ""} ${file ? "uploaded" : ""}`}
            onClick={() => !file && inputRef.current?.click()}
            onDragOver={e => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={e => { e.preventDefault(); setDragging(false); selectFile(e.dataTransfer.files?.[0]) }}
          >
            {!file ? (
              <div className="empty-upload">
                <div className="cloud">↑</div>
                <h3>Drop your image here</h3>
                <p>or <button onClick={e => { e.stopPropagation(); inputRef.current?.click() }}>browse from your device</button></p>
                <span className="formats">JPG • JPEG • PNG • WEBP</span>
              </div>
            ) : (
              <div className="uploaded-row">
                <div className="preview-box"><img src={preview} alt="Uploaded preview" /><span className="verified">✓</span></div>
                <div className="upload-details">
                  <span className="success">✓ IMAGE UPLOADED SUCCESSFULLY</span>
                  <h3>{file.name}</h3>
                  <p>{Math.max(1, Math.round(file.size / 1024))} KB <i>•</i> {file.type.split("/")[1].toUpperCase()}</p>
                  <button className="change" onClick={e => { e.stopPropagation(); inputRef.current?.click() }}>Change Image</button>
                </div>
                <div className="upload-status"><span>READY</span><b>100%</b></div>
              </div>
            )}
          </div>

          <div className="preview-note"><span>👁️</span><div><b>Live preview is enabled.</b> Your selected image is visible above so you can confirm the correct file before resizing.</div></div>

          <div className="settings-title">
            <h3>Resize Settings</h3>
            <span>Set the exact requirements from your application form.</span>
          </div>

          <div className="settings">
            <label><span>Target Size</span><div className="input-unit"><input type="number" min="5" value={kb} onChange={e => setKb(e.target.value)} /><b>KB</b></div></label>
            <label><span>Width</span><div className="input-unit"><input type="number" min="20" value={width} onChange={e => setWidth(e.target.value)} /><b>PX</b></div></label>
            <label><span>Height</span><div className="input-unit"><input type="number" min="20" value={height} onChange={e => setHeight(e.target.value)} /><b>PX</b></div></label>
            <label><span>Format</span><select value={format} onChange={e => setFormat(e.target.value)}><option value="image/jpeg">JPG / JPEG</option><option value="image/png">PNG</option></select></label>
            <label><span>Quality</span><div className="input-unit"><input type="number" min="10" max="100" value={quality} onChange={e => setQuality(e.target.value)} /><b>%</b></div></label>
            <label><span>Quick Preset</span><select value={preset} onChange={e => applyPreset(e.target.value)}><option value="">Choose preset</option>{Object.entries(presets).map(([k, p]) => <option key={k} value={k}>{p.label} — {p.kb} KB</option>)}</select></label>
          </div>

          <div className="actions">
            <button className="download-btn" onClick={resizeImage}>Resize Image <span>→</span></button>
            <button className="reset-btn" onClick={resetTool}>Reset</button>
          </div>

          {result && (
            <div className="result">
              <div className="result-image"><img src={result} alt="Resized result" /></div>
              <div className="result-copy">
                <span className="ready">✓ READY TO DOWNLOAD</span>
                <h3>Your resized image is ready!</h3>
                <p><b>{resultInfo.kb} KB</b><i>•</i><b>{resultInfo.width} × {resultInfo.height} PX</b></p>
                <button className="download-btn compact" onClick={downloadResult}>⬇ Download Image</button>
              </div>
            </div>
          )}
        </section>

        <div className="ad container"><span>ADVERTISEMENT</span><small>Google AdSense</small></div>

        <section className="section container" id="presets">
          <div className="section-head">
            <div className="section-kicker">QUICK START</div>
            <h2>Popular Form Presets</h2>
            <p>Start with a common requirement and adjust it according to the latest official notification.</p>
          </div>
          <div className="preset-grid">
            {Object.entries(presets).filter(([k]) => k !== "sign").map(([key, p]) => (
              <button className="preset-card" key={key} onClick={() => applyPreset(key)}>
                <div className="preset-icon">{key === "ssc" ? "📋" : key === "railway" ? "🚆" : key === "bank" ? "🏦" : "🎓"}</div>
                <div><span>{p.label}</span><h3>{p.sub}</h3><p>{p.kb} KB · {p.width} × {p.height} PX</p></div><b>→</b>
              </button>
            ))}
          </div>
        </section>

        <section className="section container" id="how">
          <div className="section-head"><div className="section-kicker">WHY FORMfit</div><h2>Simple, Fast & Private</h2></div>
          <div className="feature-grid">
            <div className="feature"><div>🔒</div><h3>Private by Design</h3><p>Your image is processed inside your browser in this version. No account is required.</p></div>
            <div className="feature"><div>⚡</div><h3>Exact Control</h3><p>Choose target KB, width, height, output format and quality in one place.</p></div>
            <div className="feature"><div>📱</div><h3>Works Everywhere</h3><p>A responsive interface designed for both mobile applicants and desktop users.</p></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer">
          <div><a className="brand footer-brand" href="#"><span className="brand-mark">F</span><span>FormFit <b>Tools</b></span></a><p>Fast image tools for online application forms.</p></div>
          <div className="footer-links"><a href="#">About</a><a href="#">Contact</a><a href="#">Privacy Policy</a><a href="#">Disclaimer</a></div>
          <div className="copyright">© 2026 FormFit Tools</div>
        </div>
      </footer>
    </div>
  );
}

export default App;