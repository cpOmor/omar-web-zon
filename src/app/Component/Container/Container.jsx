const Container = ({ children, className }) => {
  return (
    <>
      <div className={`max-w-[1200px] mx-auto md:px-0 px-2 ${className}`}>
        {" "}
        {children}{" "}
      </div>
    </>
  );
};
export default Container;
