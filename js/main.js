/**
 * SHANVI — Video Editor Portfolio JavaScript
 * Interactive controls: Filtering, Modal Video Player Simulator,
 * Before/After Color Grade Slider, Smooth Reveals, and Clipboard copy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectFiltering();
  initProjectModal();
  initDeskTourModal();
  initChannelProofModal();
  initResumeLightbox();
  initEmailCopy();
  initContactForm();
  initScrollAnimations();
  initCounters();
  initStudioPortalsAndModals();
  initFolderTabs();
});

/* --------------------------------------------------------------------------
   Project Data for Modal & Case Studies
   -------------------------------------------------------------------------- */
const projectsData = {
  'shanvi-video-1': {
    title: 'shanvi agarwal video 1',
    category: 'YouTube / Challenge-Based Content',
    format: '16:9 Landscape • 19:32 Master',
    image: 'assets/images/project_shanvi_video_1.png',
    videoUrl: 'shanvi agarwal video 1.mp4',
    videoAspect: '16/9',
    metric: '500+ Videos • 3 Yrs Experience',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Pacing & Retention', 'Sound Design'],
    summary: 'Challenge-based YouTube video crafted and edited with Adobe Premiere Pro & After Effects. I am also a YouTuber and content creator with 3 years of experience creating challenge-based videos. I have created 500+ YouTube videos and am highly skilled in video editing using Adobe Premiere Pro, with knowledge of Adobe After Effects.',
    strategy: 'Engineered with engaging challenge hooks, rapid narrative progression, sound effects, and comedic timing to maximize viewer retention across the full 19-minute runtime.',
    client: 'Shanvi Agrawal (YouTuber & Content Creator)'
  },
  'short-form-content': {
    title: 'Short Form Content',
    category: 'Short-form / 9:16 Vertical Reels',
    format: '9:16 Vertical • 3 Viral Cuts',
    image: 'assets/images/project_short_snapinsta.jpg',
    videoUrl: 'SnapInsta.to_AQMfSFHV71EQ6IbwIOgHJbT5KSgTeC5Rj6pfc8XqGYJCMLUmCOBk0u9AVY0dx9HQP6Ad71daNpE0iOs4Y7v_F7a17pa7p03ij9DBIsA.mp4',
    videoAspect: '9/16',
    metric: '3 Viral Short-Form Videos',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Kinetic Typography', 'Sound Design', 'Pacing & Hooks'],
    summary: 'High-retention vertical short-form curation engineered for Instagram Reels, YouTube Shorts, and TikTok algorithms. Features 3 distinct edits: Reel 1, Reel 2, and Reel 3. Use the switcher above to play each video.',
    strategy: 'Engineered with ruthless 0-to-2s visual hooks, dynamic kinetic caption animations, percussive sound hits, and seamless rhythmic cuts to maximize retention, completion rate, and algorithm reach.',
    client: 'Short-Form Creators & Media'
  },
  'short-snapinsta': {
    title: 'Reel 1',
    category: 'Short-form / 9:16 Vertical Reel',
    format: '9:16 Vertical Reel • 01:55 Master',
    image: 'assets/images/project_short_snapinsta.jpg',
    videoUrl: 'SnapInsta.to_AQMfSFHV71EQ6IbwIOgHJbT5KSgTeC5Rj6pfc8XqGYJCMLUmCOBk0u9AVY0dx9HQP6Ad71daNpE0iOs4Y7v_F7a17pa7p03ij9DBIsA.mp4',
    videoAspect: '9/16',
    metric: 'Reel 1 • 01:55',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Sound Design', 'Kinetic Motion'],
    summary: 'Viral social reel edit featuring dynamic pacing, immersive audio layering, and punchy visual transitions designed for social feeds.',
    strategy: 'Hooked audience curiosity right from frame 1 with rapid visual pacing and synchronized audio transitions to prevent scroll-away.',
    client: 'Social Media Creators'
  },
  'short-32': {
    title: 'Reel 2',
    category: 'Short-form / 9:16 Vertical Reel',
    format: '9:16 Vertical Reel • 00:43 Master',
    image: 'assets/images/project_short_32.jpg',
    videoUrl: '32.mp4',
    videoAspect: '9/16',
    metric: 'Reel 2 • 00:43',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Visual Rhythm', 'Sound FX'],
    summary: 'Fast-paced 43-second high-retention vertical edit built with punchy cuts, rhythmic motion, and synchronized sound design.',
    strategy: 'Tight cutting pace, percussive sound design accents, and rapid visual progression maintaining high attention from start to finish.',
    client: 'Social Media Creators'
  },
  'short-indian-history': {
    title: 'Reel 3',
    category: 'Short-form / 9:16 YouTube Shorts',
    format: '9:16 Vertical Shorts • 00:47 Master',
    image: 'assets/images/project_short_indian_history.jpg',
    videoUrl: 'biggest-misconception-indian-history.mp4',
    videoAspect: '9/16',
    metric: 'Reel 3 • 00:47',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Archival Graphics', 'Kinetic Subtitles'],
    summary: 'Educational and documentary-style YouTube Shorts edit uncovering the biggest misconceptions in Indian history. Features archival imagery, dynamic text animations, and cinematic background atmosphere.',
    strategy: 'High-curiosity intro statement paired with rapid visual proof and bold kinetic titles to drive massive watch time and comment engagement.',
    client: 'Stories & History Media'
  },
  'neural-age': {
    title: 'The Neural Age: How AI Redesigned Architecture',
    category: 'YouTube Long-form',
    format: '18:42 • 4K UHD Master',
    image: 'assets/images/project_tech_doc.jpg',
    metric: '1.4M Views • 68% AVD',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Sound Design', '3D Camera Tracker'],
    summary: 'A fast-paced, documentary-style deep dive exploring generative AI in structural engineering. Featured complex architectural motion tracking, custom 3D wireframe overlays, and layered soundscapes that held attention across an 18-minute runtime.',
    strategy: 'Engineered a retention hook with a cold open that immediately established stakes in 4 seconds. Integrated multi-track cinematic foley (whooshes, mechanical impacts, interface clicks) to punctuate technical diagrams and keep visual energy high.',
    client: 'Studio ArchiTech (920K Subscribers)'
  },
  'carla-bruni': {
    title: 'Faceless Documentary',
    category: 'Faceless Documentary',
    format: '08:14 • 4K Master',
    image: 'assets/images/project_carla_bruni.jpg',
    metric: 'Faceless Documentary',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Archival Pacing', 'Sound Design'],
    summary: 'A fast-paced, high-retention faceless documentary. Features archival motion animation cuts, seamless visual transitions, and layered cinematic sound design.',
    strategy: 'Engineered an attention-locking cold open. Applied rhythmic montage pacing synchronized to soundtrack cues, eliminating drop-off throughout the documentary.',
    client: 'Feeva (@Feeva2005)',
    youtubeUrl: 'https://www.youtube.com/watch?v=hgJH5OYxq2w',
    youtubeId: 'hgJH5OYxq2w'
  },
  'faceless-doc': {
    title: 'Faceless Documentary',
    category: 'Faceless Documentary',
    format: '08:14 • 4K Master',
    image: 'assets/images/project_carla_bruni.jpg',
    metric: 'Faceless Documentary',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Archival Pacing', 'Sound Design'],
    summary: 'A fast-paced, high-retention faceless documentary. Features archival motion animation cuts, seamless visual transitions, and layered cinematic sound design.',
    strategy: 'Engineered an attention-locking cold open. Applied rhythmic montage pacing synchronized to soundtrack cues, eliminating drop-off throughout the documentary.',
    client: 'Feeva (@Feeva2005)',
    youtubeUrl: 'https://www.youtube.com/watch?v=hgJH5OYxq2w',
    youtubeId: 'hgJH5OYxq2w'
  },
  'real-estate-films': {
    title: 'Real Estate Films',
    category: 'Real Estate / Architecture',
    format: '16:9 Landscape • 4K Master',
    image: 'assets/images/project_real_estate.png?v=3',
    videoUrl: 'real state film 1.mp4',
    videoAspect: '16/9',
    metric: 'Real State Film 1 & 2',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Gimbal Stabilization', 'Sound Design'],
    summary: 'A curated showcase of luxury architectural real estate cinematography featuring Real State Film 1 and Real State Films 2. Use the switcher tabs above to play each film.',
    strategy: 'Paced to highlight spatial grandeur, architecture, and interior design with smooth transitions and ambient soundscapes.',
    client: 'Luxury Real Estate Media'
  },
  'real-state-film-1': {
    title: 'Real State Film 1 (Option 1)',
    category: 'Real Estate / Architecture',
    format: '16:9 Landscape • Real Estate Film',
    image: 'assets/images/project_real_estate.png?v=3',
    videoUrl: 'real state film 1.mp4',
    videoAspect: '16/9',
    metric: 'Real State Film 1',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Gimbal Stabilization', 'Sound Design'],
    summary: 'A luxury architectural property walkthrough featuring fluid camera movements, natural lighting grade, and elegant speed ramps across exterior and interior spaces.',
    strategy: 'Paced to highlight spatial grandeur, architecture, and interior design with smooth transitions and ambient soundscapes.',
    client: 'Luxury Real Estate Media'
  },
  'real-state-films-2': {
    title: 'Real State Films 2 (Option 2)',
    category: 'Real Estate / Architecture',
    format: '16:9 Landscape • Real Estate Film',
    image: 'assets/images/project_real_estate.png?v=3',
    videoUrl: 'real state films 2.mp4',
    videoAspect: '16/9',
    metric: 'Real State Films 2',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Narrative Pacing', 'Spatial Audio'],
    summary: 'A narrative-driven luxury property showcase centered around lifestyle storytelling, emotional connection, and high-retention character-focused cuts.',
    strategy: 'Engineered with human-centric moments, percussive audio hits, and warm ambient lighting to evoke a genuine feeling of living in the residence.',
    client: 'Luxury Real Estate Media'
  },
  'real-state-film-tour': {
    title: 'Real State Film 1 (Option 1)',
    category: 'Real Estate / Architecture',
    format: '16:9 Landscape • Real Estate Film',
    image: 'assets/images/project_real_estate.png?v=3',
    videoUrl: 'real state film 1.mp4',
    videoAspect: '16/9',
    metric: 'Real State Film 1',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Gimbal Stabilization', 'Sound Design'],
    summary: 'A luxury architectural property walkthrough featuring fluid camera movements, natural lighting grade, and elegant speed ramps across exterior and interior spaces.',
    strategy: 'Paced to highlight spatial grandeur, architecture, and interior design with smooth transitions and ambient soundscapes.',
    client: 'Luxury Real Estate Media'
  },
  'real-state-film-story': {
    title: 'Real State Films 2 (Option 2)',
    category: 'Real Estate / Architecture',
    format: '16:9 Landscape • Real Estate Film',
    image: 'assets/images/project_real_estate.png?v=3',
    videoUrl: 'real state films 2.mp4',
    videoAspect: '16/9',
    metric: 'Real State Films 2',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Narrative Pacing', 'Spatial Audio'],
    summary: 'A narrative-driven luxury property showcase centered around lifestyle storytelling, emotional connection, and high-retention character-focused cuts.',
    strategy: 'Engineered with human-centric moments, percussive audio hits, and warm ambient lighting to evoke a genuine feeling of living in the residence.',
    client: 'Luxury Real Estate Media'
  },
  'madhav-enterprises': {
    title: 'Madhav Enterprises (Option 1)',
    category: 'Commercial / Corporate',
    format: '16:9 Landscape • 01:20 Corporate Film',
    image: 'assets/images/project_ai_corporate.jpg',
    videoUrl: 'Madhav Enterprises.MP4',
    videoAspect: '16/9',
    metric: 'Madhav Enterprises • 01:20',
    tools: ['Adobe Premiere Pro', 'AI Video Generation', 'Color Grading', 'Sound Design'],
    summary: 'A futuristic, high-impact corporate brand film for Madhav Enterprises integrating AI-driven visual sequences, cinematic pacing, and powerful brand storytelling.',
    strategy: 'Structured with dynamic pacing, synchronized cinematic score, and corporate branding cues that elevate enterprise prestige and retention.',
    client: 'Madhav Enterprises'
  },
  'bs-projects-film': {
    title: 'BS Projects: Corporate Film (Option 2)',
    category: 'Commercial / Corporate',
    format: '16:9 Landscape • 02:00 4K Corporate Film',
    image: 'assets/images/project_brand_commercial.jpg',
    videoUrl: 'BS PROJECTS FILM FINAL.mp4',
    videoAspect: '16/9',
    metric: 'BS Projects Film • 02:00',
    tools: ['Adobe Premiere Pro', 'AI Visuals', 'Sound FX', '4K Mastering'],
    summary: 'Flagship corporate film for BS Projects showcasing industrial excellence, modern infrastructure, and corporate vision through cinematic AI visual assets and polished sound design.',
    strategy: 'Engineered with compelling narrative arcs, seamless motion cuts, and immersive audio layering to showcase scale, innovation, and trust.',
    client: 'BS Projects'
  },
  'ai-corporate-videos': {
    title: 'AI Generated Corporate Videos: Madhav Enterprises',
    category: 'Commercial / Corporate',
    format: '16:9 Landscape • 01:20 (Option 1 of 2)',
    image: 'assets/images/project_ai_corporate.jpg',
    videoUrl: 'Madhav Enterprises.MP4',
    videoAspect: '16/9',
    metric: 'Madhav Enterprises • 01:20',
    tools: ['Adobe Premiere Pro', 'AI Video Generation', 'Color Grading', 'Sound Design'],
    summary: 'High-impact corporate brand film for Madhav Enterprises featuring AI-generated visual sequences, dynamic commercial pacing, and custom audio design. Use the options above to toggle to Option 2 (BS Projects Film).',
    strategy: 'Engineered with dynamic pacing, synchronized cinematic score, and corporate branding cues that elevate enterprise prestige and retention.',
    client: 'Madhav Enterprises'
  },
  'brand-films': {
    title: 'Brand Films (Video 1 & 2)',
    category: 'Commercial / Brand Film',
    format: '16:9 Landscape • 4K Commercial Master',
    image: 'assets/images/project_brand_film_1.jpg',
    videoUrl: '1.mp4',
    videoAspect: '16/9',
    metric: 'Brand Film 1 & 2',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Cinematic Grading', 'Sound Design'],
    summary: 'A curated showcase of cinematic brand films featuring Video 1 and Video 2. Crafted with dynamic commercial pacing, rich film color science, and evocative soundscapes. Use the switcher tabs above to toggle between films.',
    strategy: 'Engineered with emotional storytelling hooks, rhythmic cuts, and immersive audio layering that elevate brand prestige and retain viewer attention.',
    client: 'Commercial Brand Media'
  },
  'brand-film-1': {
    title: 'Brand Films: Video 1 (Option 1)',
    category: 'Commercial / Brand Film',
    format: '16:9 Landscape • 00:34 Commercial Film',
    image: 'assets/images/project_brand_film_1.jpg',
    videoUrl: '1.mp4',
    videoAspect: '16/9',
    metric: 'Video 1 • 00:34',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Color Grading', 'Sound Design'],
    summary: 'High-energy cinematic brand film (Video 1) featuring dynamic narrative transitions, rich film color grade, and meticulous sound effects synchronized to every visual beat.',
    strategy: 'Captures immediate audience intrigue in the first 3 seconds, building emotional momentum towards a strong, memorable brand climax.',
    client: 'Commercial Brand Media'
  },
  'brand-film-2': {
    title: 'Brand Films: Video 2 (Option 2)',
    category: 'Commercial / Brand Film',
    format: '16:9 Landscape • 00:24 Commercial Film',
    image: 'assets/images/project_brand_film_2.jpg',
    videoUrl: '2.mp4',
    videoAspect: '16/9',
    metric: 'Video 2 • 00:24',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Visual Rhythm', 'Sound FX'],
    summary: 'Sleek, atmospheric brand commercial (Video 2) featuring rich contrast, intentional pacing, and polished typographic title animations tailored for premium brand campaigns.',
    strategy: 'Engineered with tight cutting intervals, atmospheric lighting emphasis, and punchy audio cues to maximize brand impression and recall.',
    client: 'Commercial Brand Media'
  },
  'varun-mayya-intro': {
    title: 'Talking Head: Varun Mayya — Intro (Long Format)',
    category: 'YouTube Long-form / 16:9 Landscape',
    format: '16:9 Landscape • 01:00 Intro Cut',
    image: 'assets/images/project_varun_mayya_intro.jpg',
    videoUrl: 'varun-mayya-intro.mp4',
    videoAspect: '16/9',
    metric: '16:9 Long Format • varun-mayya-intro',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Kinetic Typography', 'Sound Design'],
    summary: 'High-impact widescreen YouTube intro edit for Varun Mayya crafted in 16:9 landscape. Features dynamic pacing, sound-synced kinetic text animations, high-contrast visual hooks, and seamless narrative rhythm.',
    strategy: 'Engineered an intense 3-second hook with synchronized sound effects and kinetic title animations, eliminating audience drop-off and setting an authoritative technical tone.',
    client: 'Varun Mayya'
  },
  'varun-mayya-reel': {
    title: 'Talking Head: Varun Mayya — Reel (Short Format)',
    category: 'Short-form / 9:16 Vertical Reel',
    format: '9:16 Vertical Reel • 00:58 Social Cut',
    image: 'assets/images/project_varun_mayya_reel.jpg',
    videoUrl: 'varun-mayya-reel.mp4',
    videoAspect: '9/16',
    metric: '9:16 Short Format • varun-mayya-reel',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Vertical Framing', 'Kinetic Captions', 'Sound Design'],
    summary: 'Viral vertical short-form reel for Varun Mayya engineered for Instagram Reels, YouTube Shorts, and TikTok algorithms. Features rapid visual cuts, sound-designed punchlines, and custom animated kinetic subtitles.',
    strategy: 'Structured with snappy 1-second cuts, bold pop-up callouts, and percussive audio hits to maximize 100%+ completion rates and algorithmic virality.',
    client: 'Varun Mayya'
  },
  'varun-mayya': {
    title: 'Talking Head: Varun Mayya (Short & Long Format)',
    category: 'Talking Head / Tech & Media',
    format: 'Dual Format • 16:9 Long & 9:16 Short',
    image: 'assets/images/project_varun_mayya_intro.jpg',
    videoUrl: 'varun-mayya-intro.mp4',
    videoAspect: '16/9',
    metric: 'Short & Long Format',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Kinetic Typography', 'Vertical Framing'],
    summary: 'Curated showcase of Varun Mayya video edits featuring both Long Format (varun-mayya-intro) and Short Format (varun-mayya-reel). Use the switcher tabs above to toggle between formats.',
    strategy: 'Exhibits dual-format editorial mastery: widescreen cinematic long-form storytelling alongside high-retention viral vertical short-form execution.',
    client: 'Varun Mayya'
  },
  'podcast-bill-ackman': {
    title: 'Bill Ackman: “Some Dominant Companies Will Just Disappear”',
    category: 'Podcast Editing & Mastering',
    format: '16:9 Landscape • 01:17:26 Podcast Master',
    image: 'assets/images/project_podcast_bill_ackman.jpg',
    youtubeId: 'Cpq8y5HpcF4',
    videoAspect: '16/9',
    metric: 'Full Episode • 01:17:26',
    tools: ['Adobe Premiere Pro', 'Multi-Cam Editing', 'Dialogue Clarity', 'Dynamic Pacing'],
    summary: 'Full-length 77-minute podcast episode featuring billionaire investor Bill Ackman discussing macroeconomic cycles, market disruption, and venture dynamics. Features seamless multi-camera switching, audio leveling, and high-retention pacing.',
    strategy: 'Engineered rhythm-focused multi-camera cuts synced with vocal cadence. Enhanced speech dynamics with multi-band compression, noise reduction, and subtle audio cues to maintain viewer engagement across the 77-minute runtime.',
    client: 'Finance & Tech Podcast Show'
  },
  'founders-room': {
    title: 'Bill Ackman: “Some Dominant Companies Will Just Disappear”',
    category: 'Podcast Editing & Mastering',
    format: '16:9 Landscape • 01:17:26 Podcast Master',
    image: 'assets/images/project_podcast_bill_ackman.jpg',
    youtubeId: 'Cpq8y5HpcF4',
    videoAspect: '16/9',
    metric: 'Full Episode • 01:17:26',
    tools: ['Adobe Premiere Pro', 'Multi-Cam Editing', 'Dialogue Clarity', 'Dynamic Pacing'],
    summary: 'Full-length 77-minute podcast episode featuring billionaire investor Bill Ackman discussing macroeconomic cycles, market disruption, and venture dynamics. Features seamless multi-camera switching, audio leveling, and high-retention pacing.',
    strategy: 'Engineered rhythm-focused multi-camera cuts synced with vocal cadence. Enhanced speech dynamics with multi-band compression, noise reduction, and subtle audio cues to maintain viewer engagement across the 77-minute runtime.',
    client: 'Finance & Tech Podcast Show'
  },
  'documentary-iyengar-bakery': {
    title: "Bangalore's Longest Mystery of the Iyengar Bakery",
    category: 'Documentary Storytelling',
    format: '16:9 Landscape • 10:18 Documentary Master',
    image: 'assets/images/project_documentary_iyengar_bakery.jpg',
    videoUrl: "vidssave.com Bangalore's Longest Mystery of the Iyengar Bakery _ Stories That Matter 720P.mp4",
    videoAspect: '16/9',
    metric: 'Documentary • 10:18 Master',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Archival Pacing', 'Sound Design'],
    summary: "Engaging investigative mini-documentary exploring the cultural history, culinary legacy, and bakery phenomenon of Bangalore's iconic Iyengar bakeries. Features rhythmic archival b-roll, vintage photo animation, and immersive atmospheric audio.",
    strategy: "Hooked viewers in the first 5 seconds with an intriguing cultural mystery. Layered ambient bakery field recordings, dynamic photographic push-ins, and rhythm-synchronized score transitions to keep completion rates high across the 10-minute story.",
    client: 'Stories That Matter'
  },
  'creator-playbook': {
    title: "Bangalore's Longest Mystery of the Iyengar Bakery",
    category: 'Documentary Storytelling',
    format: '16:9 Landscape • 10:18 Documentary Master',
    image: 'assets/images/project_documentary_iyengar_bakery.jpg',
    videoUrl: "vidssave.com Bangalore's Longest Mystery of the Iyengar Bakery _ Stories That Matter 720P.mp4",
    videoAspect: '16/9',
    metric: 'Documentary • 10:18 Master',
    tools: ['Adobe Premiere Pro', 'After Effects', 'Archival Pacing', 'Sound Design'],
    summary: "Engaging investigative mini-documentary exploring the cultural history, culinary legacy, and bakery phenomenon of Bangalore's iconic Iyengar bakeries. Features rhythmic archival b-roll, vintage photo animation, and immersive atmospheric audio.",
    strategy: "Hooked viewers in the first 5 seconds with an intriguing cultural mystery. Layered ambient bakery field recordings, dynamic photographic push-ins, and rhythm-synchronized score transitions to keep completion rates high across the 10-minute story.",
    client: 'Stories That Matter'
  },
  'tokyo-noir': {
    title: 'Tokyo After Midnight: The City in Rain',
    category: 'Cinematic Doc',
    format: '12:10 • Anamorphic 2.39:1',
    image: 'assets/images/project_tokyo_noir.jpg',
    metric: '820K Views • 74% Retention',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'Atmospheric Foley'],
    summary: 'Atmospheric visual essay chronicling the neon alleys of Shinjuku and Shibuya during midnight rainstorms. Focus was placed on rhythm, ambient pacing, and rich film color science.',
    strategy: 'Paced strictly to organic binaural field recordings. Applied custom node-based color grading in DaVinci Resolve to cleanly separate warm tungsten lanterns from deep midnight blue asphalt reflections.',
    client: 'Nomad Cinema (410K Subscribers)'
  },
  'creator-playbook': {
    title: 'The 1% Creator Framework: Viral Shorts Series',
    category: 'Short-form / Reels',
    format: '0:45 • 9:16 Vertical 4K',
    image: 'assets/images/project_viral_reel.jpg',
    metric: '4.8M Total Views • 94% Retention',
    tools: ['Premiere Pro', 'After Effects', 'Subtitles Engine', 'Sound Design'],
    summary: 'A 10-part high-retention short-form masterclass series designed to dominate Instagram Reels and YouTube Shorts algorithms. Fast cuts, tactile pop-up graphics, and kinetic typography.',
    strategy: 'Implemented 1.2-second cut intervals, sound-synced kinetic text highlights, and tactile 2D assets that eliminated dead space and drove 4.8 million views across the series.',
    client: 'Apex Media Studio'
  },
  'product-commercial-ad-1': {
    title: 'Product Commercial: Morning Mist (16:9 Long Format)',
    category: 'Commercial / Brand',
    format: '16:9 Landscape • 00:15 Commercial Cut',
    image: 'assets/images/project_product_commercial.png?v=2',
    videoUrl: 'product commercial ad 1.mp4',
    videoAspect: '16/9',
    metric: '16:9 Long Format • 15s',
    tools: ['Premiere Pro', 'After Effects', 'Speed Ramping', 'Sound FX', 'Color Grading'],
    summary: 'High-energy 16:9 landscape commercial ad for Morning Mist Refreshing Face Wash engineered for web and broadcast. Features cinematic widescreen framing, dynamic water splashes, speed ramps, and punchy macro match cuts.',
    strategy: 'Hooked viewers in the first 2 seconds with an explosive widescreen macro transition, seamless speed curves, and synchronized audio impacts to maximize engagement.',
    client: 'Morning Mist'
  },
  'product-commercial-ad-2': {
    title: 'Product Commercial: Morning Mist (9:16 Short Reel)',
    category: 'Commercial / Brand',
    format: '9:16 Vertical Reel • 00:08 Mobile Cut',
    image: 'assets/images/project_product_commercial.png?v=2',
    videoUrl: 'product commercial ad 2.mp4',
    videoAspect: '9/16',
    metric: '9:16 Short Format • 8s',
    tools: ['Premiere Pro', 'After Effects', 'Vertical Framing', 'Sound Design', 'Kinetic Motion'],
    summary: 'Snappy 9:16 vertical short-form commercial for Morning Mist crafted specifically for Instagram Reels, TikTok, and YouTube Shorts algorithms with ultra-punchy pacing.',
    strategy: 'Full 9:16 screen dominance optimized for 100% completion rate on mobile feeds, with rapid visual hooks and tight percussive audio hits.',
    client: 'Morning Mist'
  },
  'aero-pulse': {
    title: 'Product Commercials: Ad 1 & Ad 2',
    category: 'Commercial / Brand',
    format: '00:15 & 00:08 • 4K Masters',
    image: 'assets/images/project_product_commercial.png',
    videoUrl: 'product commercial ad 1.mp4',
    metric: 'Dual Commercial Ad Pack',
    tools: ['Premiere Pro', 'After Effects', 'Speed Ramping', 'Sound FX'],
    summary: 'Dual product commercial campaign comprising a 15-second showcase spot and an 8-second high-conversion cut with dynamic pacing.',
    strategy: 'Engineered with explosive visual hooks, seamless match cuts, and rhythmic sound design to captivate viewers and drive conversions.',
    client: 'Product Commercial Campaign'
  },
  'video-essay': {
    title: 'Why Modern Movies Feel Emotionally Flat',
    category: 'YouTube Long-form',
    format: '22:15 • 4K Video Essay',
    image: 'assets/images/project_video_essay.jpg',
    metric: '950K Views • 64% AVD',
    tools: ['Premiere Pro', 'Archival Sourcing', 'Audio Mastering', 'Motion Graphics'],
    summary: 'An investigative video essay comparing classic film pacing with modern blockbusters. Seamlessly interweaves archival film clips, script breakdown annotations, and subtle audio ducking.',
    strategy: 'Structured using narrative act breaks. Introduced custom animated film-strip transition overlays to guide viewers through historical decades without visual fatigue.',
    client: 'FilmFrame Analysis (680K Subscribers)'
  },
  'founders-room': {
    title: 'The Founders Room: Multi-cam Studio Show',
    category: 'YouTube Long-form',
    format: '45:00 • 3-Camera Switch',
    image: 'assets/images/project_podcast_show.jpg',
    metric: '320K Subscribers Channel',
    tools: ['Premiere Pro', 'Audition', 'Dynamic Lower-Thirds', 'AI Audio Cleanup'],
    summary: 'High-production 3-camera founder interview series. Polished live-switched pacing, automated studio lighting cues, dynamic speaker highlight lower-thirds, and AI-assisted background room tone removal.',
    strategy: 'Used dynamic J-cuts and L-cuts to make conversations flow with genuine human spontaneity while removing filler pauses and preserving natural laughter beats.',
    client: 'Ventures Today Media'
  }
};

