import { Item, List } from './styles';

const Technologies = () => {

  const tech = ["C#", ".NET", ".NET CORE", "ASP.NET CORE", "Entity Framework", "SQL Server", "HTML", "CSS", "JavaScript", "React", "Typescript", "JEST", "GIT"]

  return (
    <List>
      {tech.map((technology, index) => (
        <Item key={index}>{technology}</Item>
      ))}
    </List>
  )
}

export default Technologies;