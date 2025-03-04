import React from 'react'

function video() {
    return (
        <div>

            <div className="video-row" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', border: '10px solid red' }}>
                {/* Video 1 */}
                <div className="video-wrapper" style={{ width: '300px', aspectRatio: '9/16', borderRadius: '15px', overflow: 'hidden', border: '10px solid red' }}>
                    <video src="/video1.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                </div>
                {/* Video 2 */}
                <div className="video-wrapper" style={{ width: '300px', aspectRatio: '9/16', borderRadius: '15px', overflow: 'hidden' }}>

                    <video src="/video2.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Video 3 */}
                <div className="video-wrapper" style={{ width: '300px', aspectRatio: '9/16', borderRadius: '15px', overflow: 'hidden' }}>
                    <video src="/video3.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    )
}

export default video