import Badge from 'react-bootstrap/Badge';
const Tags = ({ text, colorTag }) => {
  return (
    <Badge className={`badge ${colorTag}`}> {text}</Badge>
      )
}

      export default Tags