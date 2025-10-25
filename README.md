[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white) ![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

# AI Calendar Events

**Transform messages into calendar events — effortlessly.**

AI Calendar Events is an intelligent web application that uses Google's Gemini AI to automatically extract event information from any text message or email and generate ready-to-use calendar entries for Google Calendar, Outlook, and downloadable ICS files.

**[Try it live →](https://aical.adatepe.dev)**

---

## Features

### AI-Powered Event Extraction

- Automatically extracts event titles, descriptions, locations, and times from natural language
- Handles multiple events from a single input
- Intelligent date and time parsing (e.g., "tomorrow at 3pm", "next Tuesday")
- Comprehensive context understanding

### Universal Calendar Support

- **Google Calendar Links** - One-click add to Google Calendar
- **Microsoft Outlook Links** - Seamless Outlook integration
- **ICS File Downloads** - Compatible with any calendar application
- **Multi-Event Support** - Extract and create multiple events simultaneously

### Modern, Animating UI

- Sleek dark theme with gradient accents
- Smooth animations powered by Framer Motion
- Glassmorphism effects and modern design
- Fully responsive and accessible
- Interactive magnetic buttons and spotlight cards

### Privacy-First

- No data storage - your messages are processed and discarded immediately
- Secure AI processing via Google's API
- No tracking or monitoring
- Client-side event generation

---

## Tech Stack

### Core Technologies

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest React with Server Components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion 12](https://www.framer.com/motion/)** - Production-ready animation library
- **[Google Gemini 2.0 Flash](https://ai.google.dev/)** - Advanced AI for event extraction
- **[Three.js](https://threejs.org/)** - 3D animations and effects

### Additional Libraries

- `ics` - Generate ICS calendar files
- `lucide-react` - Beautiful icons
- `react-icons` - Additional icon sets
- `class-variance-authority` - Component variants
- `three` - 3D animations

---

## Getting Started

### Prerequisites

- **Node.js** 18+ or **Bun** 1.0+
- **Google AI Studio API Key** ([Get one here](https://aistudio.google.com/))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/noluyorAbi/aical.git
cd aical
```

2. **Install dependencies**

```bash
npm install
# or
bun install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
GOOGLE_API_KEY=your-google-api-key-here
```

4. **Run the development server**

```bash
npm run dev
# or
bun dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## How It Works

### 1. **Paste Message Content**

Simply paste any message, email, or text containing event information. Examples:

- Meeting invitations
- Event announcements
- Appointment reminders
- RSVP messages

### 2. **AI Processing**

The application uses Google's Gemini AI to intelligently extract:

- Event title
- Description (comprehensive context preserved)
- Location (with automatic detection)
- Start date & time
- End date & time

### 3. **Instant Calendar Generation**

Get ready-to-use links and files:

- Google Calendar one-click add link
- Outlook Calendar integration link
- Downloadable `.ics` file for any calendar app

---

## Use Cases

### Professional

- Convert meeting invitations into calendar events
- Extract conference details from announcements
- Schedule team events from Slack/email threads

### Personal

- Add event details from party invitations
- Schedule appointments from reminders
- Organize social events from group chats

### Email Workflow

- Convert Outlook invitations to Google Calendar
- Sync events across multiple calendars
- Import events from email templates

---

## Configuration

### API Configuration

The application uses Google's Gemini API for AI processing. Configure your API key in the environment:

```env
GOOGLE_API_KEY=your-key-here
```

### Customization

- **Styling**: Edit `app/globals.css` or use Tailwind classes
- **AI Prompt**: Modify the prompt in `app/api/event/route.ts`
- **Components**: Customize UI components in `components/`
- **Animations**: Adjust Framer Motion animations in UI components

---

## Project Structure

```
ai-calender-events/
├── app/
│   ├── api/
│   │   └── event/
│   │       └── route.ts          # API endpoint for AI processing
│   ├── page.tsx                  # Main landing page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── EventForm.tsx             # Main event extraction form
│   └── ui/                       # Reusable UI components
│       ├── react-bits.tsx        # Custom animated components
│       ├── AnimatedText.tsx
│       ├── SplitText.tsx
│       └── FadeText.tsx
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                   # Dependencies
```

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'feat: Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contributing Guidelines

- Follow conventional commit messages
- Write clear, commented code
- Test your changes thoroughly
- Update documentation as needed

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Alperen Adatepe**

- Website: [aical.adatepe.dev](https://aical.adatepe.dev)
- GitHub: [@noluyorAbi](https://github.com/noluyorAbi)

---

## Show Your Support

If you find this project useful, please give it a star on GitHub!

![GitHub Stars](https://img.shields.io/github/stars/noluyorAbi/aical?style=social)

---

**Built with Next.js, React, TypeScript, and Google Gemini AI**
