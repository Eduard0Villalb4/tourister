/* eslint-disable @typescript-eslint/no-explicit-any */
const Icon = (props: any) => {
    return (
      <span {...props} className={`material-icons material-symbols-outlined ${props.className}`}>
        {props.children}
      </span>
    );
  };
  
  export default Icon;
  