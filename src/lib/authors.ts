interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Author {
  name: string;
  title: string;
  description: string;
  avatar: string;
  socialLinks: SocialLinks;
}

const authors: Record<string, Author> = {
  "John Doe": {
    name: "John Doe",
    title: "Senior Web Developer",
    description: "John is a seasoned web developer with over 10 years of experience in creating responsive and accessible websites. He specializes in modern JavaScript frameworks and performance optimization.",
    avatar: "/avatar-placeholder.png",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      website: "https://johndoe.com"
    }
  },
  "Jane Smith": {
    name: "Jane Smith",
    title: "UX/UI Designer",
    description: "Jane is a creative designer focused on crafting beautiful and intuitive user experiences. With a background in both design and psychology, she brings a unique perspective to digital product development.",
    avatar: "/avatar-placeholder.png",
    socialLinks: {
      twitter: "https://twitter.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      website: "https://janesmith.design"
    }
  },
  "Alex Johnson": {
    name: "Alex Johnson",
    title: "Full Stack Developer",
    description: "Alex is a full stack developer with expertise in both frontend and backend technologies. They are passionate about building scalable applications and sharing knowledge with the developer community.",
    avatar: "/avatar-placeholder.png",
    socialLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson"
    }
  }
};

export function getAuthorByName(name: string): Author {
  // Return the author if found, otherwise return a default author
  return authors[name] || {
    name: name,
    title: "Content Creator",
    description: "A passionate writer and content creator.",
    avatar: "/avatar-placeholder.png",
    socialLinks: {}
  };
}
