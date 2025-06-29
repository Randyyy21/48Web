import React from 'react';

const LiveStream: React.FC = () => {
  return (
    <section className="live-stream py-12 bg-dreamland-light">
      <h2 className="text-3xl font-bold text-dreamland-dark text-center mb-8 animate-fade-in">Live Stream</h2>
      <div className="container mx-auto">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/live_stream?channel=UCj4KPczb6EKmDFXoRB4fNwQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default LiveStream;