/* --------------------------------------------------------------------------
   Project Filtering Logic
   -------------------------------------------------------------------------- */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        const categories = cardCategory.split(' ');
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Project Video Showcase Modal
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card');

  // Modal elements
  const modalImg = document.getElementById('modalImg');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalAdSwitcher = document.getElementById('modalAdSwitcher');
  const modalTabAd1 = document.getElementById('modalTabAd1');
  const modalTabAd2 = document.getElementById('modalTabAd2');
  const modalTabAd3 = document.getElementById('modalTabAd3');
  const modalYoutubeIframe = document.getElementById('modalYoutubeIframe');
  const modalYtCoverBar = document.getElementById('modalYtCoverBar');
  const modalVideoHud = document.getElementById('modalVideoHud');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalFormat = document.getElementById('modalFormat');
  const modalMetric = document.getElementById('modalMetric');
  const modalClient = document.getElementById('modalClient');
  const modalToolsList = document.getElementById('modalToolsList');
  const modalSummary = document.getElementById('modalSummary');
  const modalStrategy = document.getElementById('modalStrategy');
  const hudPlayBtn = document.getElementById('hudPlayBtn');
  const hudProgress = document.getElementById('hudProgress');

  let isPlaying = false;
  let playInterval = null;

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    if (modalImg) modalImg.src = data.image;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalFormat) modalFormat.textContent = data.format;
    if (modalMetric) modalMetric.textContent = data.metric;
    if (modalClient) modalClient.textContent = data.client;
    if (modalSummary) modalSummary.textContent = data.summary;
    if (modalStrategy) modalStrategy.textContent = data.strategy;

    // Render tools pills
    modalToolsList.innerHTML = '';
    data.tools.forEach(tool => {
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.textContent = tool;
      modalToolsList.appendChild(pill);
    });

    // Handle Local Video Player vs Embedded YouTube vs Simulator
    if (data.videoUrl) {
      if (modalVideoPlayer) {
        modalVideoPlayer.src = encodeURI(data.videoUrl);
        modalVideoPlayer.style.display = 'block';
        if (data.videoAspect === '9/16') {
          modalVideoPlayer.classList.add('vertical-player-mode');
        } else {
          modalVideoPlayer.classList.remove('vertical-player-mode');
        }
        modalVideoPlayer.currentTime = 0;
        modalVideoPlayer.play().catch(() => {});
      }
      if (modalYoutubeIframe) {
        modalYoutubeIframe.src = '';
        modalYoutubeIframe.style.display = 'none';
      }
      if (modalYtCoverBar) modalYtCoverBar.style.display = 'none';
      if (modalImg) modalImg.style.display = 'none';
      if (modalVideoHud) modalVideoHud.style.display = 'none';

      // Dual / Triple ad & reel switcher bar
      if (modalAdSwitcher) {
        if (projectId === 'short-form-content' || projectId === 'short-snapinsta' || projectId === 'short-32' || projectId === 'short-indian-history') {
          modalAdSwitcher.style.display = 'flex';
          const switcherLabel = modalAdSwitcher.querySelector('.modal-ad-switcher-label');
          if (switcherLabel) switcherLabel.textContent = 'Choose Reel:';
          if (modalTabAd1 && modalTabAd2 && modalTabAd3) {
            const isReel1 = (projectId === 'short-snapinsta' || projectId === 'short-form-content');
            const isReel2 = (projectId === 'short-32');
            const isReel3 = (projectId === 'short-indian-history');

            modalTabAd1.style.display = 'inline-flex';
            modalTabAd1.textContent = '📱 Reel 1';
            modalTabAd1.className = 'modal-ad-tab tab-short' + (isReel1 ? ' active' : '');
            modalTabAd1.setAttribute('data-target-id', 'short-snapinsta');

            modalTabAd2.style.display = 'inline-flex';
            modalTabAd2.textContent = '📱 Reel 2';
            modalTabAd2.className = 'modal-ad-tab tab-short' + (isReel2 ? ' active' : '');
            modalTabAd2.setAttribute('data-target-id', 'short-32');

            modalTabAd3.style.display = 'inline-flex';
            modalTabAd3.textContent = '📱 Reel 3';
            modalTabAd3.className = 'modal-ad-tab tab-short' + (isReel3 ? ' active' : '');
            modalTabAd3.setAttribute('data-target-id', 'short-indian-history');
          }
        } else if (projectId === 'product-commercial-ad-1' || projectId === 'product-commercial-ad-2' || projectId === 'aero-pulse') {
          if (modalTabAd3) modalTabAd3.style.display = 'none';
          modalAdSwitcher.style.display = 'flex';
          const switcherLabel = modalAdSwitcher.querySelector('.modal-ad-switcher-label');
          if (switcherLabel) switcherLabel.textContent = 'Format:';
          if (modalTabAd1 && modalTabAd2) {
            modalTabAd1.style.display = 'inline-flex';
            modalTabAd1.textContent = '🖥️ Long Format (16:9 • 15s)';
            modalTabAd1.className = 'modal-ad-tab' + (projectId === 'product-commercial-ad-1' || projectId === 'aero-pulse' ? ' active' : '');
            modalTabAd1.setAttribute('data-target-id', 'product-commercial-ad-1');

            modalTabAd2.style.display = 'inline-flex';
            modalTabAd2.textContent = '📱 Short Format (9:16 • 8s)';
            modalTabAd2.className = 'modal-ad-tab tab-short' + (projectId === 'product-commercial-ad-2' ? ' active' : '');
            modalTabAd2.setAttribute('data-target-id', 'product-commercial-ad-2');
          }
        } else if (projectId === 'real-estate-films' || projectId === 'real-state-film-tour' || projectId === 'real-state-film-story' || projectId === 'real-state-film-1' || projectId === 'real-state-films-2') {
          if (modalTabAd3) modalTabAd3.style.display = 'none';
          modalAdSwitcher.style.display = 'flex';
          const switcherLabel = modalAdSwitcher.querySelector('.modal-ad-switcher-label');
          if (switcherLabel) switcherLabel.textContent = 'Choose Film:';
          if (modalTabAd1 && modalTabAd2) {
            const isFilm1 = (projectId === 'real-state-film-1' || projectId === 'real-state-film-tour' || projectId === 'real-estate-films');
            modalTabAd1.style.display = 'inline-flex';
            modalTabAd1.textContent = '🎬 Option 1: Real State Film 1';
            modalTabAd1.className = 'modal-ad-tab' + (isFilm1 ? ' active' : '');
            modalTabAd1.setAttribute('data-target-id', 'real-state-film-1');

            modalTabAd2.style.display = 'inline-flex';
            modalTabAd2.textContent = '🎬 Option 2: Real State Films 2';
            modalTabAd2.className = 'modal-ad-tab' + (!isFilm1 ? ' active' : '');
            modalTabAd2.setAttribute('data-target-id', 'real-state-films-2');
          }
        } else if (projectId === 'madhav-enterprises' || projectId === 'bs-projects-film' || projectId === 'ai-corporate-videos') {
          if (modalTabAd3) modalTabAd3.style.display = 'none';
          modalAdSwitcher.style.display = 'flex';
          const switcherLabel = modalAdSwitcher.querySelector('.modal-ad-switcher-label');
          if (switcherLabel) switcherLabel.textContent = 'Choose Option:';
          if (modalTabAd1 && modalTabAd2) {
            const isMadhav = (projectId === 'madhav-enterprises' || projectId === 'ai-corporate-videos');
            modalTabAd1.style.display = 'inline-flex';
            modalTabAd1.textContent = '🎬 Option 1: Madhav Enterprises (01:20)';
            modalTabAd1.className = 'modal-ad-tab' + (isMadhav ? ' active' : '');
            modalTabAd1.setAttribute('data-target-id', 'madhav-enterprises');

            modalTabAd2.style.display = 'inline-flex';
            modalTabAd2.textContent = '🎬 Option 2: BS Projects Film (02:00)';
            modalTabAd2.className = 'modal-ad-tab' + (!isMadhav ? ' active' : '');
            modalTabAd2.setAttribute('data-target-id', 'bs-projects-film');
          }
        } else if (projectId === 'varun-mayya' || projectId === 'varun-mayya-intro' || projectId === 'varun-mayya-reel') {
          if (modalTabAd3) modalTabAd3.style.display = 'none';
          modalAdSwitcher.style.display = 'flex';
          const switcherLabel = modalAdSwitcher.querySelector('.modal-ad-switcher-label');
          if (switcherLabel) switcherLabel.textContent = 'Format:';
          if (modalTabAd1 && modalTabAd2) {
            const isIntro = (projectId === 'varun-mayya-intro' || projectId === 'varun-mayya');
            modalTabAd1.style.display = 'inline-flex';
            modalTabAd1.textContent = '🖥️ Long Format (varun-mayya-intro)';
            modalTabAd1.className = 'modal-ad-tab' + (isIntro ? ' active' : '');
            modalTabAd1.setAttribute('data-target-id', 'varun-mayya-intro');

            modalTabAd2.style.display = 'inline-flex';
            modalTabAd2.textContent = '📱 Short Format (varun-mayya-reel)';
            modalTabAd2.className = 'modal-ad-tab tab-short' + (!isIntro ? ' active' : '');
            modalTabAd2.setAttribute('data-target-id', 'varun-mayya-reel');
          }
        } else if (projectId === 'brand-films' || projectId === 'brand-film-1' || projectId === 'brand-film-2') {
          if (modalTabAd3) modalTabAd3.style.display = 'none';
          modalAdSwitcher.style.display = 'flex';
          const switcherLabel = modalAdSwitcher.querySelector('.modal-ad-switcher-label');
          if (switcherLabel) switcherLabel.textContent = 'Choose Film:';
          if (modalTabAd1 && modalTabAd2) {
            const isFilm1 = (projectId === 'brand-film-1' || projectId === 'brand-films');
            modalTabAd1.style.display = 'inline-flex';
            modalTabAd1.textContent = '🎬 Option 1: Video 1 (00:34)';
            modalTabAd1.className = 'modal-ad-tab' + (isFilm1 ? ' active' : '');
            modalTabAd1.setAttribute('data-target-id', 'brand-film-1');

            modalTabAd2.style.display = 'inline-flex';
            modalTabAd2.textContent = '🎬 Option 2: Video 2 (00:24)';
            modalTabAd2.className = 'modal-ad-tab' + (!isFilm1 ? ' active' : '');
            modalTabAd2.setAttribute('data-target-id', 'brand-film-2');
          }
        } else {
          modalAdSwitcher.style.display = 'none';
        }
      }
    } else if (data.youtubeId) {
      if (modalVideoPlayer) {
        modalVideoPlayer.pause();
        modalVideoPlayer.src = '';
        modalVideoPlayer.style.display = 'none';
      }
      if (modalAdSwitcher) modalAdSwitcher.style.display = 'none';
      if (modalYoutubeIframe) {
        modalYoutubeIframe.src = 'https://www.youtube.com/embed/' + data.youtubeId + '?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3';
        modalYoutubeIframe.style.display = 'block';
      }
      if (modalYtCoverBar) modalYtCoverBar.style.display = 'flex';
      if (modalImg) modalImg.style.display = 'none';
      if (modalVideoHud) modalVideoHud.style.display = 'none';
    } else {
      if (modalVideoPlayer) {
        modalVideoPlayer.pause();
        modalVideoPlayer.src = '';
        modalVideoPlayer.style.display = 'none';
      }
      if (modalAdSwitcher) modalAdSwitcher.style.display = 'none';
      if (modalYoutubeIframe) {
        modalYoutubeIframe.src = '';
        modalYoutubeIframe.style.display = 'none';
      }
      if (modalYtCoverBar) modalYtCoverBar.style.display = 'none';
      if (modalImg) modalImg.style.display = 'block';
      if (modalVideoHud) modalVideoHud.style.display = 'flex';
    }

    // Reset simulator player state
    isPlaying = false;
    if (hudPlayBtn) hudPlayBtn.innerHTML = '▶';
    if (hudProgress) hudProgress.style.width = '35%';

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    if (playInterval) clearInterval(playInterval);
    if (modalVideoPlayer) {
      modalVideoPlayer.pause();
      modalVideoPlayer.currentTime = 0;
      modalVideoPlayer.src = '';
      modalVideoPlayer.classList.remove('vertical-player-mode');
      modalVideoPlayer.style.display = 'none';
    }
    if (modalAdSwitcher) {
      modalAdSwitcher.style.display = 'none';
    }
    if (modalTabAd3) {
      modalTabAd3.style.display = 'none';
    }
    if (modalYoutubeIframe) {
      modalYoutubeIframe.src = '';
      modalYoutubeIframe.style.display = 'none';
    }
    if (modalYtCoverBar) {
      modalYtCoverBar.style.display = 'none';
    }
  }

  // Dual Ad / Film switcher clicks inside modal
  if (modalTabAd1) {
    modalTabAd1.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = modalTabAd1.getAttribute('data-target-id') || 'product-commercial-ad-1';
      openModal(targetId);
    });
  }
  if (modalTabAd2) {
    modalTabAd2.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = modalTabAd2.getAttribute('data-target-id') || 'product-commercial-ad-2';
      openModal(targetId);
    });
  }
  if (modalTabAd3) {
    modalTabAd3.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = modalTabAd3.getAttribute('data-target-id') || 'short-indian-history';
      openModal(targetId);
    });
  }

  // Dual & single video preview hover playback
  const previewVideos = document.querySelectorAll('.format-col, .dual-video-col, .real-state-col, .short-reel-col, .project-card-video');
  previewVideos.forEach(el => {
    const video = el.tagName === 'VIDEO' ? el : el.querySelector('video');
    const trigger = el.tagName === 'VIDEO' ? el.closest('.project-card') : el;
    if (!video || !trigger) return;
    trigger.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });
    trigger.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0.001;
    });
  });

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If clicking directly on an external link or YouTube action, allow default link opening
      if (e.target.closest('a') && e.target.closest('a').getAttribute('target') === '_blank') {
        return;
      }
      // Check for explicit sub-project trigger (e.g. Ad 1 / Ad 2 buttons or video columns)
      const subTarget = e.target.closest('[data-project-id]');
      const pid = subTarget ? subTarget.getAttribute('data-project-id') : card.getAttribute('data-project-id');
      if (pid) {
        openModal(pid);
      }
    });
  });

  // Direct modal trigger buttons (e.g., Theater Mode in More About Me)
  document.querySelectorAll('.js-open-project-direct').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pid = btn.getAttribute('data-project-id');
      if (pid) {
        openModal(pid);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Simulated Play/Pause in Modal
  if (hudPlayBtn && hudProgress) {
    hudPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isPlaying = !isPlaying;
      if (isPlaying) {
        hudPlayBtn.innerHTML = '❚❚';
        playInterval = setInterval(() => {
          let currentWidth = parseFloat(hudProgress.style.width) || 35;
          currentWidth += 1.5;
          if (currentWidth >= 100) {
            currentWidth = 0;
          }
          hudProgress.style.width = currentWidth + '%';
        }, 150);
      } else {
        hudPlayBtn.innerHTML = '▶';
        clearInterval(playInterval);
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Desk & Editing Setup Tour Modal (Interactive 3-Photo Gallery)
   -------------------------------------------------------------------------- */
function initDeskTourModal() {
  const deskModal = document.getElementById('deskModal');
  const deskModalCloseBtn = document.getElementById('deskModalCloseBtn');
  const deskMainImg = document.getElementById('deskMainImg');
  const deskPhotoCounter = document.getElementById('deskPhotoCounter');
  const deskPhotoCaption = document.getElementById('deskPhotoCaption');
  const deskPrevBtn = document.getElementById('deskPrevBtn');
  const deskNextBtn = document.getElementById('deskNextBtn');
  const thumbBtns = document.querySelectorAll('.lightbox-thumb-btn, .desk-thumb-btn');

  if (!deskModal) return;

  const deskPhotos = [
    {
      src: 'assets/images/shanvi_desk_angle_silverplaybutton.jpg',
      title: 'Main Workstation & YouTube Silver Creator Award',
      caption: 'Dell color-calibrated display with ocean wallpaper, custom gaming & 4K editing rig with RGB cooling, Sony MDR headphones & 100K YouTube Silver Creator Award plaque.'
    },
    {
      src: 'assets/images/shanvi_desk_topdown.jpg',
      title: 'Tactile Editing Deck & Keyboard Shortcut Mat',
      caption: 'Overhead view of the tactile workspace deck — extended shortcut mat (Premiere Pro, Photoshop, Excel), tactile mechanical keyboard, Sony monitoring & precision mouse.'
    },
    {
      src: 'assets/images/desk_setup_wide.jpg',
      title: 'Studio Perspective',
      caption: 'Wide-angle view of Shanvi\'s editing suite — ergonomic workstation, reference studio bookshelf, mechanical editing deck, and high-performance processing tower.'
    }
  ];

  let currentIndex = 0;

  function switchPhoto(index) {
    if (index < 0) {
      index = deskPhotos.length - 1;
    } else if (index >= deskPhotos.length) {
      index = 0;
    }
    currentIndex = index;
    const photo = deskPhotos[currentIndex];

    if (deskMainImg) {
      deskMainImg.classList.add('animating');
      deskMainImg.src = photo.src;
      deskMainImg.alt = photo.title + ' — Shanvi Video Editing Setup';
      setTimeout(() => {
        deskMainImg.classList.remove('animating');
      }, 150);
    }

    if (deskPhotoCounter) {
      deskPhotoCounter.textContent = `Photo ${currentIndex + 1} of ${deskPhotos.length}`;
    }

    if (deskPhotoCaption) {
      deskPhotoCaption.innerHTML = `<strong>${photo.title}</strong> • ${photo.caption}`;
    }

    thumbBtns.forEach((btn, idx) => {
      if (idx === currentIndex) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  window.switchDeskPhoto = switchPhoto;

  function openDeskModal(startIndex = 0) {
    document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
    switchPhoto(startIndex);
    deskModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDeskModal() {
    deskModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  const angleCard = document.getElementById('deskCardAngle');
  if (angleCard) {
    angleCard.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openDeskModal(0);
    });
    angleCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDeskModal(0);
      }
    });
  }

  const topdownCard = document.getElementById('deskCardOverhead') || document.getElementById('deskCardTopdown');
  if (topdownCard) {
    topdownCard.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openDeskModal(1);
    });
    topdownCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDeskModal(1);
      }
    });
  }

  const specsCard = document.getElementById('deskCardSpecs');
  if (specsCard) {
    specsCard.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openDeskModal(2);
    });
  }

  document.querySelectorAll('.js-open-desk').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(el.getAttribute('data-desk-index') || '0', 10);
      openDeskModal(isNaN(idx) ? 0 : idx);
    });
  });

  const openDeskBtn = document.getElementById('openDeskTourBtn');
  if (openDeskBtn) {
    openDeskBtn.addEventListener('click', () => openDeskModal(0));
  }

  if (deskModalCloseBtn) {
    deskModalCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDeskModal();
    });
  }

  if (deskPrevBtn) {
    deskPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchPhoto(currentIndex - 1);
    });
  }

  if (deskNextBtn) {
    deskNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchPhoto(currentIndex + 1);
    });
  }

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetIdx = parseInt(btn.dataset.index, 10);
      if (!isNaN(targetIdx)) {
        switchPhoto(targetIdx);
      }
    });
  });

  deskModal.addEventListener('click', (e) => {
    if (e.target === deskModal) {
      closeDeskModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!deskModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeDeskModal();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      switchPhoto(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      switchPhoto(currentIndex + 1);
    }
  });
}

