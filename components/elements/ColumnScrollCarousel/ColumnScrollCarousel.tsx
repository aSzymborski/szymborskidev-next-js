import Card from "../CardProject/CardProject";

interface Project {
    id: string
    title: string
    photo: any
  }

export default function ColumnScrollCarousel(data: any) {
    return(
        <div className="flex flex-col gap-2">
        {data.data.map((project: Project, index: number ) => {
              return <Card id={project.id} photo={project.photo} title={project.title} index={index} totalProjects={data.data.length}  key={project.id}/>;
            })}
        </div> 
    )
}