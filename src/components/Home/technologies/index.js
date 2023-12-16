import { Item, List } from './styles';

const Technologies = () => {

  const tech = ["C#", ".NET", "ASP.NET", "Entity Framework", "Dapper", "SQL Server", "Oracle", "HTML", "CSS", "JavaScript", "React", "Typescript", "JEST", "GIT"]

  return (
    <List>
      {tech.map((technology, index) => (
        <Item key={index}>{technology}</Item>
      ))}
    </List>
  )
}

export default Technologies;