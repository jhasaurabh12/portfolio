import { Card, CardContent } from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Experience</h1>

        <div className="space-y-12">
          {/* Current Experience */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">Standard Chartered Bank GBS</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Senior Software Engineer</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 dark:text-gray-300">July 2021-Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Promoted to Senior Software Engineer for leading the migration of SPM module to the open-source platform and delivering critical backend solutions under tight deadlines</li>
                <li>Led the migration of Security Patch Management (SPM) module from PEGA(low code tool based on JAVA) to a new open-source tech stack (Quarkus, GraphQL, Lit Web Components), focusing on both backend and frontend redesign with performance improvements</li>
                <li>Developed 30+ REST APIs using Jakarta REST standards in Quarkus and optimized data access through Hasura GraphQL; improved page load times by 3x for large-scale (TB) data tables</li>
                <li>Rebuilt and optimized critical bulk import and bulk download features, reducing processing time from 10–15 minutes for 10k records to under 3 minutes for 150k–200k records by introducing dedicated microservices</li>
                <li>Built fine-grained authentication and authorization across frontend and backend by integrating OpenFGA models with Keycloak-based staff and system realms, and configuring sidecar proxies for secure access control of API and GraphQL microservices</li>
                <li>Rewrote 7+ independent batch jobs using Quarkus JBeret (Jakarta Batch API), developed a scalable job monitoring framework, and mentored 4+ new developers during the migration project</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Software Engineer</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Led development of resilient batch processing system for daily delta data synchronization with ServiceNow System using REST API, ensuring zero data loss across failures</li>
                  <li>Designed and implemented Superseded Workflow creating a Directed Acyclic Graph structure to automate patch updates across related cases which reduces user's effort in manually updating those patch information</li>
                  <li>Built End-to-End OLA Enhancements, expanding operational tracking across 6+ workflow stages, crucial for regulatory metrics</li>
                  <li>Collaborated across cross-functional teams to deliver backend enhancements for 15+ BAU releases and 6+ major releases, consistently meeting strict SLAs and audit commitments</li>
                  <li>In the initial training period, developed a prototype of full-stack Payment Initiation application supporting corporate banking operations using ReactJS, Spring Boot, PostgreSQL, REST APIs; designed backend architecture and database schema</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}