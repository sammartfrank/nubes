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
    className = 'bg-zinc-600 font-bold';
  } else if (isSelected) {
    className = 'bg-zinc-600 text-yellow-600 font-bold';
  }
  return (
    <div
      onClick={() => handleClick(slotTime)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={
        `p-2 cursor-pointer w-100 h-16 items-center flex justify-center text-white  ` +
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
