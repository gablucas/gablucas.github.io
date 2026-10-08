import { Item, List } from './styles';

const Technologies = () => {

  const tech = ["C#", ".NET", "ASP.NET", "Entity Framework", "Dapper", "MySQL", "PostgreSQL", "Oracle", "Redis", "RabbitMQ", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Azure", "Blazor", "Node.js", "Flutter", "Scrum", "Kanban", "Git"]

  return (
    <List>
      {tech.map((technology, index) => (
        <Item key={index}>{technology}</Item>
      ))}
    </List>
  )
}

export default Technologies;