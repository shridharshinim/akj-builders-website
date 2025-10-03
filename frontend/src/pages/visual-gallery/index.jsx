import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import GalleryFilter from './components/GalleryFilter';
import GalleryGrid from './components/GalleryGrid';
import ImageLightbox from './components/ImageLightbox';
import FeaturedCollection from './components/FeaturedCollection';
import GalleryStats from './components/GalleryStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const VisualGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('masonry');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for gallery images
  const galleryImages = [
    {
      id: 1,
      title: "AKJ Premium Residential Complex",
      description: "Contemporary design meets luxury living in this stunning residential project featuring clean lines, expansive facades, and premium finishes throughout.",
      src: "/1000170468.jpg",
      category: "Architectural Details",
      photographer: "AKJ Photography Team",
      date: "2024",
      location: "Hyderabad",
      tags: ["Modern", "Luxury", "Residential", "AKJ Groups"],
      technicalDetails: [
        { label: "Construction Type", value: "RCC & Modern" },
        { label: "Floor Area", value: "3,500 sq ft" },
        { label: "Completion", value: "2024" },
        { label: "Style", value: "Contemporary Modern" }
      ]
    },
    {
      id: 2,
      title: "AKJ Luxury Project Showcase",
      description: "Exquisite architectural detailing showcasing premium materials, sophisticated design, and AKJ Groups' commitment to excellence and innovation.",
      src: "/1000170471.jpg",
      category: "Project Showcase",
      photographer: "AKJ Groups Team",
      date: "2024",
      location: "Hyderabad",
      tags: ["Architecture", "Luxury", "AKJ Design", "Premium Construction"],
      technicalDetails: [
        { label: "Materials", value: "Premium Quality Materials" },
        { label: "Lighting", value: "LED Smart Systems" },
        { label: "Furniture", value: "Custom Designed" },
        { label: "Finish", value: "Hand-crafted Details" }
      ]
    },
    {
      id: 3,
      title: "AKJ Construction Excellence",
      description: "Behind-the-scenes glimpse of our meticulous construction process, highlighting the precision and attention to detail that defines AKJ Groups' building standards.",
      src: "/1000170487.jpg",
      category: "Construction Artistry",
      photographer: "AKJ Site Documentation Team",
      date: "2024",
      location: "Hyderabad",
      tags: ["Construction", "Process", "Quality", "AKJ Excellence"],
      technicalDetails: [
        { label: "Phase", value: "Structural Completion" },
        { label: "Timeline", value: "18 Months" },
        { label: "Quality Grade", value: "Premium A+" },
        { label: "Safety Standards", value: "International Certified" }
      ]
    },
    {
      id: 4,
      title: "AKJ Luxury Living Spaces",
      description: "Capturing the essence of luxury living where every space is designed to enhance daily experiences and create lasting memories for residents through AKJ Groups' vision.",
      src: "/1000170489.jpg",
      category: "Lifestyle Moments",
      photographer: "AKJ Lifestyle Photography",
      date: "2024",
      location: "Hyderabad",
      tags: ["Lifestyle", "Living", "Comfort", "AKJ Elegance"],
      technicalDetails: [
        { label: "Room Type", value: "Master Suite" },
        { label: "Area", value: "450 sq ft" },
        { label: "Features", value: "Smart Home Integration" },
        { label: "View", value: "City Skyline" }
      ]
    },
    {
      id: 5,
      title: "Architectural Detail Focus",
      description: "Close-up view of intricate architectural elements that showcase the precision and artistry involved in every AKJ construction project.",
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=1200&fit=crop",
      category: "Architectural Details",
      photographer: "Detail Specialist",
      date: "Aug 2024",
      location: "Chennai, Tamil Nadu",
      tags: ["Details", "Architecture", "Craftsmanship", "Precision"],
      technicalDetails: [
        { label: "Material", value: "Natural Stone" },
        { label: "Technique", value: "Hand-carved" },
        { label: "Finish", value: "Polished Premium" },
        { label: "Installation", value: "Precision Mounted" }
      ]
    },
    {
      id: 6,
      title: "Behind the Scenes Excellence",
      description: "Our dedicated team at work, demonstrating the collaborative effort and expertise that goes into every AKJ project from conception to completion.",
      src: "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop",
      category: "Behind-the-Scenes",
      photographer: "Team Documentation",
      date: "Jul 2024",
      location: "Hyderabad, Telangana",
      tags: ["Team", "Process", "Collaboration", "Excellence"],
      technicalDetails: [
        { label: "Team Size", value: "25 Specialists" },
        { label: "Project Phase", value: "Final Inspection" },
        { label: "Quality Check", value: "Multi-level Review" },
        { label: "Completion", value: "On Schedule" }
      ]
    },
    {
      id: 7,
      title: "Premium Interior Showcase",
      description: "Sophisticated interior design featuring custom furniture, premium textiles, and carefully curated art pieces that define luxury living.",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop",
      category: "Interior Spaces",
      photographer: "Interior Specialist",
      date: "Jun 2024",
      location: "Kolkata, West Bengal",
      tags: ["Interior", "Premium", "Custom", "Sophisticated"],
      technicalDetails: [
        { label: "Design Style", value: "Contemporary Luxury" },
        { label: "Color Palette", value: "Neutral Elegance" },
        { label: "Furniture", value: "Designer Collection" },
        { label: "Lighting", value: "Ambient Smart" }
      ]
    },
    {
      id: 8,
      title: "Lifestyle Luxury Experience",
      description: "Capturing the ultimate luxury lifestyle experience where premium amenities and thoughtful design create an unparalleled living environment.",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=1000&fit=crop",
      category: "Lifestyle Moments",
      photographer: "Experience Photographer",
      date: "May 2024",
      location: "Goa",
      tags: ["Luxury", "Experience", "Amenities", "Premium"],
      technicalDetails: [
        { label: "Amenity Type", value: "Infinity Pool" },
        { label: "Size", value: "Olympic Standard" },
        { label: "Features", value: "Temperature Controlled" },
        { label: "View", value: "Ocean Panoramic" }
      ]
    }
  ];

  // Categories with counts
  const categories = [
    { id: 'all', name: 'All Images', count: galleryImages?.length },
    { id: 'Architectural Details', name: 'Architectural Details', count: galleryImages?.filter(img => img?.category === 'Architectural Details')?.length },
    { id: 'Construction Artistry', name: 'Construction Artistry', count: galleryImages?.filter(img => img?.category === 'Construction Artistry')?.length },
    { id: 'Interior Spaces', name: 'Interior Spaces', count: galleryImages?.filter(img => img?.category === 'Interior Spaces')?.length },
    { id: 'Lifestyle Moments', name: 'Lifestyle Moments', count: galleryImages?.filter(img => img?.category === 'Lifestyle Moments')?.length },
    { id: 'Behind-the-Scenes', name: 'Behind-the-Scenes', count: galleryImages?.filter(img => img?.category === 'Behind-the-Scenes')?.length }
  ];

  // Featured collection
  const featuredCollection = {
    title: "Award-Winning Architectural Excellence",
    description: "Explore our most celebrated projects that have redefined luxury construction standards and earned industry recognition for innovative design and superior craftsmanship.",
    images: galleryImages?.slice(0, 4)
  };

  // Gallery statistics
  const galleryStats = [
    { icon: 'Camera', value: '500+', label: 'Professional Photos' },
    { icon: 'Building2', value: '50+', label: 'Projects Documented' },
    { icon: 'Award', value: '15+', label: 'Awards Captured' },
    { icon: 'Users', value: '25+', label: 'Expert Photographers' }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages?.filter(img => img?.category === activeCategory));
    }
  }, [activeCategory]);

  const handleImageClick = (image) => {
    const index = filteredImages?.findIndex(img => img?.id === image?.id);
    setCurrentImageIndex(index);
    setSelectedImage(image);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages?.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages?.[nextIndex]);
  };

  const handlePreviousImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages?.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages?.[prevIndex]);
  };

  const handleRequestHighRes = () => {
    // Mock high-resolution request
    console.log('High-resolution images requested');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-3 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-inter text-text-secondary">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Visual Gallery - AKJ Builders | Luxury Construction Photography</title>
        <meta name="description" content="Explore AKJ Builders' visual gallery showcasing architectural excellence, construction artistry, and luxury interior spaces through professional photography." />
        <meta name="keywords" content="AKJ Builders gallery, luxury construction photos, architectural photography, interior design showcase, construction artistry" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gold/5 via-background to-gold-warm/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6">
              <Icon name="Camera" size={16} className="text-gold" />
              <span className="font-inter font-medium text-gold text-sm">Visual Excellence</span>
            </div>
            
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-text-strong mb-6">
              Visual Gallery
            </h1>
            
            <p className="font-inter text-xl text-text-secondary leading-relaxed mb-8">
              Discover the artistry behind luxury construction through our curated collection of architectural photography, showcasing the precision, craftsmanship, and elegance that defines every AKJ project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleRequestHighRes}
                iconName="Download"
                iconPosition="left"
                className="bg-gradient-to-r from-gold to-gold-warm text-white shadow-gold hover:shadow-gold-lg"
              >
                Request High-Res Images
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Share2"
                iconPosition="left"
                className="border-gold text-gold hover:bg-gold hover:text-white"
              >
                Share Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GalleryStats stats={galleryStats} />
        </div>
      </section>
      {/* Featured Collection */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FeaturedCollection 
            collection={featuredCollection} 
            onImageClick={handleImageClick}
          />
        </div>
      </section>
      {/* Gallery Filter */}
      <GalleryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredImages?.length > 0 ? (
            <GalleryGrid
              images={filteredImages}
              viewMode={viewMode}
              onImageClick={handleImageClick}
            />
          ) : (
            <div className="text-center py-16">
              <Icon name="ImageOff" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="font-playfair font-bold text-xl text-text-strong mb-2">
                No Images Found
              </h3>
              <p className="font-inter text-text-secondary">
                Try selecting a different category to view more images.
              </p>
            </div>
          )}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gold/10 to-gold-warm/10">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="font-playfair font-bold text-3xl text-text-strong mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="font-inter text-text-secondary text-lg mb-8">
            Let AKJ Builders transform your vision into reality with our signature blend of architectural excellence and luxury craftsmanship.
          </p>
          <Button
            variant="default"
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-gradient-to-r from-gold to-gold-warm text-white shadow-gold hover:shadow-gold-lg"
            onClick={() => {
              const message = encodeURIComponent("Hello! I'm interested in learning more about AKJ Builders' luxury construction services after viewing your gallery. Could we schedule a consultation?");
              const phoneNumber = "+1234567890";
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
          >
            Start Your Project
          </Button>
        </div>
      </section>
      {/* Image Lightbox */}
      <ImageLightbox
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        onNext={handleNextImage}
        onPrevious={handlePreviousImage}
        totalImages={filteredImages?.length}
        currentIndex={currentImageIndex}
      />
      {/* Footer */}
      <footer className="bg-text-strong text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-warm rounded-lg flex items-center justify-center">
                <span className="text-white font-saira font-extrabold text-lg">AKJ</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">AKJ Builders</h3>
                <p className="font-montserrat text-xs text-white/60">Luxury Construction</p>
              </div>
            </div>
            <p className="font-inter text-white/80 mb-4">
              Defining new heights in modern construction and luxury living experiences.
            </p>
            <p className="font-inter text-white/60 text-sm">
              © {new Date()?.getFullYear()} AKJ Builders. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisualGallery;