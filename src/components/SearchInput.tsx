import { Input } from "antd"
import { usePagination } from "../hooks/usePagination";

const { Search } = Input;

const SearchInput = () => {
  
  const {limit, setPagination, search } = usePagination();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPagination(1, limit, e.target.value);
  };

  return (
    <Search value={search} size="large" placeholder="input search text" onChange={onSearch} style={{ width: 300 }} />
  )
}
export default SearchInput;