import { FaApple, FaDesktop, FaDollarSign, FaGlobeAmericas, FaHome, FaLaptop, FaMapMarkedAlt, FaMobileAlt, FaRunning, FaTree, FaUsers } from "react-icons/fa";

export const goals = [
  {
    "id": 1,
    "title": "Build and Publish 100 Mobile Apps",
    "description": "Launch 100 mobile apps to generate revenue and experience.",
    color: "#4F46E5", // Indigo 600
    icon: FaMobileAlt,
    "progress": 0,
    "subtasks": [
      "Publish first 10 apps",
      "Reach 50 apps milestone",
      "Optimize monetization",
      "Hit 100 apps published"
    ]
  },
  {
    "id": 2,
    "title": "Make a Million Dollars",
    "description": "Generate $1M through freelancing, content, and apps.",
    color: "#16A34A", // Green 600
    icon: FaDollarSign,
    "progress": 1,
    "wins": [
      "Saved $10K from 4years of salary (2021-2025)",
    ],
    "subtasks": [
      "Earn $1K/month",
      "Earn $5K/month",
      "Cross $100K in total revenue",
      "Hit $1M milestone"
    ]
  }, {
    "id": 3,
    "title": "Reach 1M Subscribers",
    color: "#E11D48", // Rose 600
    icon: FaUsers,
    "description": "Grow personal brand on YouTube, Instagram, Twitter.",
    "progress": 0,
    "subtasks": ["1000 subs", "10k", "100k", "1M"]
  },

  {
    "id": 4,
    "title": "Run a Marathon",
    "description": "Train and complete a full marathon.",
    color: "#F97316", // Orange 500
    icon: FaRunning,
    "progress": 0,
    "subtasks": ["Run 5K", "Run 10K", "Run Half Marathon", "Run Full Marathon"]
  },
  {
    "id": 5,
    "title": "Travel Every State in India",
    "description": "Explore the culture, food, and people of all Indian states.",
       color: "#0EA5E9", // Sky 500
    icon: FaMapMarkedAlt,
    "progress": 0,
    "subtasks": ["South India", "North India", "West India", "North-East India"]
  },
  {
    "id": 6,
    "title": "Travel 10 Countries",
    color: "#8B5CF6", // Violet 500
    icon: FaGlobeAmericas,

    "description": "Visit at least 10 countries across continents.",
    "progress": 0,
    "subtasks": ["Get passport", "Plan travel", "Start with 1 country"]
  },
  {
    "id": 7,
    "title": "Own a House",
    "description": "Buy a comfortable, modern house for personal use.",
    color: "#A16207", // Amber 700
    icon: FaHome,
    "progress": 0,
    "subtasks": ["Research locations", "Save down payment", "Finalize purchase"]
  },
  {
    "id": 8,
    "title": "Own 1 Acre of Land",
    "description": "Invest in land for long-term security and sustainability.",
    color: "#22C55E", // Green 500
    icon: FaTree,
    "progress": 0,
    "subtasks": ["Find ideal location", "Set budget", "Purchase land"]
  },


  {
    "id": 9,
    "title": "Own an iPhone and Apple Watch",
    "description": "Buy the latest iPhone and Apple Watch as a milestone reward.",
    color: "#111827", // Gray 900
    icon: FaApple,
    "progress": 0,
    "subtasks": ["Save ₹50K", "Buy iPhone", "Buy Apple Watch"]
  },
  {
    "id": 10,
    "title": "Own a PC and MacBook",
    "description": "Set up an ideal productivity environment with both devices.",
    color: "#334155", // Slate 700
    icon: FaDesktop, // or FaLaptop for MacBook
    secondaryIcon: FaLaptop, //
    "progress": 0,
    "subtasks": ["Buy PC", "Buy latest MacBook"]
  }
]
