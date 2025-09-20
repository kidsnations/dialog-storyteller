import { DialogCard } from '@/components/DialogCard';
import { DiagramDisplay } from '@/components/DiagramDisplay';

const Index = () => {
  const dialogs = [
    "Sir, I am unable to relocate due to family responsibilities, as I am the only child looking after my elderly parents, my wife, and children.",
    "I understand the costs are rising in the Caesars project. Along with contributing to the existing project, I would sincerely request you to also consider me for any DevOps project running offshore — I assure you of timely and efficient delivery.",
    "This application is currently monolithic. The next steps are to automate the infrastructure with Terraform and migrate into a containerized environment using Azure Kubernetes Services and Azure Container Registry: Code → Dockerfile → Docker Image → Push to ACR → Kubernetes. I have created this website to give you confidence that I can take up DevOps responsibilities effectively."
  ];

  const diagramUrl = "https://raw.githubusercontent.com/kidsnations/screenshots/main/Project.png";

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8">

        <div className="w-full flex flex-col items-center space-y-8">
          {dialogs.map((dialog, index) => (
            <DialogCard 
              key={index} 
              delay={index * 3000}
              className="w-full"
            >
              <p className="text-lg md:text-xl leading-relaxed text-center font-medium">
                "{dialog}"
              </p>
            </DialogCard>
          ))}

          <DiagramDisplay 
            delay={dialogs.length * 3000} 
            imageUrl={diagramUrl}
          />
        </div>
      </div>
    </main>
  );
};

export default Index;
