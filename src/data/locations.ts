import { IMAGES } from './business';

export interface LocationProjectCase {
  title: string;
  neighborhood: string;
  issue: string;
  remediation: string;
  outcome: string;
}

export interface LocationDetail {
  slug: string;
  city: string;
  state: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  localContext: string;
  neighborhoods: string[];
  propertyLandscape: string;
  projectCase: LocationProjectCase;
  commonConcerns: string[];
  image2: string;
  image2Alt: string;
  faqs: { question: string; answer: string }[];
}

export const locations: LocationDetail[] = [
  {
    slug: 'indianapolis-in',
    city: 'Indianapolis',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Indianapolis, Indiana',
    metaTitle: 'Mold Inspection in Indianapolis, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Certified mold inspection in Indianapolis, IN. Non-invasive moisture mapping, thermal imaging, and IICRC S520 remediation. Located at 1302 N Main St. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'Aerial view of the Indianapolis skyline at sunset, representing our primary service headquarters for professional mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts is headquartered directly in Indianapolis, Indiana at 1302 N Main St. We provide property owners throughout Marion County and central Indiana with rigorous, scientifically backed mold inspection, moisture mapping, and remediation services. Rather than applying surface-level temporary sprays, our local team identifies the root cause of moisture intrusion and safely eliminates microbial contamination following strict industry standards.',
    localContext:
      'Indianapolis experiences extreme seasonal weather swings, from muggy summer humidity with 80%+ dew points to winter freeze-thaw cycles and spring storms. These conditions heavily impact local residential and commercial building envelopes. Aging municipal stormwater lines in historic urban districts can cause sewer backups and hydrostatic pressure around basements, while high summer humidity frequently condenses on cool crawl space surfaces and sub-grade foundations across Marion County.',
    neighborhoods: [
      'Downtown & Mass Ave Corridor',
      'Broad Ripple & Midtown',
      'Meridian-Kessler & Butler-Tarkington',
      'Fountain Square & Fletcher Place',
      'Speedway & West Indianapolis',
      'Pike Township & Northwest Suburbs',
      'Irvington & East Historic District',
      'Washington Township Neighborhoods',
    ],
    propertyLandscape:
      'Indianapolis features an architectural blend ranging from 1900s limestone and fieldstone basements in historic core neighborhoods to 1950s slab-on-grade ranches and contemporary multi-story infill construction. Historic foundations frequently suffer from porous masonry weeping, while suburban properties often contend with high water tables and crawlspace humidity condensation.',
    projectCase: {
      title: 'Meridian-Kessler Historic Basement Masonry & Joist Remediation',
      neighborhood: 'Meridian-Kessler / Midtown Indianapolis',
      issue:
        'Continuous spring rains saturated the soil around a 1928 brick-and-limestone foundation, causing moisture migration through porous mortar. Cladosporium mold colonized the perimeter floor joists, subflooring, and wooden shelving, spreading a heavy musty odor into the first-floor living space.',
      remediation:
        'Our crew established negative pressure containment with HEPA air filtration to prevent spores from circulating upstairs. We performed precision HEPA vacuuming and hand wire-brushing of all exposed joists, followed by an application of EPA-registered botanical antimicrobial wash. We deployed commercial LGR dehumidifiers to pull moisture content below 14% WME.',
      outcome:
        'Eliminated all visible mold colonies and persistent musty odors. Timber moisture was stabilized, and the homeowner was provided a detailed moisture log and external masonry drainage recommendations.',
    },
    commonConcerns: [
      'Basement foundation seepage and mortar weeping in historic Indianapolis neighborhoods',
      'Crawl space moisture condensation and microbial growth during humid Indiana summers',
      'Mold development behind drywall following residential plumbing or appliance leaks',
      'High indoor relative humidity in older homes with outdated HVAC or ventilation systems',
      'Commercial office, retail, and warehouse mold contamination in Marion County flex spaces',
      'Post-flooding and stormwater backup remediation for low-lying Indianapolis properties',
    ],
    image2: IMAGES.indianapolisCanal,
    image2Alt:
      'Scenic view of the Indianapolis canal with city skyline, illustrating our central Marion County service area.',
    faqs: [
      {
        question: 'Why do older Indianapolis basements frequently develop mold along foundation sill plates?',
        answer:
          'Older homes in neighborhoods like Meridian-Kessler, Irvington, and Broad Ripple often have porous limestone, brick, or hollow concrete block foundations. When surrounding soils become saturated during spring rains, moisture wicks upward into the wooden sill plate and rim joists. Because these subterranean areas are cool and poorly ventilated, mold readily develops on organic wood surfaces.',
      },
      {
        question: 'What immediate steps should Indianapolis property owners take after a water leak?',
        answer:
          'First, shut off the primary water source immediately. Extract standing water and begin mechanical air movement within the first 24 to 48 hours. If drywall, carpeting, or insulation remains saturated past 48 hours in warm temperatures, microbial amplification begins. Contact our team at 463-220-1284 for professional moisture mapping before mold spreads inside wall cavities.',
      },
      {
        question: 'Are your mold remediation protocols safe for pets and children in Indianapolis homes?',
        answer:
          'Yes. We prioritize occupant health by isolating the work zone with heavy-duty poly containment barriers and commercial HEPA negative air scrubbers. Spores and particulates are exhausted outside, preventing cross-contamination to unaffected rooms. Our antimicrobial solutions are EPA-registered and non-hazardous when applied according to strict safety protocols.',
      },
      {
        question: 'Can you assess commercial and multi-family buildings in Marion County?',
        answer:
          'Yes. We regularly inspect and remediate commercial facilities, retail properties, multi-tenant apartments, and office complexes throughout Indianapolis and Marion County. We customize containment plans to minimize operational disruption.',
      },
    ],
  },
  {
    slug: 'carmel-in',
    city: 'Carmel',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Carmel, Indiana',
    metaTitle: 'Mold Inspection in Carmel, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Comprehensive mold inspection, finished basement assessment, and remediation in Carmel, IN. Tailored solutions for Hamilton County properties. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'Carmel community in Hamilton County, representing our specialized mold remediation service territory.',
    intro:
      'Indy Car Racing Mold Removal Experts delivers high-standard mold inspection and remediation services to homeowners and commercial property managers in Carmel, Indiana. Located directly north of Indianapolis in Hamilton County, Carmel features some of the region’s premier custom homes and commercial developments. We provide the meticulous care, advanced moisture diagnostics, and non-destructive inspection techniques necessary to protect these valuable investments.',
    localContext:
      'Carmel sits on dense glacial till clay soil that expands when saturated and drains very slowly. This soil creates substantial hydrostatic pressure against basement foundation walls. Additionally, Carmel’s proximity to the White River and Cool Creek corridors results in elevated local water tables. Heavy spring precipitation and sudden summer downpours regularly strain sump pumps and basement waterproofing systems across the city.',
    neighborhoods: [
      'Arts & Design District',
      'Village of WestClay',
      'Clay Terrace & North Meridian Corridor',
      'Brookshire & Cool Creek North',
      'Mohawk Hills & Central Carmel',
      'Crooked Stick & Woodland Springs',
      'Prairie View & River Road Corridor',
    ],
    propertyLandscape:
      'The vast majority of Carmel single-family residences feature extensive, high-end finished basements with home theaters, guest suites, drywall partitioning, and sub-grade carpeting. When minor seepage or foundation condensation occurs behind finished drywall, mold can flourish invisibly within insulation cavities for months before surface discoloration or musty odors become apparent.',
    projectCase: {
      title: 'Village of WestClay Finished Basement Baseboard & Drywall Restoration',
      neighborhood: 'Village of WestClay, Carmel',
      issue:
        'A primary sump pump failure during a severe storm allowed 1.5 inches of water to back up across a finished daylight basement before the backup pump engaged. Although water was extracted quickly, moisture wicked 14 inches up the interior drywall and baseboards, creating hidden Aspergillus colonies on paper backings.',
      remediation:
        'We erected zippered airlock containment zones and maintained negative pressure with commercial HEPA scrubbers. Our crew executed a clean 2-foot flood-cut along affected perimeter walls, removed saturated fiberglass insulation, HEPA-vacuumed the framing studs, treated all wood with botanical antimicrobial wash, and ran desiccant dehumidifiers for 72 hours.',
      outcome:
        'Living spaces upstairs remained 100% uncontaminated. Structural wall plates achieved target dry standards (<12% moisture content), fully prepared for seamless drywall reconstruction.',
    },
    commonConcerns: [
      'Finished basement moisture infiltration behind custom trim, cabinetry, and baseboards',
      'Sump pump overflows and backup failures during severe Hamilton County storm events',
      'Condensation and mold growth on cold foundation walls behind fiberglass batt insulation',
      'Attic ventilation imbalance causing moisture buildup along northern roof decking',
      'High humidity around indoor recreation, pool rooms, and sub-grade home theaters',
    ],
    image2: IMAGES.inspection,
    image2Alt:
      'Professional inspector examining basement drywall and baseboard for moisture infiltration in Carmel, IN.',
    faqs: [
      {
        question: 'Why are finished basements in Carmel particularly vulnerable to hidden mold?',
        answer:
          'Finished basements conceal concrete foundation walls behind framing, insulation, and drywall. Because Hamilton County clay soil exerts heavy moisture pressure from outside, small moisture vapor emissions easily condense inside wall cavities. Mold can feed on paper drywall backing and wooden baseboards without visible exterior signs until musty odors appear.',
      },
      {
        question: 'How do you detect mold in Carmel homes without tearing down walls?',
        answer:
          'We use non-invasive moisture meters, thermal imaging infrared cameras, and precision hygrometers to map temperature differentials and moisture anomalies within walls. If elevated moisture is detected, we can inspect cavity spaces through minimal, discrete micro-probes before recommending any structural access.',
      },
      {
        question: 'Does homeowner insurance typically cover mold remediation in Carmel?',
        answer:
          'Coverage typically depends on whether the mold resulted from a sudden, accidental covered peril (such as a burst pipe) versus long-term deferred maintenance or seepage. We provide comprehensive, itemized photographic logs and moisture reports that insurance adjusters require for claim reviews.',
      },
      {
        question: 'How fast can Indy Car Racing Mold Removal Experts arrive for a Carmel assessment?',
        answer:
          'Because Carmel is directly adjacent to our primary service corridor, we can frequently arrange same-day or next-day on-site assessments. Call 463-220-1284 immediately if you notice active dampness or strong musty odors.',
      },
    ],
  },
  {
    slug: 'fishers-in',
    city: 'Fishers',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Fishers, Indiana',
    metaTitle: 'Mold Inspection in Fishers, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Certified mold inspection, crawl space moisture mitigation, and remediation in Fishers, IN. Serving Geist, Saxony, and Nickel Plate areas. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'Scenic view of central Indiana representing our Fishers and Geist mold remediation coverage area.',
    intro:
      'Indy Car Racing Mold Removal Experts provides prompt, professional mold assessment and remediation services to homeowners and businesses in Fishers, Indiana. As one of the most vibrant, fast-growing communities in Hamilton County, Fishers boasts diverse modern neighborhoods from Geist Reservoir waterfront estates to master-planned subdivisions in Saxony and the Nickel Plate District. We bring advanced moisture detection and safe remediation to every property.',
    localContext:
      'Fishers properties face unique environmental moisture factors. Properties near Geist Reservoir experience elevated ambient humidity and fluctuating ground water tables. Meanwhile, newer subdivisions constructed over former farmland feature tight building envelopes and retention ponds that keep local soil moisture high. When relative humidity in crawl spaces or attics exceeds 60%, mold spores naturally germinate on framing timber.',
    neighborhoods: [
      'Geist Reservoir Waterfront & Estates',
      'Nickel Plate Arts District',
      'Saxony Master-Planned Community',
      'Sunblest Farms & Heritage Meadows',
      'Britton Falls Active Adult Community',
      'Brooks Park & Cumberland Road Corridor',
      'Conner Prairie / Allisonville Road Area',
    ],
    propertyLandscape:
      'Homes in Fishers predominantly date from the 1990s through recent new construction. Many feature closed crawl spaces or full poured-concrete basements. In modern energy-efficient homes, tightly sealed building envelopes can inadvertently trap indoor humidity from cooking, showers, and laundry if mechanical ventilation is inadequate, creating surface micro-blooms in closets and corners.',
    projectCase: {
      title: 'Geist Area Crawl Space Vapor Barrier Failure & Joist Remediation',
      neighborhood: 'Geist Reservoir Area, Fishers',
      issue:
        'A damaged, unsealed 6-mil poly vapor barrier in a Geist waterfront crawlspace allowed damp ground vapor to saturate the subfloor structure during July’s 85% outdoor humidity. Extensive white fungal colonies (Penicillium/Aspergillus) developed on floor joists, causing musty odors in first-floor bedrooms.',
      remediation:
        'Technicians wore full PPE and established negative air pressure to avoid sending spores upstairs. We removed fallen fiberglass batt insulation, HEPA-vacuumed all floor joists, applied an EPA-registered antimicrobial wash, and installed an airtight, puncture-resistant 20-mil vapor barrier across the ground and foundation piers.',
      outcome:
        'Subfloor moisture content dropped from 22% down to 11.5% WME. Indoor musty odors were completely eradicated, and crawlspace relative humidity was permanently stabilized.',
    },
    commonConcerns: [
      'Crawl space moisture saturation, standing water, and joist mold near Geist Reservoir',
      'Mold growth on HVAC flex ductwork and plenums caused by condensation in unconditioned attics',
      'New construction moisture entrapment behind vapor barriers in energy-efficient Fishers homes',
      'Basement drywall mold resulting from sudden sump pump failures during heavy summer storms',
      'Attic roof decking mold caused by dislodged bathroom exhaust fan venting',
    ],
    image2: IMAGES.cornerInspection,
    image2Alt:
      'Certified technician examining corner drywall and floor joints for mold spores in a Fishers home.',
    faqs: [
      {
        question: 'Can newer homes in Fishers develop mold problems?',
        answer:
          'Yes. Modern homes are built with tight building envelopes to conserve energy. If mechanical ventilation is insufficient, indoor humidity cannot escape, creating condensation on windows, exterior corners, and crawlspace framing. Construction-era moisture trapped in framing timbers can also spur mold growth once heating systems activate.',
      },
      {
        question: 'How does living near Geist Reservoir increase mold risks?',
        answer:
          'Reservoir shoreline properties experience higher ambient relative humidity and high ground water tables. Unencapsulated crawl spaces draw this dampness upward via the stack effect, carrying microscopic mold spores into home living areas through floor penetrations and ductwork gaps.',
      },
      {
        question: 'What is the difference between air testing and visual mold inspection in Fishers?',
        answer:
          'A visual inspection identifies active moisture sources, water stains, structural damage, and visible mold colonies using moisture meters and thermal imaging. Air sampling measures airborne spore counts and species compared to an outdoor baseline control. We explain when air testing is genuinely needed and avoid unnecessary lab tests.',
      },
      {
        question: 'How do you prevent mold spores from spreading through my Fishers house during cleanup?',
        answer:
          'We seal off the work zone using 6-mil polyethylene plastic airlock containment and run HEPA-filtered negative air machines that vent directly outdoors. This creates negative pressure so air only flows inward into the contained area, keeping the rest of your home completely clean.',
      },
    ],
  },
  {
    slug: 'noblesville-in',
    city: 'Noblesville',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Noblesville, Indiana',
    metaTitle: 'Mold Inspection in Noblesville, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Expert mold inspection, assessment, and remediation in Noblesville, IN. Serving historic Old Town, Morse Lake, and suburban communities. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'Noblesville community along the White River and Morse Reservoir, served by our mold remediation experts.',
    intro:
      'Indy Car Racing Mold Removal Experts provides specialized mold assessment and remediation services to property owners throughout Noblesville, Indiana. As the county seat of Hamilton County, Noblesville possesses a distinctive blend of historic Victorian architecture around the downtown courthouse square, waterfront homes along Morse Reservoir, and newer residential developments. We understand the specific structural challenges associated with each property type.',
    localContext:
      'Noblesville’s geography is shaped by the White River basin and the Morse Reservoir watershed. Waterfront properties deal with elevated water tables and shoreline humidity, while older homes in Old Town often feature porous brick or stone rubble foundations that allow ground moisture to seep into cellars. Central Indiana seasonal humidity exacerbates these conditions throughout summer and fall.',
    neighborhoods: [
      'Historic Old Town Noblesville Square',
      'Morse Reservoir Waterfront & Shoreline Estates',
      'Wellington Northeast & South Harbour',
      'Mill Grove & Meadow Lake Subdivisions',
      'Potters Bridge Park Corridor',
      'Noblesville West & Hazel Dell Area',
      'Stoney Creek & Midland Trace Corridor',
    ],
    propertyLandscape:
      'Historic downtown homes often date back to the late 19th and early 20th centuries, featuring brick masonry, fieldstone basements, and antique timber framing. Along Morse Lake and westward, properties include multi-level lakeside walkouts and expansive modern subdivisions. Each architecture requires a customized remediation protocol that respects building materials while effectively eradicating mold.',
    projectCase: {
      title: 'Morse Reservoir Waterfront Walk-Out Basement Remediation',
      neighborhood: 'Morse Lake Shoreline, Noblesville',
      issue:
        'A severe summer storm overwhelmed exterior patio grading at a lakefront home, forcing water beneath a walk-out basement sliding glass door. The moisture migrated under engineered hardwood flooring and wicked up interior wall partitions, establishing Stachybotrys and Chaetomium colonies.',
      remediation:
        'Our certified technicians isolated the lower level with negative air containment barriers. We carefully removed damaged engineered flooring and base drywall under HEPA air filtration. Concrete slab surfaces and exposed wall studs were deep-cleaned with EPA-registered antimicrobial disinfectant and dried using industrial air movers and desiccant dehumidification.',
      outcome:
        'Successfully eliminated all toxic fungal growth without spore migration into upper levels. Concrete slab moisture was certified dry (<75% in-situ relative humidity), allowing safe reinstallation of water-resistant flooring.',
    },
    commonConcerns: [
      'Moisture weeping through historic limestone and brick cellar foundations in Old Town',
      'Water intrusion and shoreline humidity in Morse Reservoir lakefront walkout basements',
      'Attic moisture accumulation along roof decking caused by seasonal river basin humidity',
      'Mold growth behind bathroom wall tiles and shower enclosures after hidden plumbing leaks',
      'Commercial property moisture and microbial growth in downtown Noblesville retail spaces',
    ],
    image2: IMAGES.wallDamage,
    image2Alt:
      'Wall with moisture damage and plaster peeling, typical of conditions evaluated in historic Noblesville properties.',
    faqs: [
      {
        question: 'How do you remediate mold in historic Old Town Noblesville homes without damaging antique masonry?',
        answer:
          'Historic brick, lime mortar, and fieldstone foundations require gentle, non-destructive remediation. Rather than aggressive abrasive blasting, we utilize HEPA vacuuming with soft brush attachments, non-corrosive botanical antimicrobials, and targeted dehumidification that protects mortar integrity while eliminating active spores.',
      },
      {
        question: 'Why do Morse Reservoir waterfront homes have higher mold vulnerability?',
        answer:
          'Proximity to open water creates high localized ambient humidity, especially during Indiana summers. Walk-out basements and lakefront patios are also subject to surface water runoff during heavy rainfall. Regular moisture inspections help prevent small leaks from escalating into extensive structural mold colonies.',
      },
      {
        question: 'Can mold return after remediation in my Noblesville home?',
        answer:
          'Mold requires moisture, oxygen, and an organic food source to grow. While our remediation completely removes existing mold colonies and sanitizes surfaces, mold can only return if the underlying moisture source (such as a plumbing leak, groundwater seepage, or high humidity) is left unaddressed. We always diagnose and explain the root moisture cause.',
      },
      {
        question: 'What are the health symptoms that might indicate mold in a Noblesville property?',
        answer:
          'Occupants frequently report unexplained allergic reactions, persistent nasal congestion, eye irritation, chronic coughing, or heightened asthma symptoms that improve when away from the property. Musty or earthy odors are also a prime indicator of hidden mold.',
      },
    ],
  },
  {
    slug: 'greenwood-in',
    city: 'Greenwood',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Greenwood, Indiana',
    metaTitle: 'Mold Inspection in Greenwood, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Professional mold inspection, crawl space restoration, and basement remediation in Greenwood, IN. Serving Center Grove & Johnson County. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'Greenwood community in Johnson County, representing our Southside Indianapolis mold remediation coverage.',
    intro:
      'Indy Car Racing Mold Removal Experts provides dependable mold inspection, testing, and remediation services to property owners in Greenwood and Johnson County. Located immediately south of Indianapolis, Greenwood features an active mix of established mid-century neighborhoods, expansive Center Grove custom developments, and busy commercial retail centers along US-31 and County Line Road. We bring prompt response and proven remediation protocols to every job.',
    localContext:
      'Johnson County is characterized by dense, poorly draining clay soils with high plasticity. When wet, this soil retains enormous volumes of water, creating continuous hydrostatic pressure against basement foundations and causing crawlspaces to flood or stay damp. Sump pumps in Greenwood work exceptionally hard during spring rains, making mechanical failure and subsequent mold growth a constant risk.',
    neighborhoods: [
      'Center Grove Community & Estates',
      'Old Town Greenwood Historic District',
      'Valle Vista & Golf Course Community',
      'Timber Valley & Pleasant Creek Corridor',
      'Honey Creek & South State Road 135 Corridor',
      'Meridian Meadows & Main Street Area',
      'Smith Valley Residential Corridor',
    ],
    propertyLandscape:
      'Greenwood housing stock includes thousands of 1960s-1980s brick ranch homes with vented crawl spaces, alongside expansive modern two-story residences in Center Grove with deep poured-concrete basements. Vented crawl spaces in this region frequently suffer from high summer humidity condensation on floor joists and fiberglass insulation.',
    projectCase: {
      title: 'Center Grove Ranch Crawl Space Mold & Joist Decontamination',
      neighborhood: 'Center Grove Area, Greenwood',
      issue:
        'Humid outdoor summer air entering through open crawl space foundation vents collided with air-conditioned subfloor timbers, raising crawl space relative humidity to 84%. Thick white and gray mold colonies formed across 1,200 sq. ft. of floor joists, causing fallen wet insulation and heavy odors upstairs.',
      remediation:
        'Technicians wearing PAPR respirators isolated the crawlspace. We removed and bagged all contaminated fiberglass insulation under negative pressure, performed detailed HEPA sanding and HEPA vacuuming of every joist, applied an EPA-registered fungicidal wash, and installed high-capacity LGR dehumidifiers to dry framing below 12% moisture.',
      outcome:
        'Subfloor timber moisture content was restored to 10.8%, fully arresting microbial growth and restoring fresh, clean air quality throughout the home’s living spaces.',
    },
    commonConcerns: [
      'Crawl space moisture saturation and subfloor fungal growth in older Greenwood ranch homes',
      'Basement hydrostatic seepage and cove joint water entry in dense Johnson County clay',
      'Sump pump failure and basement drywall contamination after spring storm downpours',
      'Mold growth behind bathroom vanities and kitchen cabinetry following supply pipe leaks',
      'Commercial mold inspection and remediation in retail strip centers along US-31',
    ],
    image2: IMAGES.inspectorWindow,
    image2Alt:
      'Inspector examining basement window well and foundation wall for water infiltration in Greenwood, IN.',
    faqs: [
      {
        question: 'Why do Johnson County clay soils cause recurring basement dampness in Greenwood?',
        answer:
          'Dense clay soil absorbs water slowly but retains it for extended periods. During prolonged rainfall, the water table rises and creates substantial lateral hydrostatic pressure against basement foundation walls, forcing moisture through hairline shrinkage cracks and the joint between the floor slab and foundation wall.',
      },
      {
        question: 'Should I keep my Greenwood crawl space foundation vents open or closed in the summer?',
        answer:
          'In central Indiana’s humid summer climate, keeping foundation vents open actually introduces hot, moisture-laden air into a cool crawlspace. This triggers immediate condensation on cold ductwork and floor joists, accelerating mold growth. Modern building science strongly recommends sealing vents and installing a dedicated crawlspace dehumidifier.',
      },
      {
        question: 'How long does mold remediation take in a Greenwood home?',
        answer:
          'Most standard residential remediation projects (such as a contained basement room or crawlspace section) take between 2 to 4 business days. This includes setup of negative air containment, physical mold removal, antimicrobial sanitization, and 48-72 hours of continuous HEPA air scrubbing and structural drying.',
      },
      {
        question: 'What are the main signs of mold under hardwood or laminate flooring in Greenwood?',
        answer:
          'Look for cupping or crowning of floorboards, soft or spongy spots, dark discoloration along floor seams, and a persistent musty smell that intensifies near baseboards. Our non-destructive moisture meters can check subfloor moisture without pulling up boards.',
      },
    ],
  },
  {
    slug: 'plainfield-in',
    city: 'Plainfield',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Plainfield, Indiana',
    metaTitle: 'Mold Inspection in Plainfield, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Certified mold inspection, residential cleanup, and commercial remediation in Plainfield, IN. Serving Hendricks County properties. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'Plainfield community along White Lick Creek in Hendricks County, served by our mold remediation team.',
    intro:
      'Indy Car Racing Mold Removal Experts delivers certified mold inspection, moisture diagnosis, and remediation services to residential and commercial clients in Plainfield, Indiana. Situated in Hendricks County southwest of Indianapolis, Plainfield is a major residential hub as well as one of the Midwest’s largest logistics and warehousing corridors. We provide specialized residential mold removal as well as large-scale commercial moisture mitigation.',
    localContext:
      'Plainfield’s low-lying areas along White Lick Creek frequently experience elevated water tables and localized drainage back-ups during intense rain events. Hendricks County soils feature dense clay pockets that slow stormwater absorption. Additionally, Plainfield’s numerous massive commercial fulfillment centers and flex offices face industrial-scale HVAC condensation challenges that require commercial remediation protocols.',
    neighborhoods: [
      'Saratoga Master-Planned Community',
      'Clarks Creek & Vandalia Trail Neighborhoods',
      'Gladden Farms & The Settlement',
      'Plainfield Historic Downtown Main Street',
      'Airwest Commercial Park & Logistics Corridor',
      'Metropolis Shopping & Retail Zone',
      'Avon-Plainfield Border Subdivisions',
    ],
    propertyLandscape:
      'Residential properties in Plainfield consist largely of newer master-planned single-family homes with full basements, alongside 1970s split-level and ranch homes. The commercial sector includes millions of square feet of distribution warehouses, corporate office centers, and retail plazas that require specialized commercial HEPA filtration equipment.',
    projectCase: {
      title: 'Commercial Flex-Office HVAC Condensate & Drywall Remediation',
      neighborhood: 'Airwest Business Park, Plainfield',
      issue:
        'A clogged condensate drain pan on a commercial rooftop HVAC unit overflowed unnoticed inside a ceiling plenum, saturating acoustic ceiling tiles and insulated interior drywall partition walls within corporate offices.',
      remediation:
        'We established containment airlocks separating the affected office suite from active warehouse operations. Damaged ceiling tiles and contaminated drywall were removed under negative pressure HEPA filtration. Metal framing was sanitized with hospital-grade antimicrobial solutions, and commercial HEPA air scrubbers ran for 48 hours.',
      outcome:
        'Restored clean indoor air quality compliant with OSHA indoor air guidelines with zero disruption to main warehouse logistics operations.',
    },
    commonConcerns: [
      'Basement moisture infiltration and sump pump backups during White Lick Creek overflow events',
      'HVAC ductwork and ceiling plenum mold caused by commercial condensation line blockages',
      'Drywall and baseboard mold following plumbing pipe leaks in newer Plainfield master-planned homes',
      'High humidity and musty odors in split-level lower living rooms and sub-grade rec rooms',
      'Warehouse and logistics office environmental mold assessments for employee safety compliance',
    ],
    image2: IMAGES.ventInspection,
    image2Alt:
      'Commercial inspector examining HVAC ventilation and ceiling plenum for mold accumulation in Plainfield, IN.',
    faqs: [
      {
        question: 'Do you provide commercial mold remediation for Plainfield warehouses and distribution centers?',
        answer:
          'Yes. We have the commercial equipment, high-volume HEPA air filtration units, and trained personnel required to handle industrial offices, fulfillment centers, and retail facilities in Plainfield. We can schedule containment and remediation during off-peak hours to minimize business disruption.',
      },
      {
        question: 'How does proximity to White Lick Creek affect residential mold risks in Plainfield?',
        answer:
          'Properties situated near White Lick Creek or low-lying drainage easements face elevated water tables during seasonal storms. This increases hydrostatic pressure against foundation walls and can overwhelm residential sump pumps, making routine crawl space and basement moisture inspections vital.',
      },
      {
        question: 'What type of equipment do you use during mold remediation in Plainfield homes?',
        answer:
          'We utilize commercial-grade HEPA 500 air scrubbers, low-grain refrigerant (LGR) dehumidifiers, calibrated thermal imaging infrared cameras, pin/pinless moisture meters, and negative air machines with HEPA filtration certified to capture 99.97% of particles down to 0.3 microns.',
      },
      {
        question: 'Can mold grow inside air conditioning vents in Plainfield properties?',
        answer:
          'Yes. When warm, humid air contacts cool metal ductwork or supply registers, condensation forms. Dust and airborne organic debris inside ducts provide food for mold spores. We assess ductwork conditions and recommend proper remediation and duct sanitization.',
      },
    ],
  },
  {
    slug: 'brownsburg-in',
    city: 'Brownsburg',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Brownsburg, Indiana',
    metaTitle: 'Mold Inspection in Brownsburg, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Expert mold inspection, assessment, and remediation in Brownsburg, IN. Dedicated residential moisture solutions for Hendricks County. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'Brownsburg area in northwest Hendricks County, serviced by our mold removal and inspection professionals.',
    intro:
      'Indy Car Racing Mold Removal Experts delivers thorough mold inspection and professional remediation services to property owners in Brownsburg, Indiana. Located northwest of Indianapolis along I-74, Brownsburg is an award-winning Hendricks County community featuring established residential neighborhoods, thriving local businesses, and modern housing developments. We provide the expertise needed to solve complex residential moisture and mold problems.',
    localContext:
      'Brownsburg is situated in a region with extensive agricultural drainage watersheds and White Lick Creek tributaries. Dense Hendricks County clay soils frequently retain moisture around residential foundations after snowmelt and spring rains. Basements, split-level lower floors, and crawlspaces are prone to dampness, efflorescence, and mold blooms if drainage is compromised.',
    neighborhoods: [
      'Eagle Crossing Subdivisions',
      'Northridge & Windridge Estates',
      'Holiday Pines & Arbuckle Acres Vicinity',
      'Green Street Historic Corridor',
      'Lake Ridge & Northern Brownsburg Developments',
      'Brownsburg West & County Road 700 N Area',
    ],
    propertyLandscape:
      'Brownsburg homes encompass 1960s-1970s split-levels with partially sub-grade recreation rooms, traditional ranches on crawl spaces, and modern two-story residences with deep poured-concrete basements. Foundation settling and hydrostatic cove joint leaks are frequent culprits for subterranean mold development.',
    projectCase: {
      title: 'Brownsburg Split-Level Lower Rec Room Mold Containment',
      neighborhood: 'Eagle Crossing, Brownsburg',
      issue:
        'Hydrostatic seepage through the floor-wall cove joint during heavy May rains caused undetected moisture accumulation beneath floating luxury vinyl tile flooring in a sub-grade family room. Black mold (Stachybotrys) grew extensively on the underlayment and lower drywall.',
      remediation:
        'We sealed off the lower level with negative air containment barriers. We carefully removed and bagged the contaminated vinyl flooring and executed a 2-foot flood cut of the affected drywall. Concrete surfaces and structural framing were sanitized with EPA-registered botanical antimicrobials and dried using commercial LGR dehumidification.',
      outcome:
        'Eradicated all mold colonies and odors, dried the concrete slab to acceptable parameters, and provided the homeowner with clear guidance on installing an exterior drainage French drain.',
    },
    commonConcerns: [
      'Basement foundation cove joint seepage and efflorescence after heavy spring storms',
      'Mold growth beneath floating vinyl plank or laminate flooring in sub-grade living areas',
      'Crawl space moisture accumulation and joist fungal growth in older Brownsburg ranches',
      'Attic roof condensation and mold growth caused by disconnected bathroom vent ducts',
      'Hidden mold colonies behind laundry room drywall and water heater closets',
    ],
    image2: IMAGES.peelingWall,
    image2Alt:
      'Peeling wall paint and moisture staining evaluated during mold remediation in Brownsburg, IN.',
    faqs: [
      {
        question: 'Why do split-level homes in Brownsburg frequently suffer from lower-level mold?',
        answer:
          'Split-level homes feature living spaces that sit 3 to 4 feet below exterior grade. When surrounding clay soils become saturated, hydrostatic pressure pushes moisture through foundation seams and the cove joint between floor slabs and walls, wetting carpets, padding, and baseboard drywall.',
      },
      {
        question: 'What is the white powdery residue on my Brownsburg basement concrete wall?',
        answer:
          'That white powder is typically efflorescence—mineral salt deposits left behind as moisture wicks through concrete and evaporates into the room. While efflorescence itself is not mold, it confirms active moisture intrusion through your foundation that can readily foster mold on nearby drywall, wood, or cardboard.',
      },
      {
        question: 'Can bleach effectively kill mold on drywall or framing in my Brownsburg home?',
        answer:
          'No. The EPA and IICRC advise against using household bleach on porous materials like drywall and wood. Bleach is mostly water; the chlorine chemical stays on the surface while water soaks into porous fibers, feeding the mold roots (hyphae) and causing rapid regrowth. Professional remediation requires physical removal and EPA-registered penetrating fungicidal washes.',
      },
      {
        question: 'How quickly can your team assess a mold concern in Brownsburg?',
        answer:
          'We can generally schedule an on-site moisture and mold assessment within 24 to 48 hours for Brownsburg residents. Call 463-220-1284 to speak with our specialists.',
      },
    ],
  },
  {
    slug: 'avon-in',
    city: 'Avon',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Avon, Indiana',
    metaTitle: 'Mold Inspection in Avon, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Certified mold inspection, basement water mitigation, and remediation in Avon, IN. Serving Prestwick and Washington Township. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'Avon community in Hendricks County along US-36, served by our certified mold remediation technicians.',
    intro:
      'Indy Car Racing Mold Removal Experts provides professional mold inspection, thermal moisture assessment, and complete remediation to property owners in Avon, Indiana. Positioned along the bustling US-36 corridor in Washington Township, Avon features prestigious master-planned communities, beautiful parks, and modern commercial developments. We help homeowners protect their property value and indoor health from moisture-related mold.',
    localContext:
      'Avon is known for expansive Hendricks County clay soils with high plasticity. During hot summers, clay shrinks and pulls away from foundations; during wet springs, it expands rapidly and exerts severe lateral pressure. This cyclical movement causes hairline foundation settling cracks in poured concrete basements, allowing seasonal seepage and creating ideal dark, damp conditions for mold colonies.',
    neighborhoods: [
      'Prestwick Golf Community',
      'Austin Lakes & Whispering Pines',
      'Washington Township US-36 Corridor',
      'Pine Tree & Stratford Park Subdivisions',
      'Avon High School Vicinity Neighborhoods',
      'Danville-Avon Border Communities',
    ],
    propertyLandscape:
      'Most Avon neighborhoods were developed between the 1990s and the present day. Homes feature large finished basements, open-concept floor plans, and complex rooflines with multiple valley intersections where roof runoff and flashing leaks can occasionally introduce moisture into attic insulation.',
    projectCase: {
      title: 'Prestwick Golf Community Finished Basement Foundation Crack Remediation',
      neighborhood: 'Prestwick, Avon',
      issue:
        'A vertical foundation settling crack behind finished basement drywall allowed continuous slow water weeping during autumn rains, saturating fiberglass batt insulation and causing extensive black mold (Stachybotrys chartarum) on the drywall backing.',
      remediation:
        'We sealed the affected basement quadrant with airtight 6-mil poly containment barriers and initiated HEPA negative air filtration. Our technicians performed a clean 4-foot excision of contaminated drywall, removed damp insulation, wire-brushed the concrete wall, applied an EPA-registered fungicidal wash, and dried the structure with high-velocity air movers.',
      outcome:
        '100% eradication of toxic black mold spores without migrating to the main floor. The concrete wall was dried and prepared for foundation crack epoxy injection.',
    },
    commonConcerns: [
      'Basement foundation settling crack leaks and hidden drywall mold in newer Avon homes',
      'Crawl space humidity condensation and fallen insulation in older Washington Township properties',
      'Attic moisture buildup and mold along roof valleys and eaves after winter ice dams',
      'Mold growth in laundry utility rooms and water heater pans following slow plumbing seepage',
      'Persistent musty odor in finished basements after heavy seasonal precipitation',
    ],
    image2: IMAGES.crackDamage,
    image2Alt:
      'Cracked foundation wall and drywall damage inspected for mold intrusion in Avon, IN.',
    faqs: [
      {
        question: 'How do Avon’s expansive clay soils cause foundation cracks and subsequent mold?',
        answer:
          'Western Hendricks County clay expands significantly when saturated with water and shrinks during dry spells. This constant ground swelling and contraction creates lateral hydrostatic pressure that causes vertical and stair-step hairline cracks in concrete foundation walls, letting moisture seep behind finished drywall.',
      },
      {
        question: 'Can mold develop behind intact-looking drywall in Avon basements?',
        answer:
          'Yes. Mold requires moisture, warmth, and organic food (cellulose in drywall paper). Water seepage from foundation cracks stays trapped inside the insulated wall cavity. The mold can grow heavily on the hidden paper backing for weeks before surface paint starts blistering or staining.',
      },
      {
        question: 'What is the danger of disturbing visible black mold myself in Avon?',
        answer:
          'When mold colonies are disturbed dry without proper containment and negative air pressure, millions of microscopic spores and mycotoxins are released into the air. Household HVAC systems quickly circulate these spores into bedrooms and living spaces, creating cross-contamination and severe respiratory risks.',
      },
      {
        question: 'How do you verify that mold remediation in Avon was completely successful?',
        answer:
          'Following remediation, we conduct a thorough visual inspection, perform comprehensive moisture meter verification on all structural timbers (<14% WME), and provide documentation. We also welcome independent third-party environmental clearance air testing for total peace of mind.',
      },
    ],
  },
  {
    slug: 'zionsville-in',
    city: 'Zionsville',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Zionsville, Indiana',
    metaTitle: 'Mold Inspection in Zionsville, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Bespoke mold inspection, historic masonry assessment, and remediation in Zionsville, IN. Serving Village of Zionsville & Boone County. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisSkyline,
    heroImageAlt:
      'Zionsville community in Boone County, featuring historic charm and custom estate properties served for mold remediation.',
    intro:
      'Indy Car Racing Mold Removal Experts delivers meticulous, white-glove mold inspection and remediation services to property owners in Zionsville, Indiana. Located in southeastern Boone County northwest of Indianapolis, Zionsville is celebrated for its historic brick Main Street, lush tree canopies, and luxury custom estates. We combine advanced building science with non-destructive remediation techniques tailored to fine residential architecture.',
    localContext:
      'Zionsville’s natural geography includes the Eagle Creek river corridor, extensive protected wetlands, and dense mature forest canopies. The dense tree cover keeps ground soils cool and damp, slowing evaporation after rains. Historic homes in the Village feature antique brick and stone foundations, while luxury modern estates often include multi-level basements, radiant-heated subfloors, and custom wine cellars that require precise humidity regulation.',
    neighborhoods: [
      'Historic Downtown Zionsville Village',
      'Stonegate Master-Planned Community',
      'The Willows & Cobblestone Lakes',
      'Holliday Farms Championship Golf Community',
      'Thornhill & Sycamore Bend Estates',
      'Old Zionsville & Eagle Creek Corridor',
    ],
    propertyLandscape:
      'Architecture in Zionsville ranges from 19th-century preserved homes with fieldstone cellars to multi-million dollar modern estates. Custom basements frequently incorporate high-value finishes, custom millwork, and wine cellars where mold spores can degrade cabinetry, acoustic walls, and fine building materials if indoor relative humidity creeps above 55%.',
    projectCase: {
      title: 'Zionsville Village Historic Fieldstone Foundation Mold Restoration',
      neighborhood: 'Historic Downtown Village, Zionsville',
      issue:
        'Continuous rising damp through a century-old fieldstone and lime mortar foundation caused surface Penicillium mold blooms across basement storage timbers and antique floor joists, emitting odors into the historic dining room above.',
      remediation:
        'Our crew implemented gentle, preservation-compliant remediation protocols under HEPA negative air containment. We performed soft-brush HEPA vacuuming and applied a non-corrosive, pH-neutral botanical antimicrobial wash designed to preserve antique mortar. We deployed low-grain refrigerant dehumidification to stabilize relative humidity at 45%.',
      outcome:
        'Safely eradicated all microbial colonies without damaging the historic masonry or timber framing, restoring fresh indoor air quality and preserving architectural integrity.',
    },
    commonConcerns: [
      'Moisture infiltration and rising damp in historic Zionsville Village stone foundations',
      'Humidity control and mold prevention in custom basement wine cellars and theater rooms',
      'Heavy shade and damp ground conditions causing crawl space mold along Eagle Creek',
      'Condensation inside high-efficiency multi-zone HVAC ductwork in luxury Zionsville estates',
      'Hidden moisture and mold following master bathroom luxury plumbing and steam shower leaks',
    ],
    image2: IMAGES.clipboard,
    image2Alt:
      'Certified inspector reviewing moisture readings on clipboard in a custom Zionsville home.',
    faqs: [
      {
        question: 'How do you remediate mold in historic Zionsville stone foundations without harming the mortar?',
        answer:
          'Antique fieldstone and lime mortar cannot tolerate harsh chemical acid washes or aggressive abrasive blasting. We utilize delicate HEPA vacuum extraction, gentle manual hand-cleaning, non-acidic botanical antimicrobials, and controlled mechanical dehumidification that safeguard historic building elements.',
      },
      {
        question: 'Does heavy tree shade around Zionsville homes increase mold risk?',
        answer:
          'Yes. Mature tree canopies reduce sunlight exposure and air circulation around roofs, siding, and ground foundations. This prevents soil and exterior walls from drying promptly after rainfall, leading to elevated relative humidity and accelerated mold growth along foundation perimeters and crawl spaces.',
      },
      {
        question: 'Can you work with insurance adjusters on high-value Zionsville home claims?',
        answer:
          'Yes. We provide thorough, transparent documentation including thermal imaging scans, moisture mapping records, photographic evidence, and line-item scopes that meet insurance industry standards, facilitating smoother claims handling.',
      },
      {
        question: 'What precautions protect my fine furnishings during remediation in Zionsville?',
        answer:
          'We treat your home with utmost care. Unaffected rooms and furniture are sealed with heavy-duty poly dust barriers. Clean access corridors are laid with floor protection, and the work area is held under strict negative air pressure so airborne particulates cannot escape into your living space.',
      },
    ],
  },
  {
    slug: 'lawrence-in',
    city: 'Lawrence',
    state: 'Indiana',
    h1: 'Mold Inspection & Removal in Lawrence, Indiana',
    metaTitle: 'Mold Inspection in Lawrence, IN | Indy Car Racing Mold Removal Experts',
    metaDescription:
      'Certified mold inspection, residential cleanup, and commercial remediation in Lawrence, IN. Serving Fort Harrison & East Marion County. Call 463-220-1284.',
    heroImage: IMAGES.indianapolisCanal,
    heroImageAlt:
      'Lawrence community in northeast Marion County near Fort Harrison, served by our mold remediation experts.',
    intro:
      'Indy Car Racing Mold Removal Experts provides certified mold inspection, assessment, and remediation services to property owners in Lawrence, Indiana. Situated on the northeast side of Marion County, Lawrence includes historic Fort Benjamin Harrison, serene lakeside homes around Indian Lake, and diverse residential subdivisions. We deliver rapid, reliable mold remediation to protect occupant health and property value.',
    localContext:
      'Lawrence’s topography features extensive wooded parcels, Fort Harrison State Park wetlands, and Indian Lake. Heavy tree cover and lakeside humidity slow down exterior drying cycles. Additionally, older mid-century housing stock and converted historic military brick structures often experience roof parapet leaks, plumbing failures, or damp crawl spaces during spring storm seasons.',
    neighborhoods: [
      'Historic Fort Benjamin Harrison District',
      'Indian Lake Shoreline Neighborhoods',
      'Devonshire & Northeast Suburban Enclaves',
      'Harrison Park & Lawrence Central Corridor',
      'Pendleton Pike Commercial Retail Zone',
      'Oaklandon Historic Community',
    ],
    propertyLandscape:
      'Property architecture spans early 1900s solid-brick military barracks converted into professional offices and condos, 1950s-1970s suburban ranch homes on crawl spaces, and scenic waterfront residences around Indian Lake. Commercial properties along Pendleton Pike face industrial-scale moisture and ventilation challenges.',
    projectCase: {
      title: 'Historic Fort Harrison Brick Masonry Office Mold Remediation',
      neighborhood: 'Fort Harrison Historic District, Lawrence',
      issue:
        'A parapet roof flashing leak allowed rainwater to seep between exterior brick masonry and interior plasterboard within a historic converted commercial office building, creating hidden black mold on furring strips and insulation.',
      remediation:
        'We established a negative air containment zone with zippered access corridors. Damaged plasterboard was selectively excised under continuous HEPA air filtration. Exposed brick and framing were treated with EPA-registered antimicrobial disinfectant, followed by 48 hours of industrial dehumidification.',
      outcome:
        'Successfully decontaminated the administrative office with zero cross-contamination to neighboring suites, enabling normal business operations to resume promptly.',
    },
    commonConcerns: [
      'Roof parapet and masonry leaks causing hidden cavity mold in historic Fort Harrison buildings',
      'High lakefront humidity and crawlspace moisture saturation around Indian Lake homes',
      'Basement foundation seepage and sump pump failures during heavy seasonal rainfall',
      'Mold growth behind drywall following burst plumbing pipes in mid-century Lawrence ranches',
      'Commercial retail and restaurant mold assessments along the Pendleton Pike corridor',
    ],
    image2: IMAGES.protectiveGear,
    image2Alt:
      'Technician in protective equipment and respirator applying antimicrobial treatment in Lawrence, IN.',
    faqs: [
      {
        question: 'What special considerations apply to historic Fort Harrison buildings in Lawrence?',
        answer:
          'Converted military brick buildings feature multi-wythe masonry walls and unique cavity construction. Water leaks can travel through brick joints and collect inside interior furring cavities. Our non-invasive moisture meters and thermal cameras track hidden moisture pathways without causing damage to historic facades.',
      },
      {
        question: 'How does living near Indian Lake in Lawrence affect crawl space mold?',
        answer:
          'High ambient moisture and low-lying ground tables around Indian Lake keep soil saturated. When crawl spaces lack heavy-duty vapor barriers, moisture vapor travels upward into wooden subflooring. We install 20-mil vapor barriers and commercial crawlspace dehumidifiers to stop this cycle.',
      },
      {
        question: 'What should I do after discovering a ceiling leak in my Lawrence home?',
        answer:
          'Catch active dripping with a bucket, puncture a small drainage hole in the sagging ceiling drywall to relieve water weight, and turn off any electrical circuits in the area. Contact our team at 463-220-1284 immediately so we can map the moisture spread and begin drying before mold colonies establish.',
      },
      {
        question: 'Are your mold removal estimates in Lawrence completely transparent?',
        answer:
          'Yes. We provide clear, itemized written estimates detailing the exact containment, removal steps, antimicrobial products, and equipment needed. We never include hidden fees or surprise costs.',
      },
    ],
  },
];

export function getLocation(slug: string): LocationDetail | undefined {
  return locations.find((l) => l.slug === slug);
}
