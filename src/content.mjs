export const site = {
  brand: '4Z GYM',
  email: '4zgymsl@gmail.com',
  phoneDisplay: '076 072 3929',
  phoneE164: '+94760723929',
  siteUrl: process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  hours: '06:00 – 22:00',
  plans: [
    {id:'monthly', months:1, price:5000},
    {id:'sixmonths', months:6, price:24000, featured:true},
    {id:'annual', months:12, price:45000},
  ],
  branches: [
    {id:'eheliyagoda', name:'Eheliyagoda', address:'4Z GYM, Railway Road, Eheliyagoda', code:'EH', map:'4Z GYM Railway Road Eheliyagoda Sri Lanka', phone:'076 072 3929'},
    {id:'nawagamuwa', name:'Nawagamuwa', address:'W2FC+H3G, Seethawakapura 10654', code:'NW', map:'W2FC+H3G Seethawakapura Sri Lanka', phone:null},
  ],
  media: {
    hero: '/images/hero-modern-banner.png',
    founder: '/images/asanka-headshot.png',
    eheliyagoda: '/images/4z-sign.jpg',
    nawagamuwa: '/images/nawagamuwa-location.jpg',
    'gallery-0': '/images/asanka-silhouette.jpg',
    'gallery-1': '/images/asanka-mirror.jpg',
    'gallery-2': '/images/4z-jersey-back.jpg',
    'gallery-3': '/images/asanka-red-light.jpg',
    'gallery-4': '/images/asanka-dumbbells.jpg',
    'gallery-5': '/images/4z-sign.jpg',
  },
};
export const copy = {
  "en": {
    "htmlLang": "en",
    "menu": {
      "home": "Home",
      "about": "Our story",
      "founder": "Meet Asanka",
      "locations": "Locations",
      "programs": "Programs",
      "memberships": "Memberships",
      "gallery": "Gallery",
      "contact": "Contact",
      "visit": "Book a visit",
      "faq": "FAQ"
    },
    "common": {
      "learn": "Learn more",
      "explore": "Explore",
      "join": "Explore plans",
      "location": "Our locations",
      "from": "From",
      "everyday": "Open every day",
      "branch": "Branch",
      "back": "Back to home",
      "currency": "LKR",
      "coming": "Original photography will be added soon",
      "call": "Call the gym",
      "directions": "Get directions",
      "whatsapp": "WhatsApp us",
      "hours": "Opening hours",
      "locationDetails": "Location details",
      "photo": "Real 4Z Gym photography",
      "unconfirmed": "Indicative pricing — subject to confirmation",
      "coach": "Founder & Fitness Coach",
      "inquiry": "Send an inquiry",
      "book": "Request a visit",
      "all": "View all",
      "seePlans": "See membership plans",
      "locationNote": "Please confirm the Nawagamuwa map pin before launch."
    },
    "seo": {
      "home": "4Z Gym | Strength for Body. Peace for Mind.",
      "about": "Our Story | 4Z Gym",
      "founder": "Asanka Rajitha | International Certified Fitness Coach & Elite Personal Trainer",
      "locations": "Our Locations | 4Z Gym",
      "programs": "Training Programs | 4Z Gym",
      "memberships": "Memberships & Pricing | 4Z Gym",
      "gallery": "Gallery | 4Z Gym",
      "contact": "Contact & Visit | 4Z Gym",
      "privacy": "Privacy Policy | 4Z Gym",
      "terms": "Terms | 4Z Gym"
    },
    "hero": {
      "kicker": "TWO LOCATIONS. ONE STANDARD.",
      "line1": "BUILT FOR",
      "line2": "MORE.",
      "body": "A stronger body. A clearer mind. Your fitness journey starts at 4Z Gym — in Eheliyagoda and Nawagamuwa.",
      "cta1": "Explore memberships",
      "cta2": "Find your gym",
      "side": "EVERY REP. EVERY DAY.",
      "tag": "STRENGTH FOR BODY. PEACE FOR MIND.",
      "stat1": "GYM LOCATIONS",
      "stat2": "OPEN EVERY DAY",
      "stat3": "YOUR NEXT CHAPTER"
    },
    "intro": {
      "eyebrow": "WELCOME TO 4Z",
      "heading": "A DIFFERENT KIND OF\nSTRONG.",
      "p": "Training is personal. Progress is earned. At 4Z, our focus is on creating a place where people can show up, get guidance and keep moving forward.",
      "a": "Built around people",
      "ad": "A community-first approach to fitness.",
      "b": "A place to progress",
      "bd": "From first steps to ambitious goals.",
      "c": "Two convenient locations",
      "cd": "Find your training home near you."
    },
    "founder": {
      "eyebrow": "THE PERSON BEHIND THE BRAND",
      "title": "MEET ASANKA\nRAJITHA.",
      "sub": "International Certified Fitness Coach & Elite Personal Trainer",
      "p": "Asanka Rajitha is an elite, internationally certified fitness professional equipped with advanced global qualifications and rich industry experience. Having worked as a Personal Trainer at GymNation Dubai—one of the UAE’s premier fitness hubs—and competed as a National Level Bodybuilding Athlete under the Sri Lanka Bodybuilding & Fitness Federation (SLBBFF), Asanka combines rigorous scientific methodology with practical, real-world expertise to deliver world-class fitness transformations.",
      "story": "Discover his story",
      "pull": "“Strength is built one day at a time.”",
      "cred": "Qualifications & accreditations",
      "team": "Coaching team",
      "teamTitle": "THE PEOPLE WHO SUPPORT YOUR PROGRESS.",
      "qual": [
        [
          "NASM Certified Personal Trainer (CPT – USA)",
          "National Academy of Sports Medicine – Premier globally recognized American personal training credential."
        ],
        [
          "ISSA Certified Specialist in Fitness Nutrition (USA)",
          "International Sports Sciences Association – Advanced expertise in sports and fitness nutrition planning."
        ],
        [
          "REPs Level 3 Certified Personal Trainer (UK / UAE)",
          "Register of Exercise Professionals – Internationally accredited standard for professional fitness trainers."
        ],
        [
          "NVQ Level 4 – Physical Fitness Trainer",
          "South Asian Academy of Sport Science (SAASS)"
        ],
        [
          "Certified Power Aerobics Instructor",
          "South Asian Academy of Sport Science (SAASS)"
        ]
      ],
      "work": "Former Personal Fitness Trainer – GymNation (Dubai, UAE)",
      "sport": "National Level Bodybuilding Competitor – Sri Lanka",
      "approach": "THE APPROACH",
      "philosophy": "Training that meets you where you are.",
      "philosophyText": "For Asanka, coaching is about more than a workout. It is about understanding your starting point, training with intention and creating habits that can last.",
      "bioTitle": "The story behind the coach",
      "bioLabel": "Complete biography",
      "bio": [
        "Driven by a lifelong passion for physical fitness and athletic performance, Asanka built his career on a solid scientific foundation. He earned his professional credentials from the South Asian Academy of Sport Science (SAASS), qualifying as an NVQ Level 4 Physical Fitness Trainer and a Certified Power Aerobics Instructor. To meet the highest global standards, he further advanced his education by obtaining prestigious international credentials, including NASM-CPT (USA), ISSA Exercise Nutrition Specialist (USA), and REPs Level 3 Personal Training certification.",
        "Putting his knowledge to the test on the competitive stage, Asanka actively competed in national-level bodybuilding championships organized by the Sri Lanka Bodybuilding & Fitness Federation (SLBBFF). This competitive background gave him deep, firsthand mastery over advanced body composition techniques, strict fat-loss protocols (cutting), and muscle hypertrophy.",
        "Taking his career to the international stage, Asanka served as a Professional Personal Trainer at GymNation (Dubai, UAE). In this high-performance environment, he successfully coached a diverse clientele—ranging from VIPs and expats to serious fitness enthusiasts—applying cutting-edge international training standards.",
        "Believing that every individual possesses a unique physiology and specific fitness goals, Asanka specializes in designing 100% science-backed, personalized workout and nutrition regimens. Whether your objective is advanced fat loss, muscle building, physique transformation, or functional strength, Asanka Rajitha is your trusted expert for sustainable, elite results."
      ],
      "credLabel": "Academic & international certifications",
      "experienceTitle": "International experience & sports affiliations",
      "workDetail": "Provided elite, international-standard personal training and client transformations at Dubai’s leading gym chain.",
      "sportDetail": "Competed in official national-level stage events represented by the Sri Lanka Bodybuilding & Fitness Federation (SLBBFF).",
      "specialtiesTitle": "Areas of specialization",
      "specialties": [
        "Elite Personal Training & Physique Transformation",
        "Bodybuilding Stage Prep & Muscle Hypertrophy",
        "Advanced Fat Loss & Scientific Weight Management",
        "Power Aerobics & Cardiovascular Conditioning",
        "Custom Sports Nutrition & Macronutrient Planning",
        "Postural Correction & Injury Prevention"
      ],
      "femaleCoach": "Female Coach"
    },
    "locations": {
      "eyebrow": "FIND YOUR PLACE",
      "title": "TWO LOCATIONS.\nONE 4Z COMMUNITY.",
      "p": "Choose the 4Z Gym location that fits your everyday routine.",
      "ehe": "Railway Road, Eheliyagoda",
      "nawa": "Seethawakapura / Nawagamuwa",
      "view": "Explore this branch",
      "locIntro": "YOUR TRAINING HOME",
      "locHero": "MAKE THIS\nYOUR PLACE.",
      "locDesc": "Explore branch information, available membership plans and ways to get in touch before your first visit.",
      "open": "06:00 AM – 10:00 PM · Daily",
      "mapNote": "Check the exact entrance and directions before traveling.",
      "facilities": "WHAT TO EXPECT",
      "facilityNote": "Suggested amenity categories shown for layout only. Confirm which facilities are actually available at this branch before publishing.",
      "amenityLabels": [
        "Strength equipment",
        "Cardio zone",
        "Personal coaching",
        "Changing area",
        "Parking",
        "Lockers / storage"
      ],
      "visit": "PLAN YOUR VISIT",
      "visitDesc": "Send a visit request. Our team will contact you to confirm the details."
    },
    "programs": {
      "eyebrow": "FIND YOUR FOCUS",
      "title": "TRAIN WITH\nPURPOSE.",
      "p": "Whether you are just getting started or working toward a new personal best, explore the training directions being planned for 4Z Gym.",
      "note": "Proposed program categories and activities. Please confirm which services are available at each branch before launch.",
      "includesLabel": "WHAT YOU CAN EXPECT",
      "forLabel": "GOOD FOR",
      "items": [
        {
          "id": "strength",
          "title": "Strength & Muscle",
          "small": "BUILD YOUR FOUNDATION",
          "desc": "Learn the essentials of strength training and develop a consistent routine.",
          "icon": "barbell",
          "includes": [
            "Weight-training fundamentals",
            "Lifting technique & good form",
            "Gradually increasing resistance"
          ],
          "audience": "Beginners & strength enthusiasts"
        },
        {
          "id": "weight",
          "title": "Weight Management",
          "small": "MOVE WITH A PLAN",
          "desc": "Build an exercise routine to support your long-term weight-management goals.",
          "icon": "target",
          "includes": [
            "Cardio & resistance exercise",
            "Weekly workout structure",
            "Sustainable activity habits"
          ],
          "audience": "People seeking a structured routine"
        },
        {
          "id": "personal",
          "title": "Personal Training",
          "small": "COACHING THAT FITS",
          "desc": "Explore personalised support built around your starting point and goals.",
          "icon": "user",
          "includes": [
            "Initial goal-setting discussion",
            "One-to-one guided workouts",
            "Technique & progress reviews"
          ],
          "audience": "Anyone wanting individual guidance"
        },
        {
          "id": "bodybuilding",
          "title": "Physique Development",
          "small": "TRAIN WITH INTENT",
          "desc": "A focused approach to muscle development and physique-oriented training.",
          "icon": "bolt",
          "includes": [
            "Muscle-focused exercise selection",
            "Training technique & form",
            "Progress-oriented routines"
          ],
          "audience": "People focused on physique goals"
        },
        {
          "id": "cardio",
          "title": "Cardio & Functional Fitness",
          "small": "EVERYDAY PERFORMANCE",
          "desc": "Work on endurance, movement quality and everyday physical fitness.",
          "icon": "heart",
          "includes": [
            "Cardio-conditioning activities",
            "Functional movement circuits",
            "Mobility & core exercises"
          ],
          "audience": "People seeking overall fitness"
        }
      ]
    },
    "memberships": {
      "eyebrow": "SIMPLE. CLEAR. FLEXIBLE.",
      "title": "INVEST IN\nYOURSELF.",
      "p": "Choose a membership that fits your routine. All displayed prices are provisional and awaiting final branch-wise confirmation.",
      "monthly": "Monthly",
      "sixmonths": "6 Months",
      "annual": "Annual",
      "duration": "Unlimited access",
      "highlight": "POPULAR CHOICE",
      "included": "Membership benefits and add-ons will be confirmed before launch.",
      "cta": "Ask about this plan",
      "plansNote": "Prices are indicative only. Final terms, joining fees, branch access and optional add-ons will be published after approval.",
      "addon": "MORE WAYS TO TRAIN",
      "addonText": "Personal coaching, specialist sessions and other add-ons can be introduced once the gym confirms availability and pricing.",
      "branchSelect": "Choose your preferred branch",
      "quote": "A commitment to progress, on your terms."
    },
    "gallery": {
      "eyebrow": "LIFE INSIDE 4Z",
      "title": "THE SPACE.\nTHE ENERGY.",
      "p": "A look inside 4Z Gym through real brand, training and athlete photography.",
      "photos": [
        "Focus",
        "Discipline",
        "Community",
        "Progress",
        "Everyday strength",
        "Your next chapter"
      ]
    },
    "contact": {
      "eyebrow": "LET’S GET MOVING",
      "title": "YOUR JOURNEY\nSTARTS HERE.",
      "p": "Have a question or want to see the gym? Choose a branch and send us a message. Our team will respond to confirm visit requests.",
      "name": "Your name",
      "phone": "Phone number",
      "email": "Email (optional)",
      "branch": "Preferred branch",
      "interest": "Interested in",
      "date": "Preferred visit date (optional)",
      "message": "Your message (optional)",
      "agree": "I agree to be contacted by 4Z Gym about this request and have read the privacy notice.",
      "submit": "Send request",
      "sending": "Sending…",
      "sent": "Request received. We will be in touch soon.",
      "savedNotMailed": "Your request was saved, but the notification was delayed. Please call us if urgent.",
      "fail": "We could not send your request. Please try again or contact the gym directly.",
      "needConfig": "Online submissions are not yet connected. Please contact the gym by phone or email.",
      "selectBranch": "Select a branch",
      "selectInterest": "Select an option",
      "general": "General inquiry",
      "visiting": "Gym visit",
      "member": "Membership",
      "personal": "Personal training",
      "program": "Training programs",
      "formTitle": "SEND US A MESSAGE",
      "direct": "PREFER TO TALK?",
      "directText": "Call or email us directly — we are happy to help.",
      "sendEmail": "Email 4Z Gym",
      "note": "A visit request is not an automatic booking. A team member will confirm with you.",
      "invalid": "Please check the required fields and try again."
    },
    "about": {
      "eyebrow": "OUR STORY",
      "title": "STRENGTH FOR BODY.\nPEACE FOR MIND.",
      "p": "4Z Gym is rooted in a simple idea: building strength should be about more than lifting weights. It should help you feel more capable, consistent and confident in everyday life.",
      "mission": "OUR MISSION",
      "missionCopy": "Create a motivating, supportive place to train — one that respects every individual’s starting point.",
      "vision": "OUR VISION",
      "visionCopy": "Grow a connected fitness community across both locations, with coaching and consistency at the center.",
      "founder": "The founder behind the vision",
      "two": "Two locations, one community."
    },
    "faq": {
      "title": "QUESTIONS? ANSWERED.",
      "q": [
        [
          "What are your opening hours?",
          "Both branches are currently listed as open daily from 6:00 AM to 10:00 PM."
        ],
        [
          "Can I visit before joining?",
          "Yes. Send a visit request and the team will get in touch to confirm a suitable time."
        ],
        [
          "Are prices the same at both branches?",
          "The listed plans are provisional. Please confirm branch-specific pricing and access before joining."
        ],
        [
          "Do you offer personal training?",
          "Personal training is a proposed service; contact the team to confirm current availability and packages."
        ]
      ]
    },
    "cta": {
      "eyebrow": "READY WHEN YOU ARE",
      "title": "START STRONG.\nSTAY STRONG.",
      "p": "Your next chapter doesn’t have to wait. Find your branch, discover your options and take the first step.",
      "button": "Get in touch"
    },
    "footer": {
      "line": "Strength for body. Peace for mind.",
      "quick": "QUICK LINKS",
      "locations": "LOCATIONS",
      "contact": "GET IN TOUCH",
      "copyright": "All rights reserved.",
      "social": "Follow our journey"
    },
    "privacy": {
      "title": "PRIVACY POLICY",
      "p": "4Z Gym uses the details you submit through our website to respond to membership inquiries and visit requests. We request only necessary contact information, including name, phone, branch and the nature of your inquiry. Form submissions may be stored securely with a hosting/database provider and sent to our official contact email. We do not sell inquiry information. Contact 4zgymsl@gmail.com for access, corrections or deletion questions. Please review and approve this policy with suitable legal advice before launch."
    },
    "terms": {
      "title": "WEBSITE TERMS",
      "p": "Information on this preview website, including prices, service availability, is subject to confirmation. A submitted gym visit request is not a confirmed appointment. A gym membership is not activated by submitting a form. Please contact 4Z Gym for current fees, conditions, opening hours and availability. These terms are draft information pending owner review."
    }
  },
  "si": {
    "htmlLang": "si",
    "menu": {
      "home": "මුල් පිටුව",
      "about": "අපේ කතාව",
      "founder": "අසංක ගැන",
      "locations": "ශාඛා",
      "programs": "පුහුණු වැඩසටහන්",
      "memberships": "සාමාජිකත්වය",
      "gallery": "ඡායාරූප",
      "contact": "සම්බන්ධ වන්න",
      "visit": "එන්න වෙලාවක් වෙන්කරගන්න",
      "faq": "නිතර අසන ප්‍රශ්න"
    },
    "common": {
      "learn": "තවත් දැනගන්න",
      "explore": "බලන්න",
      "join": "සාමාජිකත්ව සැලසුම් බලන්න",
      "location": "අපේ ශාඛා",
      "from": "සිට",
      "everyday": "සෑම දිනකම විවෘතයි",
      "branch": "ශාඛාව",
      "back": "මුල් පිටුවට",
      "currency": "රු.",
      "coming": "අලුත් ඡායාරූප ළඟදීම",
      "call": "අමතන්න",
      "directions": "එන පාර බලන්න",
      "whatsapp": "WhatsApp එකෙන් අමතන්න",
      "hours": "විවෘතව ඇති වේලාවන්",
      "locationDetails": "ලිපිනය",
      "photo": "සැබෑ 4Z Gym ඡායාරූප",
      "unconfirmed": "මිල ගණන් තවමත් තහවුරු කර නැහැ",
      "coach": "නිර්මාතෘ සහ ශාරීරික යෝග්‍යතා පුහුණුකරු",
      "inquiry": "වැඩි විස්තර අහන්න",
      "book": "එන්න වෙලාවක් වෙන්කරගන්න",
      "all": "සියල්ල බලන්න",
      "seePlans": "සාමාජිකත්ව සැලසුම් බලන්න",
      "locationNote": "එන්න කලින් නවගමුව ශාඛාවේ නිවැරදි පිහිටීම අපෙන් අහලා දැනගන්න."
    },
    "seo": {
      "home": "4Z Gym | Strength for Body. Peace for Mind.",
      "about": "අපේ කතාව | 4Z Gym",
      "founder": "අසංක රජිත | 4Z Gym",
      "locations": "අපේ ශාඛා | 4Z Gym",
      "programs": "පුහුණු වැඩසටහන් | 4Z Gym",
      "memberships": "සාමාජිකත්ව මිල ගණන් | 4Z Gym",
      "gallery": "ඡායාරූප | 4Z Gym",
      "contact": "සම්බන්ධ වන්න | 4Z Gym",
      "privacy": "පෞද්ගලිකත්ව ප්‍රතිපත්තිය | 4Z Gym",
      "terms": "කොන්දේසි | 4Z Gym"
    },
    "hero": {
      "kicker": "ශාඛා දෙකකින් ඔබ ළඟට.",
      "line1": "අද පටන්ගන්න.",
      "line2": "ඉදිරියට යන්න.",
      "body": "සිරුරට ශක්තියත්, මනසට සැහැල්ලුවත් එක්කරගන්න. ඔබේ fitness ඉලක්කයට යන ගමන ඇහැලියගොඩ හෝ නවගමුව 4Z Gym එකෙන් පටන්ගන්න.",
      "cta1": "සාමාජිකත්ව සැලසුම් බලන්න",
      "cta2": "ළඟම ශාඛාව බලන්න",
      "side": "හැම දවසකම තව පියවරක්.",
      "tag": "සිරුරට ශක්තිය. මනසට සැනසීම.",
      "stat1": "ජිම් ශාඛා",
      "stat2": "දිනපතා විවෘතයි",
      "stat3": "ඔබේ අලුත් ආරම්භය"
    },
    "intro": {
      "eyebrow": "4Z GYM වෙත සාදරයෙන් පිළිගන්නවා",
      "heading": "ඔබේ ඉලක්කයට\nඅපෙන් මඟපෙන්වීම.",
      "p": "ජිම් එකට එන්නේ පළමු වතාවට වුණත්, කාලයක් තිස්සේ පුහුණු වෙන කෙනෙක් වුණත්, ඔබට ගැළපෙන ආරම්භයක් මෙතැන තියෙනවා. නිවැරදි මඟපෙන්වීමක් එක්ක, ඔබේ වේගයෙන් ඉදිරියට යන්න අපි උදව් කරනවා.",
      "a": "ඔබත් අපේ කණ්ඩායමේ කෙනෙක්",
      "ad": "එකිනෙකාට සහය වෙමින් පුහුණු වෙන සුහද පරිසරයක්.",
      "b": "පියවරෙන් පියවර දියුණුවක්",
      "bd": "පටන්ගන්න තැන ඉඳන් ඊළඟ ඉලක්කය දක්වා ඔබට සහය.",
      "c": "ඔබට පහසු ශාඛාවක්",
      "cd": "ඇහැලියගොඩ හෝ නවගමුව—ඔබට ළඟම තැන තෝරාගන්න."
    },
    "founder": {
      "eyebrow": "4Z GYM නිර්මාතෘ",
      "title": "අසංක\nරජිත.",
      "sub": "ජාත්‍යන්තර සුදුසුකම් ලත් Fitness Coach සහ Personal Trainer",
      "p": "අසංක රජිත, ජාත්‍යන්තර සුදුසුකම් සහ පුළුල් වෘත්තීය අත්දැකීම් ඇති fitness පුහුණුකරුවෙක්. ඩුබායිහි ප්‍රමුඛතම ජිම් ජාලයක් වන GymNation හි Personal Trainer ලෙස සේවය කර ඇති ඔහු, ශ්‍රී ලංකා කායවර්ධන හා ශාරීරික යෝග්‍යතා සම්මේලනය (SLBBFF) යටතේ ජාතික මට්ටමේ කායවර්ධන තරගවලටත් සහභාගි වී තිබෙනවා. විද්‍යාත්මක දැනුම සහ ප්‍රායෝගික අත්දැකීම් එකට ගෙන, ඔබේ fitness ඉලක්ක කරා යන්න ඔහු මඟපෙන්වනවා.",
      "story": "අසංක ගැන තවත් දැනගන්න",
      "pull": "දිනපතා කරන පුංචි කැපවීම්, ලොකු වෙනසකට මුල පුරනවා.",
      "cred": "සුදුසුකම් සහ සහතික",
      "team": "අපේ පුහුණු කණ්ඩායම",
      "teamTitle": "ඔබට මඟපෙන්වන\nඅපේ කණ්ඩායම.",
      "qual": [
        [
          "NASM Certified Personal Trainer (CPT – USA)",
          "ඇමරිකාවේ National Academy of Sports Medicine වෙතින් ලත්, ලොව පුරා පිළිගැනෙන පුද්ගලික පුහුණුකරු සුදුසුකම."
        ],
        [
          "ISSA Certified Specialist in Fitness Nutrition (USA)",
          "International Sports Sciences Association වෙතින් ලත් ක්‍රීඩා සහ fitness පෝෂණ සැලසුම් පිළිබඳ විශේෂඥ සුදුසුකම."
        ],
        [
          "REPs Level 3 Certified Personal Trainer (UK / UAE)",
          "Register of Exercise Professionals වෙතින් ලත්, වෘත්තීය පුහුණුකරුවන් සඳහා වන ජාත්‍යන්තර ප්‍රමිතියේ සහතිකය."
        ],
        [
          "NVQ Level 4 – Physical Fitness Trainer",
          "South Asian Academy of Sport Science (SAASS) වෙතින් ලත් ශාරීරික යෝග්‍යතා පුහුණුකරු සුදුසුකම."
        ],
        [
          "Certified Power Aerobics Instructor",
          "South Asian Academy of Sport Science (SAASS) වෙතින් ලත් Power Aerobics උපදේශක සහතිකය."
        ]
      ],
      "work": "හිටපු Personal Fitness Trainer – GymNation, Dubai",
      "sport": "ජාතික මට්ටමේ කායවර්ධන තරගකරුවෙක් – ශ්‍රී ලංකාව",
      "approach": "පුහුණුවට ඔහුගේ ප්‍රවේශය",
      "philosophy": "ඔබට ගැළපෙන සැලැස්මකින් පටන්ගමු.",
      "philosophyText": "හැම කෙනාගේම සිරුර, අත්දැකීම් සහ ඉලක්ක වෙනස්. ඒ නිසා අසංකගේ පුහුණුව ආරම්භ වෙන්නේ ඔබව හොඳින් තේරුම් ගැනීමෙන්. නිවැරදි ව්‍යායාම, පෝෂණය සහ දිගටම පවත්වාගන්න පුළුවන් පුරුදු ඒ සැලැස්මේ කොටසක්.",
      "bioLabel": "අසංකගේ ගමන",
      "bioTitle": "උනන්දුවෙන් ඇරඹුණු\nවෘත්තීය ගමනක්.",
      "bio": [
        "ශාරීරික යෝග්‍යතාව සහ ක්‍රීඩා දක්ෂතා ගැන තිබුණු දිගුකාලීන උනන්දුව අසංක තම වෘත්තිය බවට පත්කරගත්තේ විද්‍යාත්මක දැනුමට මුල් තැන දෙමින්. South Asian Academy of Sport Science (SAASS) ආයතනයෙන් NVQ Level 4 Physical Fitness Trainer සහ Certified Power Aerobics Instructor සුදුසුකම් ලබාගත් ඔහු, පසුව NASM-CPT (USA), ISSA Exercise Nutrition Specialist (USA) සහ REPs Level 3 Personal Training ජාත්‍යන්තර සහතිකත් ලබාගත්තා.",
        "ශ්‍රී ලංකා කායවර්ධන හා ශාරීරික යෝග්‍යතා සම්මේලනය (SLBBFF) සංවිධානය කළ ජාතික මට්ටමේ කායවර්ධන තරගවලට සහභාගි වීමෙන්, ඔහුගේ දැනුමට තරග අත්දැකීමත් එකතු වුණා. සිරුරේ මේද ප්‍රමාණය අඩු කිරීම, මාංශපේශි වර්ධනය සහ තරගයකට අවශ්‍ය ශරීර හැඩය සකස් කරගැනීම ගැන ඔහුට ලැබුණේ ප්‍රායෝගික අවබෝධයක්.",
        "ඩුබායිහි GymNation ආයතනයේ Professional Personal Trainer ලෙස සේවය කරමින් අසංක ජාත්‍යන්තර මට්ටමේ පුහුණු අත්දැකීම් ලබාගත්තා. VIP සේවාලාභීන්, විදේශගතව ජීවත් වන අය සහ fitness වෙනුවෙන් කැපවුණු අය ඇතුළු විවිධ පසුබිම්වල පිරිසකට ඔහු පුහුණුව ලබා දී තිබෙනවා.",
        "එක් එක් පුද්ගලයාගේ සිරුර සහ ඉලක්ක වෙනස් බව අසංක හොඳින් තේරුම් ගන්නවා. ඒ අනුව ඔහු සකස් කරන්නේ විද්‍යාත්මක පදනමක් ඇති, ඔබටම ගැළපෙන ව්‍යායාම සහ පෝෂණ සැලසුම්. මේදය අඩු කරගැනීම, මාංශපේශි වර්ධනය, සිරුර හැඩගස්වාගැනීම හෝ දෛනික කටයුතුවලට අවශ්‍ය ශක්තිය වැඩි කරගැනීම—ඔබේ ඉලක්කය කුමක් වුණත් දිගුකාලීන ප්‍රගතියකට ඔහු මඟපෙන්වනවා."
      ],
      "credLabel": "දේශීය සහ ජාත්‍යන්තර සුදුසුකම්",
      "experienceTitle": "ජාත්‍යන්තර සේවා සහ ක්‍රීඩා අත්දැකීම්",
      "workDetail": "ඩුබායිහි ප්‍රමුඛ ජිම් ජාලයක විවිධ සේවාලාභීන්ට ජාත්‍යන්තර ප්‍රමිතියේ පුද්ගලික පුහුණුව සහ සිරුර හැඩගස්වාගැනීමට මඟපෙන්වීම ලබා දී තිබෙනවා.",
      "sportDetail": "ශ්‍රී ලංකා කායවර්ධන හා ශාරීරික යෝග්‍යතා සම්මේලනයේ (SLBBFF) නිල ජාතික මට්ටමේ තරගවලට සහභාගි වී තිබෙනවා.",
      "specialtiesTitle": "විශේෂ දැනුම සහ පුහුණු ක්ෂේත්‍ර",
      "specialties": [
        "පුද්ගලික පුහුණුව සහ සිරුර හැඩගස්වාගැනීම",
        "කායවර්ධන තරග සඳහා සූදානම් කිරීම සහ මාංශපේශි වර්ධනය",
        "විද්‍යාත්මක ක්‍රමවලින් මේදය අඩු කිරීම සහ බර පාලනය",
        "Power Aerobics සහ හෘදයේ ක්‍රියාකාරීත්වය වැඩිදියුණු කරන පුහුණුව",
        "පුද්ගලික ක්‍රීඩා පෝෂණ සැලසුම් සහ ප්‍රෝටීන්, කාබෝහයිඩ්‍රේට්, මේද අවශ්‍යතා සැලසුම් කිරීම",
        "නිවැරදි ඉරියව් පවත්වාගැනීම සහ තුවාල වළක්වාගැනීමට මඟපෙන්වීම"
      ],
      "femaleCoach": "කාන්තා පුහුණුකරු"
    },
    "locations": {
      "eyebrow": "ඔබට ළඟම 4Z GYM",
      "title": "ශාඛා දෙකයි.\nඅපි එකම කණ්ඩායමයි.",
      "p": "වැඩට යන ගමන් හෝ ගෙදරට ළඟින්—ඔබේ දවසට පහසුම 4Z Gym ශාඛාව තෝරාගන්න.",
      "ehe": "රේල්වේ පාර, ඇහැලියගොඩ",
      "nawa": "සීතාවකපුර / නවගමුව",
      "view": "මේ ශාඛාව ගැන බලන්න",
      "locIntro": "අපි හමුවෙමු",
      "locHero": "ඔබට පහසු තැනින්\nපටන්ගන්න.",
      "locDesc": "එන්න කලින් ලිපිනය, විවෘත වේලාවන් සහ සාමාජිකත්ව සැලසුම් මෙතැනින් බලන්න. තවත් විස්තර ඕනෑ නම් අපිට කතා කරන්න.",
      "open": "පෙ.ව. 6:00 – ප.ව. 10:00 · දිනපතා",
      "mapNote": "පැමිණීමට පෙර නිවැරදි පිවිසුම සහ මාර්ගය තහවුරු කරගන්න.",
      "facilities": "ශාඛාවේ පහසුකම්",
      "facilityNote": "පහත පහසුකම් ඔබ තෝරාගත් ශාඛාවේ තිබෙනවාද කියලා එන්න කලින් අපෙන් අහලා දැනගන්න.",
      "amenityLabels": [
        "බර පුහුණුවට උපකරණ",
        "කාඩියෝ ව්‍යායාම සඳහා ඉඩකඩ",
        "පුද්ගලික පුහුණුව",
        "ඇඳුම් මාරු කරගැනීමට ඉඩකඩ",
        "වාහන නැවැත්වීමේ පහසුකම්",
        "බඩු තබන්න ලොකර්"
      ],
      "visit": "එන්න වෙලාවක් වෙන්කරගන්න",
      "visitDesc": "ඔබට පහසු දිනය අපට එවන්න. අපේ කණ්ඩායම කතා කරලා වෙලාව තහවුරු කරයි."
    },
    "programs": {
      "eyebrow": "ඔබේ ඉලක්කය මොකක්ද?",
      "title": "ඔබට ගැළපෙන\nපුහුණුවක්.",
      "p": "ජිම් එකට අලුත් වුණත්, ඊළඟ fitness ඉලක්කයට සූදානම් වුණත්, ඔබට ගැළපෙන පුහුණු ක්‍රමයක් තෝරාගන්න. වැඩසටහන් ගැන වැඩි විස්තර අපේ කණ්ඩායමෙන් දැනගන්න.",
      "note": "වැඩසටහන් සහ සැසි ලබාගත හැකි වේලාවන් ඔබ තෝරාගත් ශාඛාවෙන් විමසා තහවුරු කරගන්න.",
      "includesLabel": "පුහුණුවට ඇතුළත් දේ",
      "forLabel": "කාටද ගැළපෙන්නේ?",
      "items": [
        {
          "id": "strength",
          "title": "ශක්තිය සහ මාංශපේශි වර්ධනය",
          "small": "නිවැරදිව පටන්ගන්න",
          "desc": "බර පුහුණුවේ මූලික දේ ඉගෙනගෙන, ඔබට දිගටම කරගෙන යන්න පුළුවන් ව්‍යායාම රටාවක් හදාගන්න.",
          "icon": "barbell",
          "includes": [
            "බර සමඟ කරන මූලික ව්‍යායාම",
            "නිවැරදි ඉරියව්වෙන් ව්‍යායාම කිරීම",
            "ඔබේ දියුණුව අනුව ක්‍රමයෙන් බර වැඩි කිරීම"
          ],
          "audience": "ජිම් එකට අලුත් අයට සහ ශක්තිය වැඩි කරගන්න කැමති අයට"
        },
        {
          "id": "weight",
          "title": "බර පාලනය",
          "small": "සැලැස්මක් එක්ක ඉදිරියට",
          "desc": "ඔබේ බර පාලනය කරගන්න උදව් වෙන, දෛනික ජීවිතයට ගැළපෙන ව්‍යායාම රටාවක් හදාගන්න.",
          "icon": "target",
          "includes": [
            "කාඩියෝ සහ බර සමඟ කරන ව්‍යායාම",
            "සතියට ගැළපෙන පුහුණු සැලැස්මක්",
            "දිගටම පවත්වාගන්න පුළුවන් ක්‍රියාශීලී පුරුදු"
          ],
          "audience": "බර පාලනයට නිසි ව්‍යායාම සැලැස්මක් අවශ්‍ය අයට"
        },
        {
          "id": "personal",
          "title": "පුද්ගලික පුහුණුව",
          "small": "ඔබටම වෙන්වුණු මඟපෙන්වීමක්",
          "desc": "ඔබේ අත්දැකීම්, හැකියාවන් සහ ඉලක්ක අනුව පුහුණුකරුවෙකුගේ පුද්ගලික මඟපෙන්වීම ලබාගන්න.",
          "icon": "user",
          "includes": [
            "ඔබේ ඉලක්ක ගැන මුලින්ම කතාබහක්",
            "පුහුණුකරුවෙකු සමඟ පුද්ගලික ව්‍යායාම සැසි",
            "ව්‍යායාම කරන ආකාරය සහ ප්‍රගතිය පරීක්ෂා කිරීම"
          ],
          "audience": "තමන්ටම ගැළපෙන පුහුණුවක් සහ වැඩි අවධානයක් අවශ්‍ය අයට"
        },
        {
          "id": "bodybuilding",
          "title": "සිරුර හැඩගස්වාගැනීම",
          "small": "පැහැදිලි ඉලක්කයක් සමඟ",
          "desc": "මාංශපේශි වර්ධනය කරගනිමින් ඔබ බලාපොරොත්තු වෙන ශරීර හැඩයට ළඟාවෙන්න.",
          "icon": "bolt",
          "includes": [
            "මාංශපේශි වර්ධනයට ගැළපෙන ව්‍යායාම",
            "නිවැරදි ඉරියව් සහ ව්‍යායාම ක්‍රම",
            "ඔබේ ප්‍රගතිය අනුව පුහුණු සැලසුම්"
          ],
          "audience": "මාංශපේශි වර්ධනයට සහ සිරුර හැඩගස්වාගන්න කැමති අයට"
        },
        {
          "id": "cardio",
          "title": "කාඩියෝ සහ ක්‍රියාකාරී පුහුණුව",
          "small": "දවස පුරා ක්‍රියාශීලීව ඉන්න",
          "desc": "ඉක්මනින් වෙහෙසට පත් නොවී, පහසුවෙන් එදිනෙදා වැඩ කරගන්න අවශ්‍ය ශක්තිය සහ යෝග්‍යතාව වැඩි කරගන්න.",
          "icon": "heart",
          "includes": [
            "දරාගැනීමේ හැකියාව වැඩි කරන කාඩියෝ ව්‍යායාම",
            "එදිනෙදා චලන පහසු කරන පුහුණුව",
            "නම්‍යශීලී බව සහ උදරය ආශ්‍රිත මාංශපේශි ශක්තිමත් කිරීම"
          ],
          "audience": "සමස්ත ශාරීරික යෝග්‍යතාව වැඩි කරගන්න කැමති අයට"
        }
      ]
    },
    "memberships": {
      "eyebrow": "ඔබේ දවසට ගැළපෙන සැලැස්මක්",
      "title": "ඔබ වෙනුවෙන්\nකාලයක් වෙන්කරන්න.",
      "p": "මාසයක්, මාස හයක් හෝ අවුරුද්දක්—ඔබට පහසු සාමාජිකත්ව සැලැස්ම තෝරාගන්න. පෙන්වා ඇති මිල ගණන් තාවකාලික නිසා, ඔබේ ශාඛාවෙන් අවසන් ගාස්තුව තහවුරු කරගන්න.",
      "monthly": "මාසයක්",
      "sixmonths": "මාස 6",
      "annual": "අවුරුද්දක්",
      "duration": "සීමාවකින් තොරව ව්‍යායාම කරන්න",
      "highlight": "වැඩි දෙනාගේ තේරීම",
      "included": "ඔබේ සාමාජිකත්ව කාලය තුළ සීමාවකින් තොරව ව්‍යායාම කරන්න. අමතර සේවා ගැන ශාඛාවෙන් විමසන්න.",
      "cta": "මේ සැලැස්ම ගැන අහන්න",
      "plansNote": "මිල ගණන් තාවකාලිකයි. එක්වීමට පෙර අවසන් ගාස්තුව, ලියාපදිංචි ගාස්තු, භාවිත කළ හැකි ශාඛා සහ අමතර සේවා ගැන අපෙන් දැනගන්න.",
      "addon": "පුහුණුවට තවත් විකල්ප",
      "addonText": "පුද්ගලික පුහුණුව හෝ විශේෂ සැසියක් අවශ්‍යද? ලබාගත හැකි සේවා සහ ගාස්තු අපේ කණ්ඩායමෙන් විමසන්න.",
      "branchSelect": "ඔබට පහසු ශාඛාව තෝරන්න",
      "quote": "ඔබේ ඉලක්කයට, ඔබට ගැළපෙන සැලැස්මක්."
    },
    "gallery": {
      "eyebrow": "4Z GYM එක ඇතුළට බලමු",
      "title": "අපේ තැන.\nඅපේ කණ්ඩායම.",
      "p": "අපේ ජිම් එක, පුහුණුවීම් සහ කණ්ඩායමේ විශේෂ අවස්ථා ඡායාරූපවලින් බලන්න.",
      "photos": [
        "පුහුණුවට අවධානය",
        "කැපවීම",
        "අපේ කණ්ඩායම",
        "දියුණුව",
        "දිනෙන් දින ශක්තිමත්ව",
        "අලුත් ආරම්භයක්"
      ]
    },
    "contact": {
      "eyebrow": "අපි කතා කරමු",
      "title": "පළමු පියවර\nඅදම තියන්න.",
      "p": "වැඩි විස්තර දැනගන්න ඕනෑද? ජිම් එක බලන්න එන්න කැමතිද? ඔබට පහසු ශාඛාව තෝරලා පණිවිඩයක් එවන්න. අපේ කණ්ඩායම ඔබට කතා කරයි.",
      "name": "ඔබේ නම",
      "phone": "දුරකථන අංකය",
      "email": "ඊමේල් ලිපිනය (කැමති නම්)",
      "branch": "ඔබ කැමති ශාඛාව",
      "interest": "දැනගන්න කැමති මොනවා ගැනද?",
      "date": "එන්න කැමති දිනය (කැමති නම්)",
      "message": "ඔබේ පණිවිඩය (කැමති නම්)",
      "agree": "මේ විමසීම ගැන 4Z Gym කණ්ඩායම මාව සම්බන්ධ කරගන්නවාට මම එකඟයි. පෞද්ගලිකත්ව ප්‍රතිපත්තියත් කියවා තිබෙනවා.",
      "submit": "පණිවිඩය යවන්න",
      "sending": "යවමින්…",
      "sent": "ඔබේ පණිවිඩය ලැබුණා. අපි ඉක්මනින් ඔබට කතා කරන්නම්.",
      "savedNotMailed": "ඔබේ පණිවිඩය සුරැකුණා. හදිසි කාරණයක් නම් අපිට කතා කරන්න.",
      "fail": "ඉල්ලීම යැවීමට නොහැකි වුණා. නැවත උත්සාහ කරන්න හෝ දුරකථනයෙන් අමතන්න.",
      "needConfig": "අන්තර්ජාල ඉල්ලීම් පද්ධතිය තවම සම්බන්ධ කර නැත. කරුණාකර දුරකථනයෙන් හෝ ඊමේල් මඟින් සම්බන්ධ වන්න.",
      "selectBranch": "ශාඛාව තෝරන්න",
      "selectInterest": "අදාළ සේවාව තෝරන්න",
      "general": "වෙනත් විස්තර දැනගැනීම",
      "visiting": "ජිම් එක බලන්න පැමිණීම",
      "member": "සාමාජිකත්වය",
      "personal": "පුද්ගලික පුහුණුව",
      "program": "පුහුණු වැඩසටහන්",
      "formTitle": "පණිවිඩයක් යවන්න",
      "direct": "කතා කරන්න කැමතිද?",
      "directText": "අපිට කතා කරන්න. නැත්නම් ඊමේල් එකක් එවන්න.",
      "sendEmail": "4Z Gym වෙත ඊමේල්",
      "note": "ඔබේ පණිවිඩය ලැබුණු පසු, පැමිණීමට පහසු වේලාවක් අපේ කණ්ඩායම ඔබ සමඟ කතා කර තහවුරු කරයි.",
      "invalid": "අවශ්‍ය විස්තර නිවැරදිව ඇතුළත් කරන්න."
    },
    "about": {
      "eyebrow": "අපේ කතාව",
      "title": "සිරුරට ශක්තිය.\nමනසට සැනසීම.",
      "p": "4Z Gym පටන්ගත්තේ සරල අදහසකින්. ව්‍යායාම කිරීමෙන් සිරුර ශක්තිමත් වෙනවා වගේම, දවසේ වැඩවලට මුහුණ දෙන්න අවශ්‍ය විශ්වාසයත් ලැබෙන්න ඕනෑ. ඒ වෙනුවෙන් ඔබට කැමැත්තෙන් ඇවිත්, දිගටම පුහුණු වෙන්න පුළුවන් තැනක් අපි හදනවා.",
      "mission": "අපේ මෙහෙවර",
      "missionCopy": "ඔබ කොතැනින් පටන්ගත්තත්, දිරිගැන්වීමත් නිවැරදි මඟපෙන්වීමත් ලැබෙන පුහුණු පරිසරයක් ලබාදීම.",
      "vision": "අපේ දැක්ම",
      "visionCopy": "ශාඛා දෙකේම සාමාජිකයන්ට එකිනෙකාගෙන් දිරිගැන්වීම ලැබෙන, නිතිපතා පුහුණුව ජීවිතයේ කොටසක් කරගත් කණ්ඩායමක් ගොඩනැගීම.",
      "founder": "4Z GYM නිර්මාතෘ ගැන දැනගන්න",
      "two": "ශාඛා දෙකක්. එකම කණ්ඩායමක්."
    },
    "faq": {
      "title": "නිතර අසන ප්‍රශ්න",
      "q": [
        [
          "ජිම් එක විවෘතව තියෙන්නේ කීයටද?",
          "ශාඛා දෙකම දිනපතා උදේ 6 සිට රාත්‍රී 10 දක්වා විවෘතයි."
        ],
        [
          "සාමාජිකත්වය ගන්න කලින් බලන්න එන්න පුළුවන්ද?",
          "ඔව්, පුළුවන්. පණිවිඩයක් එවන්න. අපේ කණ්ඩායම ඔබට කතා කරලා පහසු වෙලාවක් තහවුරු කරයි."
        ],
        [
          "ශාඛා දෙකේම ගාස්තු එකමද?",
          "දැනට පෙන්වා ඇති ගාස්තු තාවකාලිකයි. එක්වීමට පෙර ඔබට පහසු ශාඛාවෙන් ගාස්තු සහ සාමාජිකත්ව විස්තර දැනගන්න."
        ],
        [
          "Personal Training ලබාගන්න පුළුවන්ද?",
          "පුද්ගලික පුහුණුව ගැන අපේ කණ්ඩායමෙන් විමසන්න. ලබාගත හැකි සැසි, වේලාවන් සහ ගාස්තු ගැන ඔවුන් ඔබට විස්තර ලබා දෙයි."
        ]
      ]
    },
    "cta": {
      "eyebrow": "පටන්ගන්න සූදානම්ද?",
      "title": "අද පටන්ගමු.\nඑකට ඉදිරියට යමු.",
      "p": "ඔබට පහසු ශාඛාව තෝරාගෙන අපිට කතා කරන්න. ඔබේ පළමු පියවරට අපෙන් මඟපෙන්වීම.",
      "button": "අපිට කතා කරන්න"
    },
    "footer": {
      "line": "සිරුරට ශක්තිය. මනසට සැනසීම.",
      "quick": "ප්‍රධාන පිටු",
      "locations": "ශාඛා",
      "contact": "සම්බන්ධ වන්න",
      "copyright": "සියලු හිමිකම් ඇවිරිණි.",
      "social": "අපේ ගමන සමඟ එක්වන්න"
    },
    "privacy": {
      "title": "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
      "p": "ඔබ මේ වෙබ් අඩවියෙන් එවන නම, දුරකථන අංකය, කැමති ශාඛාව සහ විමසීමේ විස්තර අපි භාවිත කරන්නේ ඔබට පිළිතුරු දෙන්න සහ පැමිණෙන වේලාවක් තහවුරු කරගන්නයි. මේ තොරතුරු ආරක්ෂිත දත්ත සේවාවක සුරැකීමට සහ අපේ නිල ඊමේල් ලිපිනයට යැවීමට ඉඩ තිබෙනවා. අපි ඔබේ විස්තර විකුණන්නේ නැහැ. ඔබේ තොරතුරු ගැන දැනගැනීමට, නිවැරදි කිරීමට හෝ ඉවත් කිරීමට 4zgymsl@gmail.com වෙත ලියන්න. මේ ප්‍රතිපත්තිය ප්‍රකාශයට පත් කිරීමට පෙර නීති උපදෙස් අනුව සමාලෝචනය කර අනුමත කළ යුතුයි."
    },
    "terms": {
      "title": "වෙබ් අඩවි කොන්දේසි",
      "p": "මෙහි පෙන්වා ඇති ගාස්තු සහ සේවා ලබාගත හැකි බව තවමත් තහවුරු කළ යුතුයි. ජිම් එක බලන්න එන්න පණිවිඩයක් යැවූ පසු, අපේ කණ්ඩායම ඔබට කතා කරලා වේලාවක් තහවුරු කරයි. පෝරමය යැවීමෙන් පමණක් සාමාජිකත්වයක් ලැබෙන්නේ නැහැ. වත්මන් ගාස්තු, විවෘත වේලාවන් සහ කොන්දේසි අපෙන් දැනගන්න. මේ කොන්දේසි හිමිකරුගේ සමාලෝචනයට යටත් කෙටුම්පතක්."
    }
  }
};
