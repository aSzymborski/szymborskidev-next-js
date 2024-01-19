import Card from "../CardProject/CardProject";

interface Project {
  id: string;
  title: string;
  photo: any;
  link: string;
}

export default function ColumnScrollCarousel(data: any) {
  return (
    <div className="flex flex-col gap-2">
      {data.data.map((project: Project, index: number) => {
        return (
          <Card
            id={project.id}
            photo={project.photo}
            title={project.title}
            index={index}
            totalProjects={data.data.length}
            link={project.link}
            key={project.id}
          />
        );
      })}
    </div>
  );
}
