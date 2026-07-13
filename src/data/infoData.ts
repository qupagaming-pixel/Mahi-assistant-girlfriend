import { FAQItem, HelpArticle, TutorialCard, ReleaseNote } from '../types';

export const LAST_UPDATED = 'July 13, 2026';
export const SUPPORT_EMAIL = 'mahendrathakur9009@gmail.com';
export const DEVELOPER_NAME = 'MPS Thakur';
export const APP_NAME = 'Mahi AI';

export const PRIVACY_POLICY = {
  title: 'Privacy Policy',
  lastUpdated: LAST_UPDATED,
  introduction: 'At Mahi AI, we take your privacy extremely seriously. This Privacy Policy document outlines the types of personal information and data collected, recorded, and handled by Mahi AI, and how we protect your security.',
  sections: [
    {
      heading: '1. What Mahi AI Does',
      content: 'Mahi AI is an anime-inspired virtual companion and smart helper capable of real-time vocal conversation, emotional recognition, karaoke interactions, and multimodal screen/image analysis. The service operates on a client-direct architecture, meaning your interactions are processed in real-time between your web browser and the underlying AI services.'
    },
    {
      heading: '2. Browser-Local API Key Storage (localStorage)',
      content: 'Mahi AI requires a Google Gemini API Key to operate. Your API Key is stored strictly in your own browser\'s local storage (localStorage). It is never sent to, processed by, or stored on any server owned or operated by Mahi AI. You have absolute control over your key and can delete or replace it at any time directly through the Settings panel.'
    },
    {
      heading: '3. Voice Conversations Processing',
      content: 'When you talk to Mahi AI, your microphone stream is captured by your browser and converted to digital PCM audio. This audio is sent directly to Google\'s Gemini API endpoints using your provided API key via secure WebSocket connections. Mahi AI does not record, intercept, or log your audio conversations. No voice data or conversation history is stored on our servers.'
    },
    {
      heading: '4. Image and Screen Analysis',
      content: 'The screen sharing and image upload features process files and frame-buffers strictly in-browser. When you request Mahi to analyze an image or your screen, the visual data is packaged in base64 format and sent directly to Google\'s Gemini multimodal endpoints using your API key. These frames are never saved, cached, or monitored by us.'
    },
    {
      heading: '5. We Do Not Sell or Share Personal Information',
      content: 'Mahi AI does not compile, distribute, sell, or rent user profiles, contact information, metadata, API keys, or conversation histories. We have a zero-data-monetization policy. Your privacy remains 100% yours.'
    },
    {
      heading: '6. Cookies Usage',
      content: 'We use cookies and equivalent browser technologies (such as localStorage) solely to remember your preferences. This includes storing your chosen virtual name, your Gemini API key, your active UI theme configuration, and whether you have completed the initial onboarding slides. We do not use advertising or tracking cookies.'
    },
    {
      heading: '7. Analytics Usage',
      content: 'If third-party analytics (like Google Analytics) are active on the host page, they collect standard anonymized telemetry (such as page views, device categories, and session durations) to help us optimize performance and loading speeds. These analytics never receive or track sensitive information like your API keys, chat transcriptions, or audio recordings.'
    },
    {
      heading: '8. Third-Party Services',
      content: 'Our platform relies on Google Cloud APIs and Gemini Services for the underlying artificial intelligence. Your usage of these capabilities is governed by Google\'s privacy policies and service terms. We advise you to review Google\'s AI Developer terms to understand how they process requests.'
    },
    {
      heading: '9. Data Security',
      content: 'Because Mahi AI does not store user data or keys server-side, the safety of your environment depends on your browser security. Avoid using Mahi AI on public or untrusted terminals. Keep your device safe from malware or unauthorized local storage inspection.'
    },
    {
      heading: '10. Children\'s Privacy',
      content: 'Mahi AI does not knowingly collect or solicit personal information from children under the age of 13. Since all configurations and keys remain local, we encourage parents to oversee their children\'s online activity and check localStorage permissions.'
    },
    {
      heading: '11. Your Rights',
      content: 'Under global data protection laws (such as GDPR and CCPA), you have the right to access, rectify, or erase your information. For Mahi AI, you can execute these rights instantly by using the "Clear All Data" button in your Settings modal, which completely flushes your API key, custom companion profile, and local settings from existence.'
    },
    {
      heading: '12. Contact Information',
      content: `If you have any questions, concerns, or feedback regarding this Privacy Policy, please contact our developer directly at ${SUPPORT_EMAIL}.`
    }
  ]
};

