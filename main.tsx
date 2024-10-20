import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: "127 ZBI",
    description: "Сайт для 127 окремої бригади ТРО міста Харкова",
    vercelLink: "https://127-zbir.vercel.app/",
    githubLink: "https://github.com/baza-trainee/127-zbi",
    role: "QA Engineer",
    techs: ["React", "Next.js", "Typescript"],
    background: "/api/placeholder/800/400" // Placeholder, replace with actual screenshot
  },
  {
    name: "Donation Baza",
    description: "Платформа для сбора пожертвований",
    vercelLink: "https://donation-baza.vercel.app/ua",
    githubLink: "https://github.com/baza-trainee/donation-baza",
    role: "QA Engineer",
    techs: ["React", "Next.js", "Typescript"],
    background: "/api/placeholder/800/400" // Placeholder, replace with actual screenshot
  },
  {
    name: "Baza CRM",
    description: "CRM система для управления проектами",
    vercelLink: "https://baza-crm-frontend.vercel.app/",
    githubFrontLink: "https://github.com/baza-trainee/baza-crm-frontend",
    githubBackLink: "https://github.com/baza-trainee/baza-crm-backend",
    role: "QA Engineer",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    background: "/api/placeholder/800/400" // Placeholder, replace with actual screenshot
  },
  {
    name: "Peaceful Warrior Foundation",
    description: "Веб-сайт для фонда Peaceful Warrior Foundation",
    vercelLink: "https://peaceful-warrior-foundation.vercel.app/",
    githubLink: "https://github.com/baza-trainee/peaceful-warrior-foundation",
    role: "QA Engineer",
    techs: ["React", "Next.js", "Typescript"],
    background: "/api/placeholder/800/400" // Placeholder, replace with actual screenshot
  }
];

const ProjectModal = ({ project, isOpen, onClose }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>{project.name}</DialogTitle>
      </DialogHeader>
      <div className="relative h-64 mb-4">
        <img src={project.background} alt={project.name} className="absolute inset-0 w-full h-full object-cover rounded-md" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{project.name}</h2>
        </div>
      </div>
      <DialogDescription>
        <p className="mb-2">{project.description}</p>
        <p className="mb-2">Role: {project.role}</p>
        <p className="mb-2">Technologies: {project.techs.join(', ')}</p>
        <div className="flex mt-4">
          <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" className="flex items-center mr-4 bg-blue-500 text-white px-3 py-1 rounded">
            <ExternalLink className="mr-1" size={16} /> Vercel
          </a>
          <a href={project.githubLink || project.githubFrontLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-700 text-white px-3 py-1 rounded">
            GitHub
          </a>
        </div>
        {project.githubBackLink && (
          <div className="mt-2">
            <a href={project.githubBackLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-700 text-white px-3 py-1 rounded">
              Backend GitHub
            </a>
          </div>
        )}
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

const QAPortfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <Card>
            <CardHeader>About Me</CardHeader>
            <CardContent>
              <p>Experienced QA Engineer with a passion for ensuring software quality...</p>
              {/* Add more details about yourself */}
            </CardContent>
          </Card>
        );
      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <img src={project.background} alt={project.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{project.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="mb-2 line-clamp-2">{project.description}</p>
                  <Button onClick={() => setSelectedProject(project)}>Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 'contact':
        return (
          <Card>
            <CardHeader>Contact Information</CardHeader>
            <CardContent>
              <p>Email: john.doe@example.com</p>
              <p>LinkedIn: linkedin.com/in/johndoe</p>
              {/* Add more contact information */}
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">John Doe - QA Engineer</h1>
      
      <div className="mb-4">
        <Button 
          variant={activeTab === 'about' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('about')}
          className="mr-2"
        >
          About Me
        </Button>
        <Button 
          variant={activeTab === 'projects' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('projects')}
          className="mr-2"
        >
          Projects
        </Button>
        <Button 
          variant={activeTab === 'contact' ? 'default' : 'secondary'}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </Button>
      </div>

      {renderTabContent()}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default QAPortfolio;
