import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [filters, setFilters] = useState({
    location: 'all',
    priceRange: 'all',
    style: 'all',
    status: 'all',
    sortBy: 'newest'
  });

  // Mock projects data
  const allProjects = [
    {
      id: 1,
      name: "AKJ Premium Residences",
      location: "Hyderabad",
      image: "/1000170468.jpg",
      startingPrice: 25000000,
      units: 120,
      area: "1,200 - 2,500 sq ft",
      status: "Ready to Move",
      completionDate: "2024",
      type: "Premium Apartments",
      style: "apartment",
      coordinates: { lat: 17.3850, lng: 78.4867 },
      description: `AKJ Premium Residences represents the pinnacle of luxury living in Hyderabad. This architectural masterpiece combines contemporary design with timeless elegance, showcasing AKJ Groups' commitment to precision, innovation, and elegance.\n\nEach residence is meticulously crafted with premium finishes, modern amenities, and spaces designed to enhance daily living experiences. The development features state-of-the-art facilities and sustainable design principles that set new standards for luxury construction and consultancy.`,
      features: [
        "Premium Italian marble flooring",
        "Smart home automation",
        "Private elevator access",
        "Panoramic city views",
        "Designer modular kitchen",
        "Master bedroom with walk-in closet"
      ],
      amenities: [
        "Infinity Swimming Pool",
        "State-of-the-art Gymnasium",
        "Rooftop Garden & Lounge",
        "Concierge Services",
        "Valet Parking",
        "Children\'s Play Area",
        "Multi-purpose Hall",
        "24/7 Security",
        "Power Backup",
        "High-speed Elevators"
      ],
      nearbyLandmarks: [
        { name: "Linking Road", distance: "0.5 km" },
        { name: "Bandra Railway Station", distance: "1.2 km" },
        { name: "Phoenix Mills", distance: "2.1 km" },
        { name: "Worli Sea Link", distance: "3.5 km" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      name: "AKJ Golden Heights",
      location: "Hyderabad",
      image: "/1000170471.jpg",
      startingPrice: 15000000,
      units: 85,
      area: "900 - 1,800 sq ft",
      status: "Under Construction",
      completionDate: "2025",
      type: "Luxury Apartments",
      style: "modern",
      coordinates: { lat: 17.3850, lng: 78.4867 },
      description: `AKJ Golden Heights stands as a testament to architectural excellence in Hyderabad. This luxury development seamlessly blends modern aesthetics with functional design, showcasing AKJ Groups' expertise in both construction and consultancy services.\n\nThe project features thoughtfully designed apartments with premium specifications, sustainable construction practices, and world-class amenities. Every detail reflects AKJ Groups' commitment to transforming visions into enduring realities that inspire confidence and elevate standards.`,
      features: [
        "Vitrified tile flooring",
        "Modular kitchen with granite countertops",
        "Premium bathroom fittings",
        "Balcony in every apartment",
        "Ample natural light",
        "Cross ventilation"
      ],
      amenities: [
        "Swimming Pool",
        "Fitness Center",
        "Landscaped Gardens",
        "Clubhouse",
        "Indoor Games Room",
        "Jogging Track",
        "Visitor Parking",
        "Intercom Facility",
        "Rainwater Harvesting",
        "Waste Management System"
      ],
      nearbyLandmarks: [
        { name: "Koregaon Park", distance: "0.2 km" },
        { name: "Osho Ashram", distance: "0.8 km" },
        { name: "Phoenix MarketCity", distance: "2.5 km" },
        { name: "Pune Airport", distance: "8.5 km" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Emerald Villas",
      location: "Whitefield, Bangalore",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      startingPrice: 75000000,
      units: 24,
      area: "3,500 - 5,000 sq ft",
      status: "Upcoming",
      completionDate: "Mar 2026",
      type: "Luxury Villas",
      style: "luxury",
      coordinates: { lat: 12.9698, lng: 77.7500 },
      description: `Emerald Villas represents the ultimate in luxury villa living in Bangalore's tech corridor. These exclusive residences are designed for discerning homeowners who demand the finest in architecture, design, and lifestyle amenities.\n\nSet amidst lush greenery, each villa is a private sanctuary featuring contemporary architecture, premium materials, and expansive living spaces. The development offers a perfect blend of privacy, luxury, and connectivity to the city's business districts.`,
      features: [
        "Private swimming pool",
        "Home theater room",
        "Wine cellar",
        "Private garden",
        "Servant quarters",
        "4-car garage"
      ],
      amenities: [
        "Gated Community",
        "24/7 Security",
        "Clubhouse with Spa",
        "Tennis Court",
        "Kids Play Area",
        "Jogging Track",
        "Landscaped Gardens",
        "Power Backup",
        "Water Treatment Plant",
        "Concierge Services"
      ],
      nearbyLandmarks: [
        { name: "ITPL", distance: "2.0 km" },
        { name: "Whitefield Railway Station", distance: "3.5 km" },
        { name: "Phoenix MarketCity", distance: "4.2 km" },
        { name: "Kempegowda Airport", distance: "35 km" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Metropolitan Towers",
      location: "Gurgaon, Delhi NCR",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      startingPrice: 45000000,
      units: 200,
      area: "1,500 - 3,200 sq ft",
      status: "Under Construction",
      completionDate: "Aug 2025",
      type: "Premium Apartments",
      style: "modern",
      coordinates: { lat: 28.4595, lng: 77.0266 },
      description: `Metropolitan Towers redefines luxury living in the heart of Gurgaon's business district. This iconic development features twin towers that rise majestically above the skyline, offering residents unparalleled views and world-class amenities.\n\nDesigned by renowned architects, the towers feature contemporary facades with floor-to-ceiling glass windows, premium interiors, and smart home technology. The development is strategically located with easy access to major business hubs and entertainment destinations.`,
      features: [
        "Floor-to-ceiling windows",
        "Premium wooden flooring",
        "Designer lighting",
        "Smart home integration",
        "Private balconies",
        "Walk-in wardrobes"
      ],
      amenities: [
        "Sky Lounge",
        "Infinity Pool",
        "Spa & Wellness Center",
        "Business Center",
        "Banquet Hall",
        "Kids Zone",
        "Retail Spaces",
        "Valet Parking",
        "Concierge Services",
        "High-speed Internet"
      ],
      nearbyLandmarks: [
        { name: "Cyber City", distance: "1.5 km" },
        { name: "DLF Mall", distance: "2.0 km" },
        { name: "Golf Course Road", distance: "0.5 km" },
        { name: "IGI Airport", distance: "12 km" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Royal Penthouses",
      location: "Jubilee Hills, Hyderabad",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
      startingPrice: 120000000,
      units: 12,
      area: "4,000 - 6,500 sq ft",
      status: "Completed",
      completionDate: "Ready to Move",
      type: "Luxury Penthouses",
      style: "penthouse",
      coordinates: { lat: 17.4239, lng: 78.4738 },
      description: `Royal Penthouses epitomizes ultra-luxury living in Hyderabad's most prestigious address. These exclusive sky mansions offer an unmatched lifestyle experience with panoramic city views, private terraces, and bespoke interiors.\n\nEach penthouse is a masterpiece of design and craftsmanship, featuring the finest materials, custom furnishings, and state-of-the-art technology. The development caters to the most discerning buyers who seek the ultimate in luxury and exclusivity.`,
      features: [
        "Private terrace garden",
        "Jacuzzi on terrace",
        "Home automation system",
        "Premium imported fixtures",
        "Custom interior design",
        "Private elevator lobby"
      ],
      amenities: [
        "Rooftop Infinity Pool",
        "Private Gym",
        "Wine Cellar",
        "Cigar Lounge",
        "Helipad Access",
        "Concierge Services",
        "Valet Parking",
        "24/7 Security",
        "Housekeeping Services",
        "Private Chef Service"
      ],
      nearbyLandmarks: [
        { name: "Jubilee Hills Club", distance: "0.3 km" },
        { name: "KBR National Park", distance: "1.5 km" },
        { name: "Banjara Hills", distance: "2.5 km" },
        { name: "Rajiv Gandhi Airport", distance: "25 km" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Tech Park Plaza",
      location: "Electronic City, Bangalore",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?w=800&h=600&fit=crop",
      startingPrice: 25000000,
      units: 150,
      area: "800 - 1,500 sq ft",
      status: "Under Construction",
      completionDate: "Nov 2025",
      type: "Commercial Spaces",
      style: "commercial",
      coordinates: { lat: 12.8456, lng: 77.6603 },
      description: `Tech Park Plaza is strategically designed for the modern business environment in Bangalore's IT hub. This commercial development offers premium office spaces with cutting-edge infrastructure and sustainable design features.\n\nThe plaza features flexible floor plans, high-speed connectivity, and world-class amenities that cater to the needs of growing businesses and established corporations alike.`,
      features: [
        "Flexible floor plans",
        "High-speed fiber connectivity",
        "Central air conditioning",
        "False ceiling with LED lighting",
        "Fire safety systems",
        "Dedicated parking spaces"
      ],
      amenities: [
        "Food Court",
        "Conference Facilities",
        "ATM Services",
        "Retail Outlets",
        "Visitor Parking",
        "24/7 Security",
        "Power Backup",
        "Maintenance Services",
        "Reception Services",
        "High-speed Elevators"
      ],
      nearbyLandmarks: [
        { name: "Electronic City Phase 1", distance: "0.5 km" },
        { name: "Infosys Campus", distance: "1.2 km" },
        { name: "Wipro Campus", distance: "2.0 km" },
        { name: "Bannerghatta Road", distance: "5.5 km" }
      ],
      gallery: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      name: "Oceanview Residences",
      location: "Marine Drive, Mumbai",
      image: "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?w=800&h=600&fit=crop",
      startingPrice: 85000000,
      units: 48,
      area: "2,200 - 4,000 sq ft",
      status: "Upcoming",
      completionDate: "Jun 2026",
      type: "Luxury Apartments",
      style: "luxury",
      coordinates: { lat: 18.9441, lng: 72.8262 },
      description: `Oceanview Residences offers an exclusive opportunity to own a piece of Mumbai's most iconic coastline. Located on the prestigious Marine Drive, these luxury apartments provide unobstructed views of the Arabian Sea and the city's glittering skyline.\n\nThe development features contemporary architecture with premium finishes, private balconies, and world-class amenities. Each residence is designed to maximize the stunning ocean views while providing the ultimate in comfort and luxury.`,
      features: [
        "Unobstructed sea views",
        "Premium marble flooring",
        "Floor-to-ceiling windows",
        "Private balconies",
        "Designer interiors",
        "Smart home features"
      ],
      amenities: [
        "Rooftop Pool with Sea View",
        "Spa & Wellness Center",
        "Fine Dining Restaurant",
        "Valet Parking",
        "Concierge Services",
        "Private Beach Access",
        "Fitness Center",
        "Library & Reading Room",
        "Children\'s Play Area",
        "24/7 Security"
      ],
      nearbyLandmarks: [
        { name: "Marine Drive Promenade", distance: "0.1 km" },
        { name: "Nariman Point", distance: "1.5 km" },
        { name: "Gateway of India", distance: "3.2 km" },
        { name: "Chhatrapati Shivaji Airport", distance: "18 km" }
      ],
      gallery: [
        "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/30/08/46/bedroom-1872196_1280.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 8,
      name: "Garden City Homes",
      location: "Koramangala, Bangalore",
      image: "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg?w=800&h=600&fit=crop",
      startingPrice: 18000000,
      units: 96,
      area: "1,100 - 2,000 sq ft",
      status: "Completed",
      completionDate: "Ready to Move",
      type: "Modern Apartments",
      style: "modern",
      coordinates: { lat: 12.9279, lng: 77.6271 },
      description: `Garden City Homes brings together the best of urban convenience and natural tranquility in Bangalore's vibrant Koramangala district. This thoughtfully designed development features lush landscaping, modern amenities, and well-planned apartments.\n\nThe project emphasizes sustainable living with rainwater harvesting, solar panels, and extensive green spaces. Each home is designed to provide maximum comfort while maintaining harmony with the environment.`,
      features: [
        "Eco-friendly design",
        "Natural ventilation",
        "Energy-efficient lighting",
        "Balcony gardens",
        "Premium fittings",
        "Ample storage space"
      ],
      amenities: [
        "Landscaped Gardens",
        "Swimming Pool",
        "Gymnasium",
        "Yoga Deck",
        "Children\'s Play Area",
        "Jogging Track",
        "Clubhouse",
        "Visitor Parking",
        "Intercom System",
        "Waste Management"
      ],
      nearbyLandmarks: [
        { name: "Forum Mall", distance: "0.8 km" },
        { name: "Koramangala Metro", distance: "1.2 km" },
        { name: "Indiranagar", distance: "2.5 km" },
        { name: "Electronic City", distance: "12 km" }
      ],
      gallery: [
        "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/30/08/46/bedroom-1872196_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 9,
      name: "Heritage Mansions",
      location: "Civil Lines, Delhi",
      image: "https://images.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg?w=800&h=600&fit=crop",
      startingPrice: 95000000,
      units: 16,
      area: "4,500 - 7,000 sq ft",
      status: "Under Construction",
      completionDate: "Apr 2026",
      type: "Heritage Villas",
      style: "luxury",
      coordinates: { lat: 28.6692, lng: 77.2265 },
      description: `Heritage Mansions represents a unique blend of classical architecture and modern luxury in Delhi's prestigious Civil Lines area. These exclusive mansions are designed for connoisseurs who appreciate timeless elegance and contemporary comfort.\n\nEach mansion features traditional architectural elements combined with modern amenities, private gardens, and premium finishes. The development offers an exclusive lifestyle in one of Delhi's most sought-after neighborhoods.`,
      features: [
        "Classical architecture",
        "Private gardens",
        "Heritage-inspired interiors",
        "Premium imported materials",
        "Custom millwork",
        "Private courtyards"
      ],
      amenities: [
        "Private Club",
        "Tennis Court",
        "Swimming Pool",
        "Spa Services",
        "Concierge",
        "Valet Parking",
        "Security Services",
        "Landscaped Gardens",
        "Event Spaces",
        "Guest Suites"
      ],
      nearbyLandmarks: [
        { name: "Red Fort", distance: "3.5 km" },
        { name: "Chandni Chowk", distance: "4.2 km" },
        { name: "Delhi University", distance: "2.0 km" },
        { name: "IGI Airport", distance: "22 km" }
      ],
      gallery: [
        "https://images.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/30/08/46/bedroom-1872196_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 10,
      name: "Infinity Towers",
      location: "Hitech City, Hyderabad",
      image: "https://images.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg?w=800&h=600&fit=crop",
      startingPrice: 28000000,
      units: 180,
      area: "1,000 - 2,200 sq ft",
      status: "Upcoming",
      completionDate: "Sep 2026",
      type: "Tech Apartments",
      style: "modern",
      coordinates: { lat: 17.4435, lng: 78.3772 },
      description: `Infinity Towers is designed for the tech-savvy generation in Hyderabad's IT corridor. This futuristic development features smart apartments with integrated technology, sustainable design, and modern amenities tailored for urban professionals.\n\nThe towers offer a perfect work-life balance with co-working spaces, high-speed connectivity, and wellness facilities. Each apartment is equipped with smart home technology and energy-efficient systems.`,
      features: [
        "Smart home automation",
        "High-speed fiber internet",
        "Energy-efficient appliances",
        "Modular furniture options",
        "Balcony workspaces",
        "Premium tech infrastructure"
      ],
      amenities: [
        "Co-working Spaces",
        "Tech Lounge",
        "Fitness Center",
        "Rooftop Cafe",
        "Gaming Zone",
        "Electric Vehicle Charging",
        "Bike Storage",
        "Package Lockers",
        "24/7 Wi-Fi",
        "Smart Security System"
      ],
      nearbyLandmarks: [
        { name: "HITEC City", distance: "0.5 km" },
        { name: "Cyber Towers", distance: "1.0 km" },
        { name: "Inorbit Mall", distance: "2.5 km" },
        { name: "Rajiv Gandhi Airport", distance: "28 km" }
      ],
      gallery: [
        "https://images.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/30/08/46/bedroom-1872196_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg?w=800&h=600&fit=crop"
      ]
    }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setVisibleProjects(9); // Reset visible projects when filter changes
  };

  const handleClearFilters = () => {
    setFilters({
      location: 'all',
      priceRange: 'all',
      style: 'all',
      status: 'all',
      sortBy: 'newest'
    });
    setVisibleProjects(9);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects?.length));
  };

  // Filter and sort projects
  const filteredProjects = allProjects?.filter(project => {
    const matchesLocation = filters?.location === 'all' || 
      project?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase());
    
    const matchesPrice = filters?.priceRange === 'all' || (() => {
      const price = project?.startingPrice;
      switch (filters?.priceRange) {
        case '0-5000000': return price < 5000000;
        case '5000000-10000000': return price >= 5000000 && price < 10000000;
        case '10000000-25000000': return price >= 10000000 && price < 25000000;
        case '25000000-50000000': return price >= 25000000 && price < 50000000;
        case '50000000+': return price >= 50000000;
        default: return true;
      }
    })();
    
    const matchesStyle = filters?.style === 'all' || project?.style === filters?.style;
    
    const matchesStatus = filters?.status === 'all' || (() => {
      switch (filters?.status) {
        case 'completed': return project?.status === 'Completed';
        case 'under-construction': return project?.status === 'Under Construction';
        case 'upcoming': return project?.status === 'Upcoming';
        default: return true;
      }
    })();

    return matchesLocation && matchesPrice && matchesStyle && matchesStatus;
  })?.sort((a, b) => {
    switch (filters?.sortBy) {
      case 'price-low': return a?.startingPrice - b?.startingPrice;
      case 'price-high': return b?.startingPrice - a?.startingPrice;
      case 'completion': return new Date(a.completionDate) - new Date(b.completionDate);
      case 'popular': return b?.units - a?.units;
      default: return b?.id - a?.id; // newest first
    }
  });

  const displayedProjects = filteredProjects?.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects?.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Luxury Projects Gallery - AKJ Builders | Premium Real Estate Portfolio</title>
        <meta name="description" content="Explore AKJ Builders' exclusive portfolio of luxury residential and commercial projects across Mumbai, Pune, Bangalore, Delhi, and Hyderabad. Premium apartments, villas, and penthouses." />
        <meta name="keywords" content="luxury projects, premium apartments, luxury villas, penthouses, commercial spaces, Mumbai real estate, Pune properties, Bangalore homes, Delhi luxury, Hyderabad projects" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-text-strong mb-6">
                Our <span className="text-gradient-gold">Luxury</span> Portfolio
              </h1>
              <p className="font-inter text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover our collection of architectural masterpieces across India's premier locations. 
                Each project represents our commitment to excellence, innovation, and luxury living.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Filter Bar */}
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              projectCount={filteredProjects?.length}
            />

            {/* Projects Grid */}
            {displayedProjects?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {displayedProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onClick={handleProjectClick}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMoreProjects && (
                  <div className="text-center">
                    <Button
                      variant="outline"
                      onClick={handleLoadMore}
                      iconName="ChevronDown"
                      iconPosition="right"
                      className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-3"
                    >
                      Load More Projects
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <Icon name="Search" size={64} className="text-text-secondary mx-auto mb-6" />
                <h3 className="font-playfair font-bold text-2xl text-text-strong mb-4">
                  No Projects Found
                </h3>
                <p className="text-text-secondary mb-8 max-w-md mx-auto">
                  We couldn't find any projects matching your current filters. 
                  Try adjusting your search criteria or clear all filters.
                </p>
                <Button
                  variant="default"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                  className="bg-gradient-to-r from-gold to-gold-warm hover:from-gold-deep hover:to-gold text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-gold to-gold-warm py-16">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="font-inter text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you discover the perfect luxury property 
              that matches your lifestyle and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                onClick={() => {
                  const message = encodeURIComponent("Hi! I'm interested in exploring AKJ Builders' luxury projects. Could you help me find the perfect property?");
                  const phoneNumber = "+1234567890";
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-gold hover:bg-white/90 shadow-luxury"
              >
                WhatsApp Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/contact-hub'}
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-gold"
              >
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsGallery;