"use client";

export const COUNTER_MIN_VALUE = 1;

type CouterProps = {
  value: number;
  onChange: (value: number) => void;
};

const Counter = ({ value, onChange }: CouterProps) => {
  const insideOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const oldValue = +event.target.value ?? COUNTER_MIN_VALUE;
    const newValue = oldValue < COUNTER_MIN_VALUE ? COUNTER_MIN_VALUE : oldValue;
    onChange(newValue);
  };

  const increase = () => {
    onChange(++value);
  };

  const decrease = () => {
    const newValue = value === COUNTER_MIN_VALUE ? COUNTER_MIN_VALUE : --value;
    onChange(newValue);
  };

  const disabled = value <= COUNTER_MIN_VALUE;

  const buttonClass =
    "w-12 h-10 bg-transparent hover:bg-lime-500 text-lime-500 py-2 px-4 hover:text-white";

  return (
    <div className="flex border border-lime-500 rounded w-fit">
      <button
        disabled={disabled}
        className={`${buttonClass} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={decrease}
      >
        <b>―</b>
      </button>
      <input
        type="number"
        value={value}
        onChange={insideOnChange}
        className="w-12 text-center"
      />
      <button className={buttonClass} onClick={increase}>
        <b>+</b>
      </button>
    </div>
  );
};

export default Counter;
