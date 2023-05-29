function Timeline({ images }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px 0' }}>
        {images.map((image, index) => (
          <div key={index} className={`image-container ${index % 2 === 0 ? 'left' : 'right'}`}> 
            <img src={image.src} alt={image.caption} style={{ width: '25%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <p style={{ textAlign: 'center', wordWrap: 'break-word', overflowWrap: 'break-word'  }}>{image.caption}</p>
        </div>
        ))}
      </div>
    );
  }
  
  export default Timeline;

