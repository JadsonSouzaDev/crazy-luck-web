type GSectionProps = {
  children: JSX.Element[] | JSX.Element;
  id: string;
  className?: string;
};

const GSection = ({ children, id, className }: GSectionProps) => {
  return (
    <div
      id={id}
      className={`flex flex-col min-w-full pt-0 p-3 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default GSection;
