export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const generalFaqs: FAQItem[] = [
  // Basics & Science
  {
    category: 'Remediation Basics',
    question: 'What is the fundamental difference between mold removal and mold remediation?',
    answer:
      'Mold removal refers to the physical scrubbing or extraction of visible mold colonies from surface materials. Mold remediation is a comprehensive, scientific protocol based on the IICRC S520 standard that encompasses environmental containment under negative air pressure, source moisture diagnosis, HEPA air filtration (capturing microscopic airborne spores down to 0.3 microns), antimicrobial disinfection of structural framing, and drying building materials to target dry standards (<14% wood moisture equivalent).',
  },
  {
    category: 'Remediation Basics',
    question: 'Why is it critical to address the underlying moisture source before or during remediation?',
    answer:
      'Mold spores are naturally present in all outdoor and indoor air. Spores only germinate and reproduce when they encounter moisture, warmth, and an organic food source (such as drywall paper, wood framing, or carpet backing). If surface mold is removed but the water leak, foundation seepage, or high humidity is left unresolved, new mold colonies can establish within 24 to 48 hours.',
  },
  {
    category: 'Remediation Basics',
    question: 'Can household bleach effectively kill mold on drywall, wood, or framing?',
    answer:
      'No. The EPA and IICRC advise against using bleach on porous materials like drywall and framing lumber. Bleach consists largely of water; the chlorine chemical stays on the surface while water penetrates into porous fibers, actually feeding dormant fungal hyphae and triggering aggressive regrowth. Professional remediation utilizes EPA-registered penetrating fungicidal biocides and physical extraction.',
  },

  // Realistic Costs & Pricing Factors
  {
    category: 'Costs & Pricing Factors',
    question: 'What factors influence the cost of professional mold remediation in Indianapolis?',
    answer:
      'Costs depend on four objective project variables: 1) Contaminated square footage and cubic air volume; 2) Level of containment required (isolated closet barrier vs full multi-room negative-pressure chamber with zippered airlocks); 3) Material porosity and disposal volume (non-porous tile cleaned in place vs saturated drywall and insulation requiring sealed excision); and 4) Equipment run-time (number of commercial LGR dehumidifiers and HEPA air scrubbers required to operate continuously for 48 to 72 hours).',
  },
  {
    category: 'Costs & Pricing Factors',
    question: 'Do you charge surprise fees or change estimates during the project?',
    answer:
      'No. We adhere to a strict Transparent Upfront Pricing Policy. Following our on-site visual and moisture survey, you receive an itemized, written scope of work specifying containment, equipment schedules, labor, and materials before any physical remediation begins.',
  },

  // Timelines & Project Duration
  {
    category: 'Timelines & What to Expect',
    question: 'How long does a typical mold inspection take, and when are results available?',
    answer:
      'A thorough residential mold inspection typically takes 1.5 to 2.5 hours, depending on property size, crawlspace accessibility, and attic layout. You receive an immediate verbal debrief on-site with thermal imaging review, followed by a formal written report documenting moisture percentages, photographic evidence, and prioritized recommendations within 24 hours.',
  },
  {
    category: 'Timelines & What to Expect',
    question: 'How many days does mold remediation take inside a home?',
    answer:
      'Most contained residential remediation projects (such as a finished basement room or crawlspace section) take between 2 to 4 business days. This timeframe covers site isolation and containment setup on Day 1, physical material removal and antimicrobial deep-cleaning on Day 2, and continuous industrial HEPA air scrubbing and LGR structural drying for 48 to 72 hours.',
  },
  {
    category: 'Timelines & What to Expect',
    question: 'Can occupants stay in the home during mold remediation?',
    answer:
      'In most residential situations involving contained basements, crawlspaces, or single rooms, occupants can comfortably remain in the home. The work zone is fully isolated with 6-mil poly dust barriers and held under negative air pressure, meaning air only flows into the containment zone and is exhausted outside. If HVAC systems are affected or contamination spans multiple primary living areas, temporary relocation may be recommended.',
  },

  // Testing Limitations & Impartiality
  {
    category: 'Testing Limitations & Objectivity',
    question: 'Why do you emphasize physical moisture mapping over store-bought petri dish test kits?',
    answer:
      'Over-the-counter gravity petri dish kits are notoriously inaccurate. Mold spores naturally exist in all air, so a petri dish left out will virtually always grow mold, creating false alarms without identifying whether an active indoor colony exists or what the airborne spore concentration is. Calibrated pin/pinless moisture meters, thermal infrared cameras, and hygrometers provide immediate, actionable diagnostic data about where active water is trapped.',
  },
  {
    category: 'Testing Limitations & Objectivity',
    question: 'Do you perform post-remediation clearance testing, or should an independent party do it?',
    answer:
      'To prevent any conflict of interest, the IICRC strongly recommends that post-remediation verification (clearance air sampling) be conducted by an independent, third-party certified environmental consultant or industrial hygienist. We welcome and coordinate with independent testing professionals to verify that normal fungal ecology has been restored.',
  },

  // Insurance Coverage & Claims
  {
    category: 'Insurance & Claims',
    question: 'Does homeowner insurance typically cover mold remediation in Indiana?',
    answer:
      'Coverage generally depends on whether the mold resulted from a sudden and accidental covered peril (such as an abrupt pipe freeze/burst, water heater rupture, or washing machine supply hose failure) versus long-term deferred maintenance or gradual seepage. Many policies include specific mold liability riders with set caps (e.g., $5,000 to $10,000).',
  },
  {
    category: 'Insurance & Claims',
    question: 'What documentation do you provide for insurance adjusters?',
    answer:
      'We provide comprehensive, itemized documentation formatted for insurance adjuster reviews, including date-stamped thermal imaging scans, pin moisture percentage logs against dry standards, high-resolution photographic evidence of affected materials, and an itemized line-item scope of remediation work.',
  },

  // Service Specifics & Property Situations
  {
    category: 'Service Specifics',
    question: 'Can mold grow behind drywall without any visible surface stains or discoloration?',
    answer:
      'Yes. Standard drywall features recycled paper on both sides. When plumbing pipes leak or groundwater seeps through foundation walls, moisture wicks into the insulation cavity. Mold frequently feeds on the hidden paper backing for weeks or months before surface paint begins blistering, peeling, or discoloring.',
  },
  {
    category: 'Service Specifics',
    question: 'Should crawl space foundation vents be open or closed during Indiana summers?',
    answer:
      'In central Indiana’s humid summer climate, keeping crawl space vents open allows hot, moisture-saturated air to enter the cool subterranean space beneath your floorboards. This warm air condenses immediately on cool subfloor framing and ductwork, driving crawlspace relative humidity above 80% and causing joist mold. Modern building science recommends closed crawl spaces with heavy-duty vapor barriers and dedicated dehumidification.',
  },
  {
    category: 'Service Specifics',
    question: 'What should commercial facility managers do when mold is discovered in an office building?',
    answer:
      'Immediately isolate the area from the return-air HVAC plenum to prevent spores from distributing across adjacent tenant suites. Avoid dry sweeping or wiping contaminated drywall with standard cloths. Call our team at 463-220-1284 to arrange off-hours containment, negative air HEPA scrubbing, and code-compliant remediation that minimizes business disruption.',
  },
];
