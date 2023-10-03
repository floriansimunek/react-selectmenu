/**
 * React component that represents a chevron icon
 * @component
 * @returns {JSX.Element}
 */
const chevronIcon: React.FC = () => {
  return (
    <div className="select__menu--icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="select__menu--icon select__menu--icon-chevron"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default chevronIcon;
