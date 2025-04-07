import {
  SearchButton,
  SearchContainer,
  SearchDropdown,
  SearchInput,
  SearchWrapper,
} from "./Filter.style";

const options = [
  { label: "All", value: "all" },

  { label: "All", value: "all" },
];
const datesOptions = [
  { label: "Date ascending", value: "asc" },

  { label: "Date descending", value: "desc" },
];

const Filter = () => {
  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchInput placeholder="Enter at least 3 letters to search..." />
        <SearchButton>Search</SearchButton>
      </SearchWrapper>

      <SearchDropdown>
        {options.map((item, index) => {
          return (
            <option key={index} value={item?.value}>
              {item?.label}
            </option>
          );
        })}
      </SearchDropdown>
      <SearchDropdown>
        {datesOptions.map((item, index) => {
          return (
            <option key={index} value={item?.value}>
              {item?.label}
            </option>
          );
        })}
      </SearchDropdown>
    </SearchContainer>
  );
};
export default Filter;
