// Brain Telecommunication Ltd. location in Allama Iqbal Town, Lahore
const LOCATION = {
  lat: 31.5051,
  lng: 74.3236,
  address: "Plot No. 730-727, Nizam Block, Allama Iqbal Town, Lahore, Pakistan"
};

export default function GoogleMapComponent() {
  // Google Maps Embed URL with coordinates
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.494281935689!2d74.28398208009331!3d31.510581681169608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039ff3e15a1b%3A0xd7fbd915500359a3!2sBrain%20Telecommunication%20Ltd.!5e0!3m2!1sen!2sus!4v1762853315990!5m2!1sen!2sus";

  return (
    <div className="w-full">
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-foreground mb-2">Find Us On The Map</h3>
        <p className="text-muted-foreground">Brain Telecommunication Ltd.</p>
      </div>
      
      <div className="w-full rounded-lg overflow-hidden border border-border shadow-sm">
        <iframe
          src={embedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brain Telecommunication Ltd. Location"
          className="w-full"
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          {LOCATION.address}
        </p>
      </div>
    </div>
  );
}