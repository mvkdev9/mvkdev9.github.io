import { FaDollarSign, FaGlobeAmericas, FaMobileAlt, FaRunning, FaUsers } from "react-icons/fa";

export const goals = [
  {
    "id": 1,
    "title": "Build and Publish 100 Mobile Apps",
    "description": "Master product execution by shipping 100 times. Quantity leads to quality.",
    "href": "/apps",
    color: "#4F46E5", // Indigo 600
    icon: FaMobileAlt,
    "progress": 0,
    "subtasks": [
      "Ship first 5 MVP apps",
      "Reach 25 published apps",
      "Scale & Optimize: Cross 50 apps",
      "Mastery: Complete the 100-app saga"
    ]
  },
  {
    "id": 2,
    "title": "Earn $1,000,000 Revenue",
    "description": "Building a million-dollar business from scratch with total transparency.",
    "href": "/revenue",
    color: "#a855f7", // Purple 500
    icon: FaDollarSign,
    "progress": 0,
    "subtasks": [
      "Clear $30K debt (Zero Base)",
      "Financial Stability: Earn $2K/month",
      "Scaling: Cross $100K total revenue",
      "Asset Building: Cross $200K (Unlock Property)",
      "Legacy: Hit $1M total revenue milestone"
    ]
  }, 
  {
    "id": 3,
    "title": "Reach 1M Community",
    "description": "Growing a tribe of a million indie hackers and dreamers.",
    "href": "/community",
    color: "#E11D48", // Rose 600
    icon: FaUsers,
    "progress": 0,
    "subtasks": [
      "First 1,000 True Fans",
      "Influence: Reach 10,000 followers",
      "Authority: Reach 100,000 members",
      "Impact: Cross 500,000 reach",
      "Army: Hit 1,000,000 subscribers"
    ]
  },
  {
    "id": 4,
    "title": "Run a Marathon",
    "description": "The ultimate test of physical and mental endurance.",
    "href": "/marathon",
    color: "#F97316", // Orange 500
    icon: FaRunning,
    "progress": 0,
    "subtasks": [
      "Habit: Run 3x week for 30 days",
      "Endurance: Run first 10K non-stop",
      "Milestone: Complete Half Marathon (21.1km)",
      "Glory: Complete Full Marathon (42.2km)"
    ]
  },
  {
    "id": 5,
    "title": "Global Exploration",
    "description": "Exploring all of India and 10 countries across the globe.",
    "href": "/travel",
    color: "#0EA5E9", // Sky 500
    icon: FaGlobeAmericas,
    "progress": 0,
    "subtasks": [
      "National Mastery: Visit 14/28 Indian States",
      "Full Circle: Visit all 28 Indian States",
      "Global: First 3 International trips",
      "Explorer: Visit 10 countries total"
    ]
  }
]