import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {props.names.map(person => (
        <li key={`${person.first} ${person.last}`}>
          {person.first} {person.last}
        </li>
      ))}
    </ul>
  );
};
