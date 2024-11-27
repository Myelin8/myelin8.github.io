import React, { useState } from "react";

const CustomMap = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
    <div className="map-container mb-40">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5707.229492966716!2d-9.3949003!3d38.7170222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec5005f519a1d%3A0xf2c3af06223af76b!2sCIBT%20-%20Centro%20de%20Incuba%C3%A7%C3%A3o%20de%20Base%20Tecnol%C3%B3gica%20do%20Turismo!5e0!3m2!1spt-PT!2spt!4v1732707547515!5m2!1spt-PT!2spt" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default CustomMap;