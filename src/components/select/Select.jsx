import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ value, options, onChange }) => (
  <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  value: ''
};

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
