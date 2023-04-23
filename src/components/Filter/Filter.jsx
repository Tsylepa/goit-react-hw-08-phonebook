import { FilterInput } from './Filter.styled';
import { handleFilter } from 'redux/contacts/filter-slice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterInput
      onInput={e => dispatch(handleFilter(e.target.value))}
      value={useSelector(state => state.filter)}
    />
  );
};

export default Filter;
