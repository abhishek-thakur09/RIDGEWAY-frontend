const Event = [
    {
      "site": "Ridgeway Site",
      "date": "2026-04-16",
      "shift": "Night",
      "events": [
        {
          "id": 1,
          "time": "01:12",
          "type": "fence_alert",
          "title": "Fence motion detected",
          "location": "Gate 3",
          "zone": "Perimeter",
          "severity": "medium",
          "source": "Sensor",
          "details": "Short motion spike detected on outer fence line.",
          "coordinates": [31.115, 77.173]
        },
        {
          "id": 2,
          "time": "01:18",
          "type": "weather",
          "title": "Wind gust recorded",
          "location": "Gate 3",
          "zone": "Perimeter",
          "severity": "low",
          "source": "Weather Station",
          "details": "Strong wind gust may explain fence movement.",
          "coordinates": [31.118, 77.183]
        },
         {
          "id": 3,
          "time": "01:18",
          "type": "weather",
          "title": "Wind gust recorded",
          "location": "Gate 3",
          "zone": "Perimeter",
          "severity": "low",
          "source": "Weather Station",
          "details": "Strong wind gust may explain fence movement.",
          "coordinates": [31.118, 77.183]
        },
        {
          "id": 4,
          "time": "01:26",
          "type": "vehicle_path",
          "title": "Unauthorized vehicle route",
          "location": "Block C",
          "zone": "Restricted Yard",
          "severity": "high",
          "source": "GPS Tracker",
          "details": "Vehicle entered restricted yard for 4 minutes.",
          "coordinates": [31.106, 77.176]
        },
        {
          "id": 5,
          "time": "02:26",
          "type": "vehicle_accident",
          "title": "vehicle Accident",
          "location": "Block F",
          "zone": "Accident",
          "severity": "high",
          "source": "GPS Tracker",
          "details": "Vehicle collide with a truck.",
          "coordinates": [31.124, 77.176]
        },
        {
          "id": 6,
          "time": "01:32",
          "type": "badge_swipe",
          "title": "Failed badge swipe",
          "location": "Access Point 2",
          "zone": "Controlled Access",
          "severity": "medium",
          "source": "Access Control",
          "details": "Badge rejected for employee ID E-142.",
          "coordinates": [31.108, 77.171]
        },
        {
          "id": 7,
          "time": "01:34",
          "type": "badge_swipe",
          "title": "Failed badge swipe",
          "location": "Access Point 2",
          "zone": "Controlled Access",
          "severity": "medium",
          "source": "Access Control",
          "details": "Second failed attempt for employee ID E-142.",
          "coordinates": [31.108, 77.171]
        },
        {
          "id": 8,
          "time": "01:36",
          "type": "badge_swipe",
          "title": "Failed badge swipe",
          "location": "Access Point 2",
          "zone": "Controlled Access",
          "severity": "medium",
          "source": "Access Control",
          "details": "Third failed attempt for employee ID E-142.",
          "coordinates": [31.118, 77.181]
        },
        {
          "id": 9,
          "time": "01:48",
          "type": "drone_patrol",
          "title": "Drone route crossed Block C",
          "location": "Block C",
          "zone": "Restricted Yard",
          "severity": "info",
          "source": "Drone System",
          "details": "Thermal sweep found no active intrusion.",
          "coordinates": [31.120, 77.176]
        },
        {
          "id": 10,
          "time": "02:10",
          "type": "note",
          "title": "Supervisor note",
          "location": "Ops Room",
          "zone": "Internal",
          "severity": "info",
          "source": "Manual Entry",
          "details": "Please check Block C before leadership asks.",
          "coordinates": [31.105, 77.174]
        }
      ]
    }
]


export default Event;