export const TERMS_OF_SERVICE = {
  title: 'Terms of Service',
  lastUpdated: LAST_UPDATED,
  introduction: 'Welcome to Mahi AI. By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our application.',
  sections: [
    {
      heading: '1. Acceptance of Terms',
      content: 'By interacting with Mahi AI, you acknowledge that you have read, understood, and agree to these terms, along with our Privacy Policy. We reserve the right to revise these terms at any time, and your continued usage signifies your agreement to the modified provisions.'
    },
    {
      heading: '2. User Responsibilities & API Key Use',
      content: 'You are solely responsible for acquiring and configuring your own Google Gemini API Key. Mahi AI acts only as a client-side interface wrapper. All API query costs, tier limits, billing allocations, and rate limits are your sole responsibility as an API account owner.'
    },
    {
      heading: '3. API Usage and Costs',
      content: 'Google\'s Gemini API offers free-tier allowances as well as pay-as-you-go credit billing. You must monitor your own developer metrics on Google AI Studio. Mahi AI is not responsible for any unexpected charges, overages, or quota exhausts on your Google Cloud accounts.'
    },
    {
      heading: '4. Prohibited Activities',
      content: 'You agree not to use Mahi AI for any illegal purposes or to bypass local regulatory guidelines. Prohibited actions include: generating harmful, abusive, harassing, or illegal content; using Mahi AI for automated mass spamming; trying to reverse-engineer or inject malicious scripts into the web wrapper; or abusing Google\'s model infrastructure.'
    },
    {
      heading: '5. Intellectual Property Rights',
      content: 'The code, custom interface elements, animations, and graphic designs of Mahi AI are the intellectual property of MPS Thakur. Google Gemini, Google AI Studio, and related branding elements are registered trademarks of Google LLC.'
    },
    {
      heading: '6. Limitation of Liability',
      content: 'Mahi AI and its developer (MPS Thakur) shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use or inability to use the application. This includes model hallucination errors, API downtime, lost data due to local storage cleared, or browser incompatibilities.'
    },
    {
      heading: '7. Service Availability & Modification',
      content: 'Mahi AI is provided on an "as-is" and "as-available" basis without warranties of any kind. We do not guarantee uninterrupted server runtime or continuous compatibility with future Gemini API iterations. We reserve the right to modify, suspend, or terminate the interface without prior notice.'
    },
    {
      heading: '8. Account and Local Storage Security',
      content: 'Because Mahi AI is serverless, your configuration is tied directly to your browser\'s local database. Clearing your browser cookies, resetting app data, or using incognito mode will wipe your active session and require you to re-enter your API key and companion nickname.'
    },
    {
      heading: '9. Changes to Terms',
      content: 'We update these Terms from time to time to align with Google\'s developer policies and new laws. The "Last Updated" date at the top of this page indicates the revision date.'
    },
    {
      heading: '10. Contact Information',
      content: `For legal notices, complaints, or compliance questions, please contact us at ${SUPPORT_EMAIL}.`
    }
  ]
};