/* --------------------------------------------------------------------------
   GeekyGamer Channel Proof Modal (Screenshots, Tabs, and Breakdown)
   -------------------------------------------------------------------------- */
function initChannelProofModal() {
  const proofModal = document.getElementById('channelProofModal');
  const proofCloseBtn = document.getElementById('channelProofCloseBtn');
  const proofMainImg = document.getElementById('proofMainImg');
  const proofCaptionText = document.getElementById('proofCaptionText');
  const proofPrevBtn = document.getElementById('proofPrevBtn');
  const proofNextBtn = document.getElementById('proofNextBtn');
  const proofTabs = document.querySelectorAll('.proof-tab-btn');
  const visualCards = document.querySelectorAll('.channel-visual-card');

  if (!proofModal) return;

  const proofPhotos = [
    {
      src: 'assets/images/geekygamer_viral_shorts.png',
      title: 'Viral Shorts Proof — Individual Edits Hit More Than 30M Views',
      caption: '<strong>🔥 Viral Shorts Dominance (Edits Hit >30M Views)</strong> • Engineered and edited by Shanvi: <em>Gaming Youtubers Jo Ki Bacche Hain</em> (<strong>28M views</strong>), <em>Duniya Ke Sabse Zada Paisa Chaapne Wale</em> (<strong>12M views</strong>), <em>Kya GTA 5 Sach Mein Best Game Hai</em> (<strong>8.8M views</strong>), <em>Games Like GTA 5</em> (<strong>6.2M views</strong>), <em>Duniya Ke Sabse Zada Hated Games</em> (<strong>5.8M views</strong>). Built with 1.2s rapid cut pacing, dynamic keyword pops, sound-synced whooshes, and 94%+ retention.'
    },
    {
      src: 'assets/images/geekygamer_channel_proof.png',
      title: 'GeekyGamer (@GeekyGamer__) — Co-Built from Scratch & Recently Sold',
      caption: '<strong>🎬 Co-Built from Scratch & Recently Sold</strong> • <strong>975K Subscribers • 328 Videos Mastered</strong>. I co-built this channel from the ground up alongside the creator. Handled end-to-end post-production across long-form gaming documentaries, scaling organic growth to 975,000+ verified subscribers — leading to a successful creator acquisition sale.'
    },
    {
      src: 'assets/images/geekygamer_header.png',
      title: 'Verified Creator Identity & Official YouTube Silver Plaque Status',
      caption: '<strong>🏷️ Official Verified Creator Identity</strong> • <strong>@GeekyGamer__ • 961K+ to 975K+ Scale</strong>. Official verified checkmark and YouTube Silver Creator Award recognition, proving proven ability to build and exit high-valuation creator channels.'
    },
    {
      src: 'assets/images/shanvi_hero_playbuttons.jpg',
      title: 'YouTube Silver Creator Awards Milestone',
      caption: '<strong>🏆 2× Creator Award Winner</strong> • Official YouTube Silver Creator Awards for co-building channels scaled to 100K+ and 900K+ subscribers.'
    }
  ];

  let currentProofIdx = 0;

  function setProofPhoto(idx) {
    if (idx < 0) idx = proofPhotos.length - 1;
    if (idx >= proofPhotos.length) idx = 0;
    currentProofIdx = idx;

    const data = proofPhotos[currentProofIdx];
    if (proofMainImg) {
      proofMainImg.classList.add('animating');
      proofMainImg.src = data.src;
      proofMainImg.alt = data.title;
      setTimeout(() => {
        proofMainImg.classList.remove('animating');
      }, 150);
    }

    if (proofCaptionText) {
      proofCaptionText.innerHTML = data.caption;
    }

    proofTabs.forEach((btn, i) => {
      if (i === currentProofIdx) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });
  }

  function openProofModal(initialIndex = 0) {
    document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
    setProofPhoto(initialIndex);
    proofModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProofModal() {
    proofModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Hook all visual cards and buttons with data-proof-index or .js-open-proof
  document.querySelectorAll('.js-open-proof').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const idxAttr = el.getAttribute('data-proof-index');
      if (idxAttr !== null) {
        const parsed = parseInt(idxAttr, 10);
        openProofModal(isNaN(parsed) ? 0 : parsed);
        return;
      }
      const target = el.getAttribute('data-proof-target');
      if (target === 'viral') openProofModal(0);
      else if (target === 'channel') openProofModal(1);
      else if (target === 'header') openProofModal(2);
      else if (target === 'awards') openProofModal(3);
      else {
        const idx = parseInt(el.getAttribute('data-proof-index') || '0', 10);
        openProofModal(isNaN(idx) ? 0 : idx);
      }
    });
  });

  const cardViral = document.getElementById('cardViralProof');
  if (cardViral) {
    cardViral.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openProofModal(0);
    });
  }

  const cardSubscribers = document.getElementById('cardSubscribersProof');
  if (cardSubscribers) {
    cardSubscribers.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openProofModal(1);
    });
  }

  const cardBanner = document.getElementById('cardBannerProof');
  if (cardBanner) {
    cardBanner.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openProofModal(2);
    });
  }

  visualCards.forEach(card => {
    const idxAttr = card.getAttribute('data-proof-index');
    const idx = idxAttr !== null ? parseInt(idxAttr, 10) : 0;

    card.addEventListener('click', () => {
      openProofModal(idx);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProofModal(idx);
      }
    });
  });

  // Dedicated button clicks inside cards
  const btnViral = document.getElementById('openViralProofBtn');
  if (btnViral) {
    btnViral.addEventListener('click', (e) => {
      e.stopPropagation();
      openProofModal(0);
    });
  }

  const btnGeeky = document.getElementById('openGeekyGamerBtn');
  if (btnGeeky) {
    btnGeeky.addEventListener('click', (e) => {
      e.stopPropagation();
      openProofModal(1);
    });
  }

  const btnHeader = document.getElementById('openHeaderProofBtn');
  if (btnHeader) {
    btnHeader.addEventListener('click', (e) => {
      e.stopPropagation();
      openProofModal(2);
    });
  }

  if (proofCloseBtn) {
    proofCloseBtn.addEventListener('click', closeProofModal);
  }

  proofModal.addEventListener('click', (e) => {
    if (e.target === proofModal) {
      closeProofModal();
    }
  });

  if (proofPrevBtn) {
    proofPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setProofPhoto(currentProofIdx - 1);
    });
  }

  if (proofNextBtn) {
    proofNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setProofPhoto(currentProofIdx + 1);
    });
  }

  proofTabs.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      setProofPhoto(idx);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!proofModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeProofModal();
    if (e.key === 'ArrowLeft') setProofPhoto(currentProofIdx - 1);
    if (e.key === 'ArrowRight') setProofPhoto(currentProofIdx + 1);
  });
}

