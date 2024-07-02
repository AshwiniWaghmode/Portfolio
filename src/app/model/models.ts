export interface Education {
    institute: string;
    Course: string;
    duration: string;
    CGPA: string;
}

export interface WorkExperience {
    role: string;
    company: string;
    duration: string;
    description: string[]
}

export interface Skill {
    name: string;
    level: string;
}

export interface Project{
    title:String;
    technologies:String;
    description:String[];
}