import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "March 2025",
      link: "https://www.credly.com/badges/8579b7a5-d070-45ee-a779-211fc955350f/linked_in_profile"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "July 2020",
      link: "https://media.geeksforgeeks.org/courses/certificates/e12e95158a71c904f7b1eb8fa18c7ce4.pdf"
    },
    // Add more certifications as needed
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Certifications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Date: {cert.date}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}