/* --------------------------------------------------------------------------
   Copy Email to Clipboard with Toast Notification
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('.js-copy-email');
  const toast = document.getElementById('toastMsg');
  const emailToCopy = 'shanvi2100@gmail.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast('Email copied to clipboard! 📋 (shanvi2100@gmail.com)');
      }).catch(() => {
        // Fallback
        showToast('Email: shanvi2100@gmail.com');
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* --------------------------------------------------------------------------
   Contact Form Submission Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('.form-submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending Details...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Message Sent! ✨';
      submitBtn.style.background = '#10B981';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 4000);
    }, 900);
  });

  // Direct WhatsApp submission button
  const sendWhatsAppBtn = document.getElementById('sendViaWhatsAppBtn');
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const name = document.getElementById('clientName')?.value.trim() || '';
      const type = document.getElementById('projectType')?.value || 'Video Editing';
      const notes = document.getElementById('projectNotes')?.value.trim() || '';
      let message = 'Hi Shanvi! I saw your video editing portfolio and would like to discuss a project.';
      if (name) {
        message += `\n• Name: ${name}`;
      }
      if (type) {
        message += `\n• Project Scope: ${type}`;
      }
      if (notes) {
        message += `\n• Details: ${notes}`;
      }
      const waUrl = `https://wa.me/918868038588?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  }
}

/* --------------------------------------------------------------------------
   Scroll Animations (Subtle Fade-In & Reveal)
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const scrollTargets = document.querySelectorAll(
    '.section-header-row, .work-filters, .project-card, .folder-stack-header-row, .folder-drawer, .video-cta-hero, .site-footer-bottom'
  );

  if (!scrollTargets.length) return;

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  scrollTargets.forEach(el => {
    el.classList.add('reveal-on-scroll');

    // Stagger project cards in the grid for cascade entrance
    if (el.classList.contains('project-card')) {
      const parent = el.parentElement;
      if (parent) {
        const index = Array.from(parent.children).indexOf(el);
        const delay = (index % 3) * 90;
        el.style.transitionDelay = `${delay}ms`;
      }
    }

    // Stagger folder drawers
    if (el.classList.contains('folder-drawer')) {
      const parent = el.parentElement;
      if (parent) {
        const index = Array.from(parent.children).indexOf(el);
        const delay = index * 70;
        el.style.transitionDelay = `${delay}ms`;
      }
    }

    observer.observe(el);
  });
}

/* --------------------------------------------------------------------------
   Animated Number Counters for Stats
   -------------------------------------------------------------------------- */
