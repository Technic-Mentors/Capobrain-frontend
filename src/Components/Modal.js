import React, { useRef, useState } from "react";

export default function Modal() {
  const iframeRef = useRef(null);
  const [originalSrc, setOriginalSrc] = useState(
    "https://www.youtube.com/embed/7k4E6ZveXkI?si=q13MoBvkdhEbuuDA"
  );

  function blockIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = ""; // Set the src attribute to an empty string
    }
  }

  function resetIframe() {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = originalSrc; // Set the src attribute back to the original value
    }
  }

  return (
    <div>
      {/* video modal */}
      <div className="modal fade" id="video" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog modal-lg" data-backdrop="static">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Demo Video
              </h5>
              <button
                type="button"
                id="closeBtn"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={blockIframe} // Call the blockIframe function on close button click
              ></button>
            </div>
            <div className="modal-body" id="modalBody">
              <div className="ratio ratio-16x9">
                <iframe
                  ref={iframeRef}
                  width="560"
                  height="315"
                  src={originalSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
