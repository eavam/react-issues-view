import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputSearch from './InputSearch'
import AutocompleteList from './AutocompleteList'

const AutocompleteWrap = styled.div`
  position: relative;
`

const AutocompleteInputSearch = props => {
  const {
    handleChangeInput,
    inputVal,
    handleSearch,
    autocompliteItems,
    onFocus,
    onBlur,
    openAutocomplite,
    disabled
  } = props

  return (
    <AutocompleteWrap>
      <InputSearch
        onChange={handleChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
        value={inputVal}
        placeholder='Repository'
        autoComplete='off'
        disabled={disabled}
        required
      />
      { !!(autocompliteItems.length && openAutocomplite) &&
        <AutocompleteList items={autocompliteItems} handleSearch={handleSearch} />
      }
    </AutocompleteWrap>
  )
}

AutocompleteInputSearch.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  autocompliteItems: PropTypes.array.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  openAutocomplite: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default AutocompleteInputSearch