import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './styles.scss';

import { labels } from 'main/constants';

const SearchInput = (props) => {
    const { placeholder = labels.SEARCH, onSearch } = props;
    const searchEl = useRef(null);

    return (
        <InputGroup className='SearchInput'>
            <FormControl
                ref={searchEl}
                placeholder={placeholder}
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        onSearch(searchEl.current.value);
                    }
                }}
            />
            <InputGroup.Append>
                <Button onClick={() => onSearch(searchEl.current.value)}>
                    <FaSearch />
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default SearchInput;

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired

};
