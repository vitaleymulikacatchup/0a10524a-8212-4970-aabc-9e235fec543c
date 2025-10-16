"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { id: "pizzeria-logo", url: "https://images.pexels.com/photos/5378532/pexels-photo-5378532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a pizza delivery car sign during daytime." },
  { id: "feature-pizza", url: "https://images.pexels.com/photos/34304481/pexels-photo-34304481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "pizza feature - Photo by Alexandre  Moreira" },
  { id: "contact-pizza", url: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Pizzeria"
          logoSrc={assetMap.find(a => a.id === "pizzeria-logo")?.url}
          buttonText="Order Now"
          buttonVariant="text-stagger"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "feature" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Pizzeria"
            description="Taste the best pizza in town made with fresh ingredients."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "See Menu", href: "menu" },
              { text: "Order Now", href: "order" }
            ]}
            className="bg-rose-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our passion for pizza drives us to create the best flavors with quality ingredients. Join us in our culinary journey!"
            buttons={[
              { text: "Discover More", href: "about" }
            ]}
            className="bg-rose-100"
            titleClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Authentic Recipes", description: "Traditional methods combined with the finest ingredients.", icon: "Sparkles" },
              { title: "Fresh Ingredients", description: "We only use fresh, locally sourced ingredients.", icon: "Leaf" }
            ]}
            className="bg-rose-100"
            textBoxTitleClassName="text-gray-800"
            textBoxDescriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Get in Touch"
            title="Contact Us"
            description="We love to hear from you. Reach out to us for any questions or feedback."
            imageSrc={assetMap.find(a => a.id === "contact-pizza")?.url}
            className="bg-rose-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Menu", items: [
                { label: "Pizza", href: "menu/pizza" },
                { label: "Pasta", href: "menu/pasta" }
              ]},
              { title: "Company", items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" }
              ]}
            ]}
            logoSrc={assetMap.find(a => a.id === "pizzeria-logo")?.url}
            copyrightText="© 2025 | Pizzeria"
            className="bg-rose-100 text-gray-800"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
