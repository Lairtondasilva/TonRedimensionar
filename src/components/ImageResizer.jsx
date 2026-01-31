import { useState, useRef, useEffect } from 'react';
import { Upload, Download, RefreshCw, Crop, Image as ImageIcon } from 'lucide-react';
import Cropper from 'react-easy-crop';
import AdSense from './AdSense';
import { useAnalytics } from '../hooks/useAnalytics';
import '../App.css';

const PRESETS = [
  { label: 'Instagram Feed', width: 1080, height: 1080 },
  { label: 'Instagram Story', width: 1080, height: 1920 },
  { label: 'WhatsApp', width: 1080, height: 1080 },
  { label: 'Foto 3x4', width: 600, height: 800 },
];

function ImageResizer() {
  const [file, setFile] = useState(null);
  const [imageBitmap, setImageBitmap] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [keepAspectRatio, setKeepAspectRatio] = useState(true);
  const [resizeMode, setResizeMode] = useState('contain'); // stretch, contain, cover, manual
  const [exportFormat, setExportFormat] = useState('image/png');
  const [quality, setQuality] = useState(90);
  const [resizedUrl, setResizedUrl] = useState(null);
  const canvasRef = useRef(null);
  const originalAspectRatio = useRef(0);
  
  // Cropper states
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  
  const { trackResize } = useAnalytics();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setFile(selectedFile);
      setPreviewUrl(url);
      setResizedUrl(null);
      setResizeMode('contain'); // Reset mode on new file
      
      // Set default format based on file type if supported, otherwise png
      if (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png') {
        setExportFormat(selectedFile.type);
      } else {
        setExportFormat('image/png');
      }

      const img = new Image();
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
        originalAspectRatio.current = img.width / img.height;
        setImageBitmap(img);
      };
      img.src = url;
    }
  };

  const handleWidthChange = (e) => {
    const newWidth = parseInt(e.target.value, 10) || 0;
    setWidth(newWidth);
    if (keepAspectRatio && originalAspectRatio.current) {
      setHeight(Math.round(newWidth / originalAspectRatio.current));
    }
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value, 10) || 0;
    setHeight(newHeight);
    if (keepAspectRatio && originalAspectRatio.current) {
      setWidth(Math.round(newHeight * originalAspectRatio.current));
    }
  };

  const triggerDownload = (dataUrl, format) => {
    const a = document.createElement('a');
    a.href = dataUrl;
    
    // Determine extension
    let ext = 'png';
    if (format === 'image/jpeg') ext = 'jpg';
    if (format === 'image/webp') ext = 'webp';
    
    // Add _resized suffix to original name
    const originalName = file ? file.name : 'image';
    const nameParts = originalName.split('.');
    if (nameParts.length > 1) nameParts.pop(); // Remove old extension
    const name = nameParts.join('.');
    
    a.download = `${name}_resized.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handlePreset = (preset) => {
    setWidth(preset.width);
    setHeight(preset.height);
    setKeepAspectRatio(false);
    // Presets usually imply specific dimensions, so default to 'manual' to let user adjust
    setResizeMode('manual');
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleResizeAndDownload = () => {
    if (!imageBitmap || !canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Better quality resizing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Fill background (white for JPEG or 'contain' mode)
    if (exportFormat === 'image/jpeg' || resizeMode === 'contain') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
    
    if (resizeMode === 'manual' && croppedAreaPixels) {
      // Draw the cropped area
      ctx.drawImage(
        imageBitmap,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        width,
        height
      );
    } else if (resizeMode === 'stretch') {
        ctx.drawImage(imageBitmap, 0, 0, width, height);
    } else if (resizeMode === 'contain') {
        const scale = Math.min(width / imageBitmap.width, height / imageBitmap.height);
        const newWidth = imageBitmap.width * scale;
        const newHeight = imageBitmap.height * scale;
        const x = (width - newWidth) / 2;
        const y = (height - newHeight) / 2;
        ctx.drawImage(imageBitmap, x, y, newWidth, newHeight);
    } else if (resizeMode === 'cover') {
        const scale = Math.max(width / imageBitmap.width, height / imageBitmap.height);
        const newWidth = imageBitmap.width * scale;
        const newHeight = imageBitmap.height * scale;
        const x = (width - newWidth) / 2;
        const y = (height - newHeight) / 2;
        ctx.drawImage(imageBitmap, x, y, newWidth, newHeight);
    }

    // Get format and quality
    const finalQuality = (exportFormat === 'image/jpeg' || exportFormat === 'image/webp') ? quality / 100 : undefined;
    const dataUrl = canvas.toDataURL(exportFormat, finalQuality);
    setResizedUrl(dataUrl);
    
    // Auto download
    triggerDownload(dataUrl, exportFormat);
    
    // Track usage
    trackResize(width, height, exportFormat);
  };

  const handleManualDownload = () => {
    if (resizedUrl) {
      triggerDownload(resizedUrl, exportFormat);
    }
  };

  return (
    <div className="card">
      <div className="upload-section" onClick={() => document.getElementById('file-upload').click()}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            background: '#e0e7ff', 
            padding: '1.5rem', 
            borderRadius: '50%', 
            color: '#4f46e5',
            marginBottom: '0.5rem'
          }}>
            <Upload size={40} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 600 }}>Comece por aqui</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Arraste sua imagem ou clique para selecionar</p>
          <label htmlFor="file-upload" className="custom-file-upload" onClick={(e) => e.stopPropagation()}>
             Escolher Imagem
          </label>
        </div>
        <input 
          id="file-upload" 
          type="file" 
          accept="image/png, image/jpeg, image/webp" 
          onChange={handleFileChange} 
        />
      </div>

      {previewUrl && (
        <div className="editor-section">
          <div className="preview-container">
            <h3>{resizeMode === 'manual' ? 'Ajuste o Corte' : 'Original'}</h3>
            
            <div className="mode-toggle">
              <button 
                className={`mode-btn ${resizeMode !== 'manual' ? 'active' : ''}`}
                onClick={() => setResizeMode('contain')}
              >
                <ImageIcon size={16} /> Visualizar
              </button>
              <button 
                className={`mode-btn ${resizeMode === 'manual' ? 'active' : ''}`}
                onClick={() => setResizeMode('manual')}
              >
                <Crop size={16} /> Recortar
              </button>
            </div>

            {resizeMode === 'manual' ? (
              <div className="cropper-wrapper">
                <Cropper
                  image={previewUrl}
                  crop={crop}
                  zoom={zoom}
                  aspect={width / height}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
            ) : (
              <>
                <img src={previewUrl} alt="Original" className="preview-image" />
                <p>{imageBitmap?.width} x {imageBitmap?.height} px</p>
              </>
            )}
          </div>

          <div className="controls">
            <div className="presets-group">
              <label>Presets Rápidos</label>
              <div className="presets-grid">
                {PRESETS.map((preset, index) => (
                  <button 
                    key={index} 
                    onClick={() => handlePreset(preset)}
                    className="preset-btn"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="input-group">
              <label>Largura (px)</label>
              <input 
                type="number" 
                value={width} 
                onChange={handleWidthChange} 
              />
            </div>
            
            <div className="input-group">
              <label>Altura (px)</label>
              <input 
                type="number" 
                value={height} 
                onChange={handleHeightChange} 
              />
            </div>

            <div className="input-group">
              <label>Formato de Saída</label>
              <select 
                value={exportFormat} 
                onChange={(e) => setExportFormat(e.target.value)}
              >
                <option value="image/png">PNG</option>
                <option value="image/jpeg">JPEG</option>
                <option value="image/webp">WEBP</option>
              </select>
            </div>

            {(exportFormat === 'image/jpeg' || exportFormat === 'image/webp') && (
              <div className="input-group">
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                  Qualidade <span>{quality}%</span>
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={quality} 
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: '#4f46e5' }}
                />
              </div>
            )}

            <div className="input-group">
              <label>Modo de Ajuste</label>
              <select 
                value={resizeMode} 
                onChange={(e) => setResizeMode(e.target.value)}
              >
                <option value="manual">Manual (Recortar/Zoom)</option>
                <option value="contain">Ajustar (Adicionar bordas)</option>
                <option value="cover">Preencher (Cortar excesso)</option>
                <option value="stretch">Esticar (Distorcer)</option>
              </select>
            </div>

            <div className="checkbox-group">
              <input 
                type="checkbox" 
                id="aspect-ratio" 
                checked={keepAspectRatio} 
                onChange={(e) => setKeepAspectRatio(e.target.checked)} 
              />
              <label htmlFor="aspect-ratio">Manter Proporção (Travar input)</label>
            </div>

            <button onClick={handleResizeAndDownload} className="primary-btn">
              <RefreshCw size={20} /> Redimensionar e Baixar
            </button>
          </div>
        </div>
      )}
      
      {resizedUrl && (
        <div className="result-section">
          <h3>Imagem Pronta!</h3>
          <p>O download deve ter começado automaticamente.</p>
          <button onClick={handleManualDownload} className="download-btn">
            <Download size={20} /> Baixar Novamente
          </button>
          
          <div style={{ marginTop: '2rem', width: '100%', overflow: 'hidden' }}>
            <p style={{ fontSize: '0.8rem', color: '#999', textAlign: 'center', marginBottom: '0.5rem' }}>Publicidade</p>
            <AdSense slot="9876543210" style={{ display: 'block', minHeight: '250px' }} />
          </div>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default ImageResizer;