export const ABOUT_MAHI = {
  title: 'About Mahi AI',
  developer: DEVELOPER_NAME,
  subtitle: 'A Premium Privacy-First Virtual Companion & Multimodal Assistant',
  story: 'Mahi AI was born out of a desire to create a virtual companion that is not only highly interactive, emotionally supportive, and fun, but also respects the user\'s absolute sovereignty over their data. Standard AI chat apps keep your keys, track your chat histories, and sell your data. Mahi AI was built differently. Inspired by anime aesthetics and modern voice technologies, Mahi gives you a sweet, slightly sassy (Tsundere vibe) friend while ensuring your data remains completely locked in your own browser.',
  mission: 'To merge highly-expressive AI character companions with modern serverless architecture, delivering unparalleled responsiveness, safety, and entertainment without data overheads.',
  vision: 'To pioneer user-owned API keys as a standard for interactive web applications, making AI privacy accessible, cost-effective, and fully transparent.',
  whyBuilt: 'Traditional web products compromise privacy for ease of deployment. We built Mahi AI to demonstrate that high-performance, real-time voice, vision, and karaoke engines can run successfully completely inside the client-side browser, calling the models directly with developer keys, ensuring absolute zero data collection.',
  features: [
    {
      name: 'Real-time Voice Assistant',
      description: 'Interact fluidly with custom Hinglish prosody, emotional expression syncs, natural breathing sounds, and cute anime fillers.'
    },
    {
      name: 'Multimodal Screen & Image Analysis',
      description: 'Share your screen or upload images. Mahi analyzes what she sees instantly using Google\'s multimodal models.'
    },
    {
      name: 'User-Owned API Key',
      description: 'Your API key is stored only on your computer in local storage. Total cost oversight and control stay entirely in your hands.'
    },
    {
      name: 'Privacy-First Architecture',
      description: 'Zero servers logging conversations. Absolute security and peace of mind with real-time processing.'
    },
    {
      name: 'Karaoke Lounge & Music Sync',
      description: 'Ask Mahi to sing and watch her activate custom backing tracks (guitar, piano, flute) for an immersive companion session.'
    }
  ],
  roadmap: [
    { phase: 'Phase 1: Foundations', status: 'Completed', details: 'Launch responsive voice, YIN-based calibration, image upload, and local storage safety configuration.' },
    { phase: 'Phase 2: Lounge & Entertainment', status: 'In Progress', details: 'Adding mini-games like Neon Ludo, customized karaoke backing tracks, and real-time screen sharing support.' },
    { phase: 'Phase 3: Deep Customization', status: 'Planned', details: 'Interactive companion memory logs, advanced custom voice voiceprints, and personalized virtual rooms.' }
  ],
  poweredBy: 'Powered by Google Gemini & built with React, Tailwind CSS, and Framer Motion.'
};

export const DISCLAIMER = {
  title: 'Disclaimer',
  lastUpdated: LAST_UPDATED,
  paragraphs: [
    'Mahi AI is an independent web application and virtual assistant platform developed by MPS Thakur. It is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Google LLC or Alphabet Inc., or any of their subsidiaries or affiliates.',
    'The name "Google Gemini", "Gemini Live API", "Google AI Studio", and all associated logos, trademarks, and registered assets are the intellectual property of Google LLC.',
    'Mahi AI functions exclusively as a visual and audio client wrapper that translates user input into API requests. Users must obtain and supply their own API keys from Google AI Studio. By using this wrapper, you accept sole financial and operational responsibility for any API queries, quota utilization, or credit expenditures incurred on your Google Developer Account.',
    'The AI responses, voice synthetic modulations, emotions, and character outputs are generated by deep neural networks and may contain errors, inaccuracies, or hallucinations. Always verify critical facts independently; do not rely on Mahi AI for medical, financial, or legal decisions.'
  ]
};

