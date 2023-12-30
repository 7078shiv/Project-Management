
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
export default function ButtonUsage({name,...props}) {
  return <Button variant="outlined" {...props}>{name}</Button>;
}