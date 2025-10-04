import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Environment variables
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://phoeelectric.com';
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const gscVerificationCode = process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PHOE Electricals Trading LLC",
    template: "%s | PHOE Electricals Trading LLC"
  },
  description: "Leading supplier of electrical, automation, and electronics products in Dubai, UAE. Schneider electric supplier & Distributor in Dubai & Saudi Arabia. Quality solutions for industrial and commercial sectors.",
  keywords: ["electrical supplies", "automation", "electronics", "Dubai", "UAE", "industrial", "commercial", "PHOE Electricals", "Schneider electric supplier", "Schneider distributor Dubai", "Schneider distributor Saudi Arabia"],
  authors: [{ name: "PHOE Electricals Trading LLC" }],
  creator: "PHOE Electricals Trading LLC",
  publisher: "PHOE Electricals Trading LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "PHOE Electricals Trading LLC",
    description: "Leading supplier of electrical, automation, and electronics products in Dubai, UAE. Schneider electric supplier & Distributor in Dubai & Saudi Arabia. Quality solutions for industrial and commercial sectors.",
    siteName: "PHOE Electricals Trading LLC",
    images: [
      {
        url: `${siteUrl}/PhoeLogo.webp`,
        width: 1200,
        height: 630,
        alt: "PHOE Electricals Trading LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHOE Electricals Trading LLC",
    description: "Leading supplier of electrical, automation, and electronics products in Dubai, UAE. Schneider electric supplier & Distributor in Dubai & Saudi Arabia.",
    images: [`${siteUrl}/PhoeLogo.webp`],
    creator: "@phoeelectricals",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: gscVerificationCode,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Setup - Next.js automatically handles favicon files in app directory */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#019999" />
        <meta name="msapplication-TileColor" content="#019999" />
        
        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/banner-video.mp4" as="video" type="video/mp4" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PHOE Electricals Trading LLC",
              "alternateName": "PHOE Electricals",
              "url": siteUrl,
              "logo": `${siteUrl}/PhoeLogo.webp`,
              "description": "Leading supplier of electrical, automation, and electronics products in Dubai, UAE. Schneider electric supplier & Distributor in Dubai & Saudi Arabia. Quality solutions for industrial and commercial sectors.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressRegion": "Dubai",
                "addressLocality": "Dubai"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-58-833-9415",
                "contactType": "customer service",
                "areaServed": "AE",
                "availableLanguage": "English"
              },
              "hasMap": "https://maps.google.com/?q=PHOE+Electricals+Trading+LLC+Dubai",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2048",
                "longitude": "55.2708"
              },
              "sameAs": [
                "https://www.linkedin.com/company/phoe-electricals",
                "https://www.facebook.com/phoeelectricals",
                "https://www.instagram.com/phoe_electric/"
              ],
              "foundingDate": "2020",
              "industry": "Electrical Equipment Manufacturing",
              "numberOfEmployees": "10-50",
              "areaServed": {
                "@type": "Country",
                "name": "United Arab Emirates"
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteUrl}#business`,
              "name": "PHOE Electricals Trading LLC",
              "alternateName": "PHOE Electricals",
              "image": `${siteUrl}/PhoeLogo.webp`,
              "logo": `${siteUrl}/PhoeLogo.webp`,
              "description": "Leading supplier of electrical, automation, and electronics products in Dubai, UAE. Schneider electric supplier & Distributor in Dubai & Saudi Arabia. Quality solutions for industrial and commercial sectors with brands like Schneider Electric, Siemens, ABB, and more.",
              "url": siteUrl,
              "telephone": "+971-58-833-9415",
              "email": "info@phoeelectric.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubai, UAE",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2048",
                "longitude": "55.2708"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "AED, USD",
              "areaServed": {
                "@type": "Country",
                "name": "United Arab Emirates"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.2048",
                  "longitude": "55.2708"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electrical and Automation Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Circuit Breakers and Switches",
                      "description": "MCB, MCCB, ACB, RCCB & RCBO, Motor Protection Circuit Breakers",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "15"
                      },
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "AED",
                        "priceValidUntil": "2025-12-31",
                        "seller": {
                          "@type": "Organization",
                          "name": "PHOE Electricals Trading LLC"
                        }
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Contactor Relay & Protection Relays",
                      "description": "TeSys series contactors and comprehensive relay protection systems",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.7",
                        "reviewCount": "12"
                      },
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "AED",
                        "priceValidUntil": "2025-12-31",
                        "seller": {
                          "@type": "Organization",
                          "name": "PHOE Electricals Trading LLC"
                        }
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Automation Solutions",
                      "description": "AC Drives (VFD), PLC & HMI systems, Temperature Controllers",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "18"
                      },
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "AED",
                        "priceValidUntil": "2025-12-31",
                        "seller": {
                          "@type": "Organization",
                          "name": "PHOE Electricals Trading LLC"
                        }
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Power & Distribution",
                      "description": "Power & Network Cables, Isolators, Switches & Sockets",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.6",
                        "reviewCount": "10"
                      },
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "AED",
                        "priceValidUntil": "2025-12-31",
                        "seller": {
                          "@type": "Organization",
                          "name": "PHOE Electricals Trading LLC"
                        }
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Monitoring & Instrumentation",
                      "description": "Digital Panel Meters, Energy Meters, Power Factor Controllers",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "14"
                      },
                      "offers": {
                        "@type": "Offer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "AED",
                        "priceValidUntil": "2025-12-31",
                        "seller": {
                          "@type": "Organization",
                          "name": "PHOE Electricals Trading LLC"
                        }
                      }
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/phoe-electricals",
                "https://www.facebook.com/phoeelectricals",
                "https://www.instagram.com/phoe_electric/"
              ],
              "foundingDate": "2020",
              "industry": "Electrical Equipment Manufacturing",
              "numberOfEmployees": "10-50",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "25"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
