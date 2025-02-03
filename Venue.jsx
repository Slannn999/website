import { Calendar, MapPin } from "lucide-react";

const Venue = () => {
  return (
    <div className="bg-green-600 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Event Details</h2>
        <div className="grid grid-cols-2 m-6 gap-8 justify-between">
          {/* Date & Time */}
          <div className="flex items-center space-x-4">
            <Calendar className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Date & Time</h3>
              <p className="opacity-95">16th February, 2025</p>
              <p className="opacity-95">5:00 AM Onwards</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold">Location</h3>
              <p className="opacity-95">Sies GST, Nerul</p>
              <p className="opacity-95">Starting Point: GST Gate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
