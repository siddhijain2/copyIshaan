import {
  kalamkaari,
  Enuncify,
  Speakwise,
  feature01,
  feature04,
  feature02,
  feature03,
  Divya,
  Muskan,
  Siddhi,
} from '../assets'

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    link: '#home',
  },
  {
    id: 'games',
    title: 'Games',
    link: '#games',
  },
  {
    id: 'features',
    title: 'About us',
    link: '#features',
  },
  {
    id: 'team',
    title: 'Team',
    link: '#team',
  },
  {
    id: 'login',
    title: 'Login',
    link: '/login',
  },
]

export const navLinksGames = [
  {
    id: 'home',
    title: 'Home',
    link: '#home',
  },
  {
    id: 'games',
    title: 'Games',
    link: '#games',
  },
  {
    id: 'profile',
    title: 'Profile',
    link: '/profile',
  },
]
export const games = [
  {
    id: 'game-1',
    icon: kalamkaari,
    title: 'Kalamkaari',
    content:
      'Learn to recognize words and letters by reading and writing it.Get instant feedback on accuracy and speed.',
    link: '/kalamkaari',
  },
  {
    id: 'game-2',
    icon: Enuncify,
    title: 'Enuncify',
    content:
      'Learn to understand the context of the sentences by speaking with correct sentiment and pronunciation.',
    link: '/enuncify',
  },
  {
    id: 'game-3',
    icon: Speakwise,
    title: 'Speakwise',
    content:
      'Learn public speaking by improving oration skills like fluency, confidence and voice modulation.',
    link: '/speakwise',
  },
]

export const members = [
  {
    id: 'member-1',
    icon: Divya,
    title: 'Divya Sinha',
    post: 'Electrical Engineering',
    github: 'https://github.com/divya-ilona',
    linkedin: 'https://www.linkedin.com/in/divya-sinha01/',
  },
  {
    id: 'member-2',
    icon: Muskan,
    title: 'Muskan Agrawal',
    post: 'Electrical Engineering',
    github: 'https://github.com/muskan0202',
    linkedin: 'https://www.linkedin.com/in/muskan-agrawal02/',
  },
  {
    id: 'member-3',
    icon: Siddhi,
    title: 'Siddhi Jain',
    post: 'Civil Engineering',
    github: 'https://github.com/siddhijain2',
    linkedin: 'https://www.linkedin.com/in/siddhi-jain-1898b4171/',
  },
]

export const features = [
  {
    id: 'feature-1',
    icon: feature01,
    title: 'Deep Insights',
    content:
      'Get analysis about writing speed, efficiency and speech fluency and pronunciation to track progress.',
  },
  {
    id: 'feature-2',
    icon: feature02,
    title: 'Efficient Writing',
    content:
      'Better your grasp over different fonts by rewriting and understanding given text.',
  },
  {
    id: 'feature-3',
    icon: feature03,
    title: 'Enhanced Diction',
    content:
      'By listening and repeating sentences, learn better pronunciation and gain confidence.',
  },
  {
    id: 'feature-4',
    icon: feature04,
    title: 'Fun Learning',
    content:
      'Increase vocabulary, gain information on various topics and learn new facts while improving your skills.',
  },
]

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.hoobank.com/our-partner/',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.hoobank.com/become-a-partner/',
      },
    ],
  },
]

export const textToReadInfo = {
  "The flock of birds in the sky is such a beautiful sight!": {
    id: "The flock of birds in the sky is such a beautiful sight!",
    emotion: "calm",
    keyword: "flock",
    meaning:
      "a number of birds of one kind feeding, resting, or travelling together.",
  },
  "Wow, look at that swarm of butterflies!": {
    id: "Wow, look at that swarm of butterflies!",
    emotion: "surprise",
    keyword: "swarm",
    meaning: "a large or dense group of flying insects.",
  },
  "Yay!! Mummy bought dozens of bananas.": {
    id: "Yay!! Mummy bought dozens of bananas.",
    emotion: "happy",
    keyword: "dozen",
    meaning: "a group or set of twelve.",
  },
};