function initCounters() {
  const statNumbers = document.querySelectorAll('.hero-stat-number[data-count]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let startVal = 0;
        const duration = 1400;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = targetVal / totalSteps;

        const counterTimer = setInterval(() => {
          startVal += increment;
          if (startVal >= targetVal) {
            el.textContent = targetVal + suffix;
            clearInterval(counterTimer);
          } else {
            el.textContent = Math.floor(startVal) + suffix;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

/* --------------------------------------------------------------------------
   Studio Portals & Dedicated Modals Controller
   Handles Desk Tour, Tools I Use, More About Me, Resume, and Channels Grown
   -------------------------------------------------------------------------- */
function initStudioPortalsAndModals() {
  function openModal(modalId) {
    if (!modalId) return;
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // If desk tour opened, ensure photo 0 active
    if (modalId === 'deskModal' && typeof window.switchDeskPhoto === 'function') {
      window.switchDeskPhoto(0);
    }
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    
    // Check if any modal is still active
    const remainingActive = document.querySelectorAll('.modal-backdrop.active');
    if (!remainingActive.length) {
      document.body.style.overflow = '';
    }
  }

  // 1. Triggers via .js-open-portal or data-modal attribute
  document.querySelectorAll('.js-open-portal, [data-modal]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      const modalId = trigger.getAttribute('data-modal');
      if (modalId) {
        e.preventDefault();
        openModal(modalId);
      }
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const modalId = trigger.getAttribute('data-modal');
        if (modalId) {
          e.preventDefault();
          openModal(modalId);
        }
      }
    });
  });

  // 2. Hash to modal mapping (retained for backward compatibility if needed)
  const hashToModalMap = {};

  // 3. Universal Close Buttons
  document.querySelectorAll('.js-close-modal, .modal-close-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentModal = btn.closest('.modal-backdrop');
      if (parentModal) {
        closeModal(parentModal);
      }
    });
  });

  // 4. Backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  // 5. Escape key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModals = document.querySelectorAll('.modal-backdrop.active');
      activeModals.forEach((modal) => closeModal(modal));
    }
  });

  // 6. Handle direct URL hash landing (e.g. site.com/#tools)
  function handleUrlHash() {
    const hash = window.location.hash ? window.location.hash.replace('#', '') : '';
    if (hash && hashToModalMap[hash]) {
      setTimeout(() => openModal(hashToModalMap[hash]), 120);
    }
  }

  window.addEventListener('hashchange', handleUrlHash);
  if (window.location.hash) {
    handleUrlHash();
  }
}

