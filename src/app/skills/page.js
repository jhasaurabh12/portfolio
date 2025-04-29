import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C/C++", "JavaScript"],
    },
    {
      title: "Frontend Technologies",
      skills: ["Lit Framework", "HTML", "Tailwind CSS"],
    },
    {
      title: "Backend Technologies",
      skills: [
        "Microservices Architecture",
        "REST APIs",
        "Spring Boot",
        "GraphQL",
        "Quarkus",
        "Quarkus Batch Processing",
        "Hibernate",
      ],
    },
    {
      title: "Databases",
      skills: ["Oracle SQL", "MySQL", "PostgreSQL"],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "Kubernetes",
        "Docker",
        "AWS EC2",
        "AWS RDS",
        "AWS SQS",
        "AWS SNS",
        "AWS Route 53",
        "AWS S3",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: ["Maven", "Azure DevOps", "Git", "OpenFGA"],
    },
    {
      title: "Core Competencies",
      skills: ["Algorithms", "Data Structures"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Technical Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}