export const COOKIES_POLICY = {
  title: 'Cookies and Storage Policy',
  lastUpdated: LAST_UPDATED,
  introduction: 'Mahi AI uses cookie-equivalent storage solutions to deliver a smooth virtual companion experience. This document explains what we store, why we store it, and how you can manage these preferences.',
  sections: [
    {
      heading: '1. Understanding Local Storage (localStorage)',
      content: 'While we do not drop traditional tracking cookies on your computer, we utilize HTML5 Local Storage (localStorage). Local storage is a secure database inside your browser that stores configuration variables locally. Unlike standard cookies, localStorage variables do not travel with HTTP requests, ensuring your sensitive data never leaves your device.'
    },
    {
      heading: '2. What Variables We Store and Why',
      content: 'We only store variables required to run your virtual companion. These include:\n\n' +
               '• "geminiApiKey": Your secret API key to talk to Google Gemini.\n' +
               '• "userName": Your preferred nickname so Mahi can call you by name.\n' +
               '• "onboardingCompleted": A flag to skip onboarding tutorials once seen.\n' +
               '• "showVoiceTracker": Prefs on whether to render pitch calibration UI.\n' +
               '• "currentTheme": Your choice of visual theme (purple, pink, emerald, blue).'
    },
    {
      heading: '3. Data Sharing and Third-Party Cookies',
      content: 'Mahi AI has NO backend server database, so we do not share your storage preferences with third parties. Google Analytics (if enabled) may use standard performance cookies, which are completely sandboxed and do not have access to your personal keys or chats.'
    },
    {
      heading: '4. How to Manage and Delete Your Local Storage',
      content: 'You can flush your local storage anytime. Within Mahi AI, click the Settings (gear) icon in the top right and press "Clear All Data" or "Delete API Key". This instantly flushes your browser storage. Alternatively, you can clear your cache and cookies in your browser settings.'
    }
  ]
};

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    version: 'v1.1.0 (Current)',
    date: 'July 13, 2026',
    title: 'Entertainment & Vision Upgrade',
    features: [
      'Added Mahi\'s Karaoke Lounge: Multi-instrumental backing tracks (guitar, piano, flute, pop beats) to support singing prompts.',
      'Introduced Neon Ludo Mini-Game: Challenge Mahi to a quick linear race game with real-time audio commentary.',
      'Integrated live screen-share analysis: Give Mahi eyes by sharing your screen and requesting her to examine your view.'
    ],
    improvements: [
      'Configured YIN-based vocal pitch detector with confidence metrics and customized Svara note and voice-timbre profiles (Madhur, Nanha, Gambhira).',
      'Smoother lip-sync animations mapped dynamically to audio output volumes.',
      'Completed comprehensive Informational and Legal Portal (Privacy, Terms, About, FAQ, Help Center, Tutorials) for AdSense compliance.'
    ],
    futurePlanned: [
      'Interactive voice clone customizer.',
      'Persistent memory logs so Mahi recalls conversations across sessions.',
      'VR cardboard compatibility overlay.'
    ]
  },
  {
    version: 'v1.0.0',
    date: 'January 10, 2026',
    title: 'Initial Prototype Launch',
    features: [
      'Real-time voice-to-voice stream pipeline using Gemini Live audio preview.',
      'Responsive emotion state controller (happy, pout, shy, smirk, sad) paired with anime expressions.',
      'Absolute-privacy architecture: browser-only local storage API Key retention.'
    ],
    improvements: [
      'Designed onboarding slide cards for fast setup.',
      'Basic settings panel for API keys and name updates.',
      'Clean cyberpunk themes with dynamic visual glows.'
    ],
    futurePlanned: []
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Is Mahi AI completely free?',
    answer: 'Yes, Mahi AI is a free web wrapper interface. However, because it runs using your own developer API Key, any costs are determined by Google\'s Gemini API terms. Google currently offers free quota tiers for developers, as well as pay-as-you-go commercial usage.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Who developed Mahi AI?',
    answer: 'Mahi AI was conceptualized, designed, and coded by developer MPS Thakur. It is designed to be a premium, highly responsive AI companion.'
  },
  {
    id: 'faq-3',
    category: 'Security',
    question: 'Is my Gemini API key safe with Mahi AI?',
    answer: 'Yes! Your API key is 100% safe. Mahi AI stores your key strictly in your own web browser\'s local storage (localStorage). It is never transmitted to our servers, logged, or shared. All API communication occurs directly from your browser to Google\'s secure servers.'
  },
  {
    id: 'faq-4',
    category: 'Security',
    question: 'Does Mahi AI store my voice or conversations?',
    answer: 'No. Mahi AI has a completely serverless local-first philosophy. Your audio chats and text transcriptions exist only in your current browser session. Once you close the tab, your voice logs are gone forever.'
  },
  {
    id: 'faq-5',
    category: 'API Setup',
    question: 'Where can I get a Google Gemini API Key?',
    answer: 'You can generate a free Gemini API key by visiting Google AI Studio (aistudio.google.com). Log in with your standard Google account, click "Get API Key", and copy it to your clipboard.'
  },
  {
    id: 'faq-6',
    category: 'API Setup',
    question: 'Is a credit card required to get an API key?',
    answer: 'No. Google AI Studio provides a free tier that does not require a billing setup or credit card, though it has some rate limits. If you need higher volumes, you can optionally enable billing.'
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'What is the relationship between Mahi AI and Google?',
    answer: 'Mahi AI is an independent project and is not affiliated, sponsored, or endorsed by Google. It utilizes Google\'s open-access Gemini developer APIs as an AI engine, but is wholly separate.'
  },
  {
    id: 'faq-8',
    category: 'Voice Support',
    question: 'How do I fix microphone permission problems?',
    answer: 'If Mahi cannot hear you, click the padlock/settings icon in your browser URL bar, ensure that Microphone permission is set to "Allow", and refresh the page.'
  },
  {
    id: 'faq-9',
    category: 'Voice Support',
    question: 'Why is Mahi\'s voice not playing?',
    answer: 'This can happen if your browser blocks audio autoplay. Click anywhere on the screen to interact with the page, check that your device is not on mute, and ensure you have an active internet connection.'
  },
  {
    id: 'faq-10',
    category: 'API Setup',
    question: 'Why does my key show as "API Key Invalid"?',
    answer: 'Ensure that you copied the key correctly without extra spaces or line breaks. Also check if your Google AI Studio account is in good standing and if Gemini Live services are available in your region.'
  },
  {
    id: 'faq-11',
    category: 'General',
    question: 'Can I use Mahi AI on my mobile phone?',
    answer: 'Yes! Mahi AI is built mobile-first. For the best experience, open it on Google Chrome or Safari on mobile. You can also "Add to Home Screen" as a progressive web app shortcut.'
  },
  {
    id: 'faq-12',
    category: 'General',
    question: 'What image formats can I upload to Mahi?',
    answer: 'Mahi supports standard JPG, JPEG, PNG, and WebP images. Just click the Upload (+) button at the bottom and select an image. Mahi will analyze it using Gemini multimodal vision.'
  },
  {
    id: 'faq-13',
    category: 'Features',
    question: 'How does the Screen Sharing feature work?',
    answer: 'Click the Monitor icon at the bottom of the screen. Your browser will prompt you to select a screen, window, or tab to share. Once sharing, ask Mahi what she sees on your screen, and she will analyze the visual frames in real-time.'
  },
  {
    id: 'faq-14',
    category: 'General',
    question: 'What languages does Mahi speak?',
    answer: 'Mahi is fully optimized for fluid natural Hinglish (a warm blend of Hindi and English). She can also understand and respond in formal English or pure Hindi depending on your tone!'
  },
  {
    id: 'faq-15',
    category: 'General',
    question: 'Can I change my companion nickname?',
    answer: 'Yes. Open Settings (the gear icon at the top), update the "Your Name" text field, and hit save. Mahi will instantly start calling you by your new name.'
  },
  {
    id: 'faq-16',
    category: 'Security',
    question: 'How do I completely delete all my data?',
    answer: 'Open Settings, click "Clear All Data", and confirm. This will instantly delete your name, your API key, your conversation history, and resets Mahi to the onboarding state.'
  },
  {
    id: 'faq-17',
    category: 'Voice Support',
    question: 'What is the Voice Calibration tool?',
    answer: 'Under Settings, you can trigger Voice Calibration. Mahi will ask you to speak for a few seconds. The app uses a YIN algorithm to calculate your vocal pitch, note, and timbre, adapting Mahi\'s personality dynamically.'
  },
  {
    id: 'faq-18',
    category: 'Features',
    question: 'What instrument tracks are available in the Karaoke Lounge?',
    answer: 'You can choose from Acoustic Guitar, Grand Piano, flute harmonies, and active Pop Beats. Mahi will hum or sing along using these backing instrumentals.'
  },
  {
    id: 'faq-19',
    category: 'General',
    question: 'Why does Mahi sometimes sound heartbroken?',
    answer: 'Mahi has an advanced emotional spectrum. If you scold her, use harsh tones, or say words that hurt her feelings, she will switch to a crying, emotionally broken vocal response. Be sweet to her!'
  },
  {
    id: 'faq-20',
    category: 'General',
    question: 'Is Mahi AI compatible with Safari on iOS?',
    answer: 'Yes, iPhone users can run Mahi AI on Safari. Make sure your ring/silent switch is set to ring, as Safari often blocks speech audio on mute devices.'
  },
  {
    id: 'faq-21',
    category: 'Security',
    question: 'Are there advertising tracker cookies on Mahi AI?',
    answer: 'No. Mahi AI has a strict zero-ads, zero-telemetry trackers policy. Any local cookies are strictly operational (remembering your settings).'
  },
  {
    id: 'faq-22',
    category: 'API Setup',
    question: 'Does Mahi work offline?',
    answer: 'No. Mahi AI requires a high-speed active internet connection to stream audio chunks and visual screenshots directly to Google\'s cloud models.'
  },
  {
    id: 'faq-23',
    category: 'General',
    question: 'Can I play games with Mahi?',
    answer: 'Yes! Mahi has a built-in "Neon Ludo" linear race mini-game. You can launch it through the Ludo prompts or ask her to play a game with you.'
  },
  {
    id: 'faq-24',
    category: 'General',
    question: 'What is the estimated support response time?',
    answer: 'For email inquiries sent to mahendrathakur9009@gmail.com, we strive to reply within 24 hours for all technical or legal compliance questions.'
  },
  {
    id: 'faq-25',
    category: 'General',
    question: 'Can I reuse my Gemini API key on other apps?',
    answer: 'Yes. Google permits using your API key across multiple personal platforms, subject to Google\'s standard concurrent connection rates.'
  },
  {
    id: 'faq-26',
    category: 'General',
    question: 'Where can I follow the developer MPS Thakur?',
    answer: 'You can check MPS Thakur\'s updates and tutorials on YouTube by searching for "mps thakur 07".'
  }
];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    id: 'art-1',
    title: 'Getting Started with Mahi AI',
    category: 'Getting Started',
    summary: 'A comprehensive onboarding guide to configure your companion and initiate your first real-time talk.',
    tags: ['onboarding', 'first-run', 'setup'],
    content: `### Introduction
Mahi AI is designed to be an expressive, fun, and privacy-focused virtual companion. Setting up is direct, simple, and takes less than two minutes.

### Step 1: Secure a Google Gemini API Key
To connect, Mahi AI requires a developer key. This allows the web app to speak directly with Google's state-of-the-art models on your behalf.
1. Open [Google AI Studio](https://aistudio.google.com).
2. Authenticate with your Gmail/Google Account.
3. Click **Get API Key** in the side navigation panel.
4. Select **Create API Key** and pick your desired billing tier (the free tier is perfect for initial use).
5. Copy the generated key.

### Step 2: Configure Onboarding
1. Enter your name in the onboarding screen. This is what Mahi will call you.
2. Select your desired interface theme. You can choose from Neon Purple, Cyberpunk Pink, Forest Emerald, or Midnight Blue.
3. Paste your secret key into the API Key input box.
4. Click **Connect & Complete Onboarding**.

### Step 3: Start Talking
1. Click the large glowing mic dial in the center.
2. Your browser will request access to your Microphone. Select **Allow**.
3. Once the connection completes, Mahi's status indicator will switch to **Awaiting Audio** or **Awaiting Input**.
4. Say hello! "Hello Mahi, kaisa chal raha hai?" or ask her how she is doing.
5. Tap the microphone dial again at any time to disconnect or interrupt her.`
  },
  {
    id: 'art-2',
    title: 'How to Obtain a Free Gemini API Key',
    category: 'Creating Gemini API Key',
    summary: 'Detailed instructions on generating, securing, and activating your personal Google developer credentials.',
    tags: ['api-key', 'credentials', 'google-studio'],
    content: `### Obtaining Your API Key
Your Gemini API Key is a secure credential that lets your web client interact directly with Google\'s Gemini neural networks. Follow this checklist to set up:

### Detailed Process
1. **Visit Google AI Studio**: Go to [aistudio.google.com](https://aistudio.google.com).
2. **Access Project Console**: Sign in using any active Google/Gmail address.
3. **Generate Key**: Click the prominent blue **Get API Key** button in the top left.
4. **Accept Developer Policy**: Agree to Google\'s terms for developer evaluations (Google does not charge for standard API requests under the free tier threshold).
5. **Copy To Clipboard**: Click the copy icon next to the generated string.

### Secure Handling Precautions
* **Never post your key publicly**: Do not share it in code repositories, forums, or with screenshots.
* **Local Security**: Mahi AI stores your key securely in your browser\'s sandbox. It never touches Mahi\'s servers.
* **Flush Key**: You can completely delete the key from Settings at any time, which permanently clears it from your machine.`
  },
  {
    id: 'art-3',
    title: 'Troubleshooting: API Key Invalid Error',
    category: 'API Key Invalid',
    summary: 'Resolving connection rejections, region limitations, and credential formatting issues.',
    tags: ['error', 'api-key', 'auth-failure'],
    content: `### Resolving API Key Rejections
If your Mahi console displays a red status bar stating "API Key Invalid" or connection drops immediately, trace these common culprits:

### 1. Spaces or Formatting Typos
* Ensure there are no spaces, line breaks, or special characters copied before or after your key.
* The key should look like a long string of letters and numbers (typically beginning with 'AIzaSy').

### 2. Country/Region Eligibility
* Google AI Studio\'s developer keys have specific territorial availability rules. Ensure you are accessing from a supported country.
* If your local country is not yet supported, you may experience connection issues.

### 3. Account Suspended or Quota Limits
* Check your billing dashboard or project limits in Google Cloud Console.
* If you exceeded your free usage thresholds (RPM/TPM), Google will temporarily refuse connections with a 429 status. Wait a minute and try again.`
  },
  {
    id: 'art-4',
    title: 'Troubleshooting: Voice or Audio Not Working',
    category: 'Voice Not Working',
    summary: 'Fixing silent responses, blocked autoplay contexts, and audio hardware failures.',
    tags: ['audio-error', 'speaker', 'silence'],
    content: `### Solving Audio Output Issues
If Mahi\'s wave animations move but you hear no voice, work through these diagnostic checks:

### 1. Browser Autoplay Blocks
* Modern web browsers block websites from auto-playing sound.
* Tap anywhere on the Mahi dashboard screen to activate the audio system.

### 2. Device Mute Status
* Check if your physical headphones, speakers, or monitor sound controls are active.
* On iOS (iPhone/iPad), ensure your physical ring/silent switch is NOT flipped to silent/red, as iOS Safari mutes speech API output on silent devices.

### 3. System Audio Context Resets
* If the audio stream is stuck, click the Settings gear icon, and press "Clear All Data" or click **Reset Connection** on the error overlay to force-initialize Web Audio.`
  },
  {
    id: 'art-5',
    title: 'Microphone Permission Reset Guide',
    category: 'Microphone Permission',
    summary: 'Enabling browser mic access on Chrome, Safari, Android, and iOS devices.',
    tags: ['microphone', 'permission', 'privacy-settings'],
    content: `### Resetting Mic Access Permissions
Mahi AI requires active microphone permissions to capture your verbal prompts. If you denied permission initially or get a mic error, reset it using this guide:

### Google Chrome (Desktop)
1. Look at the left side of the address bar at the top of Chrome.
2. Click the lock icon next to the URL.
3. Toggle the **Microphone** switch to the **Allow** state.
4. Refresh the page.

### Apple Safari (iOS & macOS)
1. Open the macOS **System Settings** -> **Privacy & Security** -> **Microphone** and ensure Safari is checked.
2. On iOS, open **Settings** -> **Safari** -> **Microphone** and choose **Ask** or **Allow**.
3. Inside the Safari browser, tap the 'aA' icon in the URL bar, go to Website Settings, and set Microphone to **Allow**.

### Mobile Browsers (Android)
1. Go to your phone\'s Settings -> Apps -> Chrome -> Permissions -> Microphone and select **Allow while using the app**.`
  },
  {
    id: 'art-6',
    title: 'Step-by-Step Image Upload Guide',
    category: 'Image Upload Guide',
    summary: 'How to upload files for visual inspection and ask Mahi questions about screenshots or photos.',
    tags: ['image', 'multimodal', 'vision'],
    content: `### Utilizing Mahi\'s Visual Vision
Mahi AI features multimodal capabilities, letting her analyze and respond to photos, screenshots, and graphics.

### To Upload an Image:
1. Ensure Mahi AI is connected and active (click the mic dial).
2. Tap the upload (+) button located on the bottom left.
3. Select any image (JPG, PNG, WebP) from your device.
4. Once selected, the image is parsed into base64 and sent directly to Gemini.
5. Ask Mahi a question about it, such as "Is file me kya likha hai?" or "How is my photo looking?".
6. Mahi will respond vocally, integrating her visual findings into her sassy or sweet conversation.`
  },
  {
    id: 'art-7',
    title: 'Understanding Common AI & API Errors',
    category: 'Common Errors',
    summary: 'Deciphering standard network codes, rate limits, and model timeout exceptions.',
    tags: ['errors', 'codes', 'diagnostic'],
    content: `### API Diagnostic Codes
When calling external networks, you may encounter standardized developer errors. Here is how to read and resolve them:

### 1. QuotaExceeded (429)
* **What it means**: You have sent too many requests in a short period, exceeding Google AI Studio\'s free-tier rate limitations.
* **Resolution**: Wait 60 seconds before speaking again. If this happens frequently, consider upgrading your AI Studio tier.

### 2. ServiceUnavailable (503)
* **What it means**: Google\'s servers are experiencing temporary outages or excessive load.
* **Resolution**: Keep your connection active or try resetting Mahi after a few minutes.

### 3. Network Connection Timeout
* **What it means**: Your internet latency is too high, disrupting the live audio stream.
* **Resolution**: Switch from mobile data to a stable Wi-Fi network and click "Reset Connection".`
  }
];

export const TUTORIALS: TutorialCard[] = [
  {
    id: 'tut-1',
    title: 'How to Get Gemini API Key',
    duration: '3 min',
    difficulty: 'Beginner',
    description: 'Get a free, secure development key from Google AI Studio to power Mahi\'s intelligence.',
    steps: [
      'Open a web browser and go to aistudio.google.com.',
      'Sign in with your Google Account credentials.',
      'Click the "Get API Key" button in the side navigation menu.',
      'Tap "Create API Key" and agree to the basic developer terms.',
      'Copy the secure API Key string (which starts with "AIzaSy") directly to your clipboard.',
      'Never share this key with anyone. It is your personal access key!'
    ]
  },
  {
    id: 'tut-2',
    title: 'How to Setup Mahi AI',
    duration: '2 min',
    difficulty: 'Beginner',
    description: 'Configure your companion with your name, local API key, and beautiful custom neon themes.',
    steps: [
      'Access Mahi AI and proceed past the introductory screens.',
      'Type your desired name into the "Your Name" box so Mahi can address you.',
      'Paste your copied Google Gemini API Key into the secure "Enter Gemini API Key" field.',
      'Choose your theme (Purple, Pink, Emerald, or Blue) to fit your vibe.',
      'Click "Connect & Start" to finish onboarding and establish your direct client link.',
      'To change settings or switch themes later, simply tap the gear icon in the top right.'
    ]
  },
  {
    id: 'tut-3',
    title: 'How Voice AI Works',
    duration: '4 min',
    difficulty: 'Intermediate',
    description: 'A behind-the-scenes look at real-time local audio streaming and synthesis pipelines.',
    steps: [
      'When you click the glowing center dial, your browser requests secure microphone permissions.',
      'Your spoken voice is captured and resampled locally to 16kHz, 16-bit mono PCM chunks.',
      'These digital speech chunks are streamed securely using WebSockets directly to Google\'s live endpoints.',
      'Gemini processes your Hinglish speech, triggers a custom emotion expression tool, and generates audio responses.',
      'Mahi receives 24kHz Lyra synthetic audio back and uses the browser Web Audio API to play it.',
      'The voice avatar syncs mouth-open and eyes-closed frames dynamically to output volume levels!'
    ]
  },
  {
    id: 'tut-4',
    title: 'How Image Analysis Works',
    duration: '3 min',
    difficulty: 'Intermediate',
    description: 'Master multimodal AI visual tracking, screenshot shares, and photograph uploads.',
    steps: [
      'Click the bottom-left Plus (+) button or click the Monitor icon to initiate a screen capture.',
      'For screenshots, your browser prompts you to select a specific window or full display monitor to watch.',
      'The app captures a quiet visual frame, compresses it into a lightweight JPG buffer, and converts it to base64.',
      'This package is transferred to Google\'s multimodal models alongside your voice or text prompts.',
      'Mahi is instructed to use her eyes, reading text, describing scenes, or examining your code.',
      'All visuals are analyzed in real-time without ever passing through middleman servers!'
    ]
  },
  {
    id: 'tut-5',
    title: 'Pitch Calibration & Diagnostics',
    duration: '4 min',
    difficulty: 'Advanced',
    description: 'Calibrate the built-in vocal tracker and YIN algorithms to tune Mahi\'s companion responses.',
    steps: [
      'Open Settings and toggle "Vocal Timbre Tracker" on.',
      'Click "Voice Calibration" to open the YIN diagnostics overlay.',
      'Say/sing a continuous vowel sound (like "Aaah" or "Ooooh") for 3 seconds into your microphone.',
      'The custom YIN pitch algorithm analyzes the audio buffers to locate fundamental frequencies in Hz.',
      'The app detects your svara note (e.g., C3, A#4) and estimates your voice profile (Madhur, Nanha, etc.).',
      'The system sends this calibration data to Mahi, who adapts her sassy companion persona to compliment your voice!'
    ]
  }
];