/* --------------------------------------------------------------------------
   Interactive Folder Tabs (Click to expand in Cobalt Blue, Pure Photos)
   -------------------------------------------------------------------------- */
function initFolderTabs() {
  const drawers = document.querySelectorAll('.folder-drawer');
  if (!drawers.length) return;

  function openSpecificDrawer(folderId, scrollIntoView = true) {
    let matched = null;
    drawers.forEach(d => {
      const isTarget = d.id === folderId || d.getAttribute('data-folder') === folderId;
      if (isTarget) {
        matched = d;
        d.classList.add('is-open');
        const btn = d.querySelector('.folder-tab-bar');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      } else {
        d.classList.remove('is-open');
        const btn = d.querySelector('.folder-tab-bar');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });

    if (matched && scrollIntoView) {
      const section = document.getElementById('folder-sections');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Click on any folder tab bar to toggle open / turn blue and reveal photos
  drawers.forEach(drawer => {
    const tabBar = drawer.querySelector('.folder-tab-bar');
    if (!tabBar) return;

    tabBar.addEventListener('click', (e) => {
      e.preventDefault();
      const isAlreadyOpen = drawer.classList.contains('is-open');

      if (isAlreadyOpen) {
        // Toggle closed (reverts to white)
        drawer.classList.remove('is-open');
        tabBar.setAttribute('aria-expanded', 'false');
      } else {
        // Close others so only the clicked tab turns vibrant cobalt blue
        drawers.forEach(d => {
          d.classList.remove('is-open');
          const btn = d.querySelector('.folder-tab-bar');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        drawer.classList.add('is-open');
        tabBar.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Header Nav Links Jump & Open: Click header links to scroll and activate that drawer
  document.querySelectorAll('[data-folder-jump], a[href="#desk-tour"], a[href="#channels"], a[href="#about"], a[href="#tools"], a[href="#experience"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const folderTarget = link.getAttribute('data-folder-jump') || link.getAttribute('href').replace('#', '');
      if (folderTarget) {
        e.preventDefault();
        openSpecificDrawer(folderTarget, true);
      }
    });
  });

  // Global Expand / Collapse controls
  const expandBtn = document.getElementById('expandAllFoldersBtn');
  const collapseBtn = document.getElementById('collapseAllFoldersBtn');

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      drawers.forEach(d => {
        d.classList.add('is-open');
        const btn = d.querySelector('.folder-tab-bar');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      });
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener('click', () => {
      drawers.forEach(d => {
        d.classList.remove('is-open');
        const btn = d.querySelector('.folder-tab-bar');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Click drawer photos that don't have dedicated triggers to open in clean preview lightbox
  document.querySelectorAll('.drawer-photo-card').forEach(card => {
    if (card.classList.contains('js-open-desk') || card.classList.contains('js-open-proof')) {
      return;
    }
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const img = card.querySelector('img');
      if (!img) return;
      const deskModal = document.getElementById('deskModal');
      const deskMainImg = document.getElementById('deskMainImg');
      const deskPhotoCaption = document.getElementById('deskPhotoCaption');
      const deskPhotoCounter = document.getElementById('deskPhotoCounter');
      if (deskModal && deskMainImg) {
        document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
        deskMainImg.src = img.src;
        if (deskPhotoCounter) deskPhotoCounter.textContent = 'Photo Preview';
        if (deskPhotoCaption) deskPhotoCaption.innerHTML = `<strong>${img.alt || 'Full Resolution Photo Preview'}</strong>`;
        deskModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });

    card.addEventListener('keydown', (e) => {
      if (card.classList.contains('js-open-desk') || card.classList.contains('js-open-proof')) {
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Check URL hash on page load (e.g. #desk-tour or #tools)
  const currentHash = window.location.hash ? window.location.hash.replace('#', '') : '';
  if (['desk-tour', 'channels', 'about', 'tools', 'experience', 'resume'].includes(currentHash)) {
    setTimeout(() => {
      openSpecificDrawer(currentHash, true);
    }, 150);
  }
}

/* --------------------------------------------------------------------------
   Official Resume Lightbox Modal
   -------------------------------------------------------------------------- */
function initResumeLightbox() {
  const resumeModal = document.getElementById('resumeModal');
  if (!resumeModal) return;

  function openResumeModal() {
    document.querySelectorAll('.modal-backdrop.active').forEach(m => m.classList.remove('active'));
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-open-resume').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openResumeModal();
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openResumeModal();
      }
    });
  });

  const closeBtn = document.getElementById('resumeModalCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeResumeModal();
    });
  }
}


