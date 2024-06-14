export const TimeSlot = ({
  slotTime,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  isHovered,
  isSelected,
}: {
  slotTime: Date;
  handleClick: (date: Date) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isHovered: boolean;
  isSelected: boolean;
}) => {
  let className = '';
  if (isHovered) {
    className = 'font-bold border border-border rounded-lg bg-zinc-100';
  } else if (isSelected) {
    className =
      'text-primary font-bold border border-border rounded-lg bg-zinc-100';
  }

  return (
    <div
      onClick={() => handleClick(slotTime)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        `p-2 cursor-pointer w-100 h-16 items-center flex justify-center text-zinc-600  ` +
        className
      }
    >
      {slotTime.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </div>
  );
};
