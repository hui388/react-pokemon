
import Select from 'react-select'
import React from 'react';


    const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Search = () => (
  <Select options={options} />
)

